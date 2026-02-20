const isProduction = true;
const dev_baseURL = 'http://${ip}:4000/api';
const prod_baseURL = 'https://jsonplaceholder.typicode.com';
export const baseURL = isProduction ? prod_baseURL : dev_baseURL;

// add the endpoints here like this
export const endpoints = {
  // Auth endpoints
  LOGIN: 'signin',
  GOOGLE_LOGIN: 'google-login',
  REGISTER: 'signup',
  VERIFYOTP: 'verifyotp',
  RESEND_OTP: 'resend-otp',
  FORGOT_PASSWORD: 'forgot-pass' + 'word',
  RESET_PASSWORD: 'reset-pass' + 'word',
  
};

export const salt = 'Your_salt_here';  // add the salt here from env

export const AUTH_USERNAME = 'auth';
export const AUTH_BOOTSTRAP_FLAG_KEY = 'your_app_bootstrap_flag_key_here'; // add the bootstrap flag key here from env
