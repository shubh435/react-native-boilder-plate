import { baseURL } from '../config/config.ts';
import { AUTH_TOKEN_KEY } from '../constant/storageKey.ts';
import StorageProvider from './storage.ts';

type IResponseType = 'json' | 'text' | 'blob';
type IResolve<T = any> = {
  response: T | null;
  error: string | null;
  errorResponse: any;
};
type IMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

type SessionExpiredHandler = (message?: string) => void;

// Session expiry callback - will be set by the app
let sessionExpiredCallback: SessionExpiredHandler | null = null;

export const setSessionExpiredCallback = (callback: SessionExpiredHandler) => {
  sessionExpiredCallback = callback;
};

const isSessionExpiredError = (error: any) => {
  const code = error?.response?.error || error?.response?.code || error?.code;
  const message = error?.message || error?.response?.message;

  if (code === 'SESSION_EXPIRED' || code === 'TOKEN_EXPIRED') {
    return true;
  }

  if (typeof message === 'string') {
    const normalized = message.toLowerCase();
    return (
      normalized.includes('session') &&
      normalized.includes('expired')
    );
  }

  return false;
};

const resolve = async <T>(promise: () => Promise<T>): Promise<IResolve<T>> => {
  const resolved: IResolve<T> = {
    response: null,
    error: null,
    errorResponse: null,
  };

  try {
    const response = await promise();
    resolved.response = response;
  } catch (e: any) {
    console.error('NetworkCall Error:', e);
    resolved.error =
      e?.message || 'Something went wrong. Please try again later.';
    resolved.errorResponse = e?.response || e;

    // Handle session expiry
    if (sessionExpiredCallback && isSessionExpiredError(e)) {
      sessionExpiredCallback(
        e?.message ||
          e?.response?.message ||
          'Your session has expired. Please login again.',
      );
    }
  }

  return resolved;
};

const networkCall = async <T = any>(
  url: string,
  method: IMethod = 'GET',
  body?: RequestInit['body'],
  headers?: RequestInit['headers'],
  responseType: IResponseType = 'json',
): Promise<IResolve<T>> => {
  const makeCall = async (): Promise<T> => {
    const fullUrl = /(http(s?)):\/\//i.test(url) ? url : `${baseURL}/${url}`;

    const token = await StorageProvider.getItem(AUTH_TOKEN_KEY);

    const defaultHeaders = {
      'Content-Type':
        body instanceof FormData ? 'multipart/form-data' : 'application/json',
      ...(token && { token }),
      ...headers,
    };

    const response = await fetch(fullUrl, {
      method,
      headers: defaultHeaders,
      ...(body && { body }),
    });

    if (!response.ok) {
      let errorData: any = null;
      let errorMessage = `HTTP Error ${response.status}`;

      try {
        errorData = await response.json();
        const serverMessage = errorData?.message || errorData?.error;
        const reason = errorData?.reason;
        const options = Array.isArray(errorData?.options)
          ? errorData.options.join(', ')
          : null;

        if (serverMessage) {
          errorMessage = serverMessage;
        }
        if (reason) {
          errorMessage += ` (${reason})`;
        }
        if (options) {
          errorMessage += ` • Options: ${options}`;
        }
      } catch (e) {
        console.warn('Error parsing error response:', e);
      }
      const error: any = new Error(errorMessage);
      error.response = errorData;
      error.status = response.status;
      throw error;
    }

    // Return response based on responseType
    return response[responseType]();
  };

  return resolve(makeCall);
};

export default networkCall;
