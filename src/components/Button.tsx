import {
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React from 'react';
import { getTheme } from '../global/theme';
import type { Theme } from '../global/theme';
interface ButtonProps {
  title: string;
  onPress: () => void;
}
const Button = ({ title, onPress }: ButtonProps) => {
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  const styles = createStyles(theme);

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    button: {
      padding: theme.spacing.md,
      backgroundColor: theme.colors.primary,
      borderRadius: theme.radii.md,
    },
    label: {
      color: theme.colors.background,
      textAlign: 'center',
      fontFamily: theme.typography.fontMedium,
      fontSize: theme.typography.sizeMd,
      lineHeight: theme.typography.lineHeightDefault,
    },
  });

export default Button;
