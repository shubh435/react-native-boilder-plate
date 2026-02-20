import {
  StyleSheet,
  TextInput as RNTextInput,
  View,
  TouchableOpacity,
  TextInputProps as RNTextInputProps,
} from 'react-native';
import React, { useState } from 'react';
import {  theme } from '../global/theme';
import type { Theme } from '../global/theme';

import EyeOpenIcon from '../assets/images/eyeOpenIcon.svg';

interface TextInputProps extends RNTextInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  secureTextEntry?: boolean;
  leftIcon?: React.ReactNode;
}

const TextInput = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry = false,
  leftIcon,
  ...rest
}: TextInputProps) => {


  const styles = createStyles(theme);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={styles.container}>
      {leftIcon && <View style={styles.leftIconContainer}>{leftIcon}</View>}
      <RNTextInput
        style={[styles.input, leftIcon && styles.inputWithLeftIcon]}
        placeholder={placeholder}
        placeholderTextColor={theme.colors.muted}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry && !isPasswordVisible}
        autoCapitalize="none"
        {...rest}
      />
      {secureTextEntry && (
        <TouchableOpacity
          style={styles.iconButton}
          onPress={togglePasswordVisibility}
        >
          <EyeOpenIcon width={20} height={20} fill={theme.colors.muted} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      position: 'relative',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
    },
    leftIconContainer: {
      position: 'absolute',
      left: theme.spacing.lg,
      top: '50%',
      transform: [{ translateY: -12 }],
      zIndex: 1,
    },
    input: {
      flex: 1,
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radii.lg,
      padding: theme.spacing.lg,
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontRegular,
      color: theme.colors.textPrimary,
    },
    inputWithLeftIcon: {
      paddingLeft: theme.spacing.xl + theme.spacing.lg,
    },
    iconButton: {
      position: 'absolute',
      right: theme.spacing.lg,
      top: '50%',
      transform: [{ translateY: -10 }],
    },
  });

export default TextInput;
