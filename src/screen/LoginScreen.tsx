import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  useColorScheme,
} from 'react-native';
import React, { useState } from 'react';
import { getTheme } from '../global/theme';
import type { Theme } from '../global/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import TextInput from '../components/TextInput';
import { MAINSTACK } from '../constant/navigator';
import BellIcon from '../assets/images/svg/BellIcon';
import MailIcon from '../assets/images/svg/MailIcon';
import LockIcon from '../assets/images/svg/LockIcon';

const LoginScreen = () => {
  const navigation = useNavigation<any>();
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  const styles = createStyles(theme);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please enter both email and password to continue.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    setError('');
    navigation.reset({
      index: 0,
      routes: [{ name: MAINSTACK.HOME }],
    });
  };

  const handleSkip = () => {
    setError('');
    navigation.reset({
      index: 0,
      routes: [{ name: MAINSTACK.HOME }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.iconContainer}>
            <BellIcon size={48} color="#FFFFFF" />
          </View>

          <Text style={styles.title}>Welcome Back</Text>
          <Text style={styles.subtitle}>
            This starter now keeps just Login and Home so you can plug in your
            own APIs.
          </Text>

          {error ? <Text style={styles.errorText}>{error}</Text> : null}

          <View style={styles.inputContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput
                placeholder="Enter your email"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                leftIcon={<MailIcon size={20} color={theme.colors.muted} />}
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.label}>Password</Text>
              <TextInput
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                leftIcon={<LockIcon size={20} color={theme.colors.muted} />}
              />
            </View>
          </View>

          <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
            <Text style={styles.loginButtonText}>Log In</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>Continue without login</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.backgroundSecondary,
    },
    scrollContent: {
      flexGrow: 1,
    },
    content: {
      flex: 1,
      paddingHorizontal: theme.spacing.xl,
      paddingTop: theme.spacing.xxl,
      paddingBottom: theme.spacing.xl,
    },
    iconContainer: {
      width: 80,
      height: 80,
      borderRadius: theme.radii.xl,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing.xl,
    },
    title: {
      fontSize: 32,
      fontFamily: theme.typography.fontBold,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.sm,
    },
    subtitle: {
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontRegular,
      color: theme.colors.textSecondary,
      marginBottom: theme.spacing.lg,
    },
    errorText: {
      color: theme.colors.error,
      fontFamily: theme.typography.fontMedium,
      marginBottom: theme.spacing.lg,
    },
    inputContainer: {
      gap: theme.spacing.lg,
      marginBottom: theme.spacing.xxl,
    },
    fieldContainer: {
      gap: theme.spacing.sm,
    },
    label: {
      fontSize: theme.typography.sizeSm,
      fontFamily: theme.typography.fontMedium,
      color: theme.colors.textPrimary,
    },
    loginButton: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.radii.lg,
      paddingVertical: theme.spacing.lg,
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    loginButtonText: {
      color: '#FFFFFF',
      fontSize: theme.typography.sizeLg,
      fontFamily: theme.typography.fontSemiBold,
    },
    skipButton: {
      paddingVertical: theme.spacing.lg,
      alignItems: 'center',
      borderRadius: theme.radii.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
    },
    skipButtonText: {
      color: theme.colors.textPrimary,
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontMedium,
    },
  });

export default LoginScreen;
