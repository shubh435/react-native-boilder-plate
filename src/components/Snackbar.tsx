import React, { useEffect, useMemo } from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { getTheme, type Theme } from '../global/theme';

export type SnackbarType = 'info' | 'success' | 'error' | 'warning';

export interface SnackbarProps {
  visible: boolean;
  message: string;
  type?: SnackbarType;
  duration?: number;
  actionLabel?: string;
  onAction?: () => void;
  onHide?: () => void;
}

const Snackbar: React.FC<SnackbarProps> = ({
  visible,
  message,
  type = 'info',
  duration = 4000,
  actionLabel,
  onAction,
  onHide,
}) => {
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  const styles = useMemo(() => createStyles(theme), [theme]);
  const translateY = React.useRef(new Animated.Value(80)).current;

  useEffect(() => {
    if (visible) {
      Animated.timing(translateY, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(translateY, {
          toValue: 80,
          duration: 200,
          useNativeDriver: true,
        }).start(() => onHide?.());
      }, duration);

      return () => clearTimeout(timer);
    } else {
      Animated.timing(translateY, {
        toValue: 80,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  }, [visible, duration, translateY, onHide]);

  if (!visible && translateY.__getValue() >= 80) return null;

  const backgroundColor = (() => {
    switch (type) {
      case 'success':
        return theme.colors.success;
      case 'error':
        return theme.colors.error;
      case 'warning':
        return theme.colors.warning;
      default:
        return theme.colors.info;
    }
  })();

  return (
    <Animated.View
      style={[
        styles.container,
        { transform: [{ translateY }], backgroundColor },
      ]}
    >
      <Text style={styles.message} numberOfLines={3}>
        {message}
      </Text>
      {actionLabel && onAction && (
        <TouchableOpacity onPress={onAction}>
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      )}
      <TouchableOpacity onPress={onHide} style={styles.close}>
        <Text style={styles.action}>✕</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: 'absolute',
      left: theme.spacing.xl,
      right: theme.spacing.xl,
      bottom: theme.spacing.xl,
      paddingVertical: theme.spacing.md,
      paddingHorizontal: theme.spacing.lg,
      borderRadius: theme.radii.lg,
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.md,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.25,
      shadowRadius: 10,
      elevation: 8,
    },
    message: {
      flex: 1,
      color: '#FFFFFF',
      fontSize: theme.typography.sizeSm,
      fontFamily: theme.typography.fontMedium,
    },
    action: {
      color: '#FFFFFF',
      fontSize: theme.typography.sizeSm,
      fontFamily: theme.typography.fontSemiBold,
    },
    close: {
      padding: theme.spacing.xs,
    },
  });

export default Snackbar;
