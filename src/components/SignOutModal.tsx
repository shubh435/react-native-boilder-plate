import React from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  useColorScheme,
} from 'react-native';
import { getTheme } from '../global/theme';
import type { Theme } from '../global/theme';

export interface SignOutModalProps {
  visible: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

const SignOutModal: React.FC<SignOutModalProps> = ({
  visible,
  onConfirm,
  onCancel,
}) => {
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  const styles = createStyles(theme);

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onCancel}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Warning Icon */}
          <View style={styles.iconContainer}>
            <View style={styles.iconCircle}>
              <Text style={styles.iconText}>!</Text>
            </View>
          </View>

          {/* Content */}
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Sign Out?</Text>
            <Text style={styles.message}>
              Are you sure you want to sign out? You'll need to log in again to
              access your reminders.
            </Text>

            {/* Action Buttons */}
            <TouchableOpacity
              style={[styles.button, styles.confirmButton]}
              onPress={onConfirm}
            >
              <Text style={styles.confirmButtonText}>Yes, Sign Out</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.cancelButton]}
              onPress={onCancel}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    overlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing.xl,
    },
    modalContainer: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.radii.xxl,
      width: '100%',
      maxWidth: 340,
      paddingVertical: theme.spacing.xxxl,
      paddingHorizontal: theme.spacing.xl,
      elevation: 8,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
    },
    iconContainer: {
      alignItems: 'center',
      marginBottom: theme.spacing.xl,
    },
    iconCircle: {
      width: 80,
      height: 80,
      borderRadius: 40,
      backgroundColor: '#FEE2E2',
      justifyContent: 'center',
      alignItems: 'center',
    },
    iconText: {
      fontSize: 48,
      fontFamily: theme.typography.fontBold,
      color: '#EF4444',
    },
    contentContainer: {
      alignItems: 'center',
    },
    title: {
      fontSize: theme.typography.sizeXl,
      fontFamily: theme.typography.fontBold,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.md,
      textAlign: 'center',
    },
    message: {
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontRegular,
      color: theme.colors.textSecondary,
      lineHeight: theme.typography.lineHeightRelaxed,
      marginBottom: theme.spacing.xl,
      textAlign: 'center',
    },
    button: {
      width: '100%',
      paddingVertical: theme.spacing.lg,
      borderRadius: theme.radii.xl,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: theme.spacing.md,
    },
    confirmButton: {
      backgroundColor: '#EF4444',
      shadowColor: '#EF4444',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 4,
    },
    cancelButton: {
      backgroundColor: theme.colors.background,
      borderWidth: 2,
      borderColor: theme.colors.border,
    },
    confirmButtonText: {
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontSemiBold,
      color: '#FFFFFF',
    },
    cancelButtonText: {
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontSemiBold,
      color: theme.colors.textPrimary,
    },
  });

export default SignOutModal;
