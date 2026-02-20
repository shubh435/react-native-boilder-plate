import {
  StyleSheet,
  View,
  StatusBar,
  Animated,
  Easing,
  useColorScheme,
} from 'react-native';
import React, { useEffect, useRef } from 'react';
import { getTheme } from '../global/theme';
import type { Theme } from '../global/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { MAINSTACK } from '../constant/navigator';
import BellIcon from '../assets/images/svg/BellIcon';

const SplashScreens = () => {
  const navigation = useNavigation<any>();
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  const styles = createStyles(theme);

  // Animation values
  const backgroundOpacity = useRef(new Animated.Value(0)).current;
  const iconScale = useRef(new Animated.Value(0.7)).current;
  const iconOpacity = useRef(new Animated.Value(0)).current;
  const titleOpacity = useRef(new Animated.Value(0)).current;
  const titleTranslateY = useRef(new Animated.Value(20)).current;
  const taglineOpacity = useRef(new Animated.Value(0)).current;
  const dotsOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Start entrance animations
    Animated.sequence([
      // Background fade in
      Animated.timing(backgroundOpacity, {
        toValue: 1,
        duration: 400,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
      // Icon scale and fade in
      Animated.parallel([
        Animated.timing(iconScale, {
          toValue: 1,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(iconOpacity, {
          toValue: 1,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),
      // Title fade and slide up
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
        Animated.timing(titleTranslateY, {
          toValue: 0,
          duration: 400,
          easing: Easing.out(Easing.cubic),
          useNativeDriver: true,
        }),
      ]),
      // Tagline fade in
      Animated.timing(taglineOpacity, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
      // Dots fade in
      Animated.timing(dotsOpacity, {
        toValue: 1,
        duration: 400,
        easing: Easing.out(Easing.cubic),
        useNativeDriver: true,
      }),
    ]).start();

    // Auto-navigate after 2 seconds
    const timer = setTimeout(() => {
      handleNavigate();
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: MAINSTACK.LOGIN }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={theme.colors.primary}
      />

      <Animated.View
        style={[
          styles.backgroundOverlay,
          {
            opacity: backgroundOpacity,
          },
        ]}
      />

      <View style={styles.content}>
        {/* Icon Container */}
        <Animated.View
          style={[
            styles.iconContainer,
            {
              opacity: iconOpacity,
              transform: [{ scale: iconScale }],
            },
          ]}
        >
          <BellIcon size={72} color="#FFFFFF" />
        </Animated.View>

        {/* Title */}
        <Animated.Text
          style={[
            styles.title,
            {
              opacity: titleOpacity,
              transform: [{ translateY: titleTranslateY }],
            },
          ]}
        >
          Hey Reminder
        </Animated.Text>

        {/* Tagline */}
        <Animated.Text
          style={[
            styles.tagline,
            {
              opacity: taglineOpacity,
            },
          ]}
        >
          Never forget anything
        </Animated.Text>

        {/* Pagination Dots */}
        <Animated.View
          style={[
            styles.dotsContainer,
            {
              opacity: dotsOpacity,
            },
          ]}
        >
          <View style={[styles.dot, styles.inactiveDot]} />
          <View style={[styles.dot, styles.activeDot]} />
          <View style={[styles.dot, styles.inactiveDot]} />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.primary,
    },
    backgroundOverlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: theme.colors.primary,
    },
    content: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: theme.spacing.xl,
    },
    iconContainer: {
      width: 140,
      height: 140,
      borderRadius: theme.radii.xxl + 10,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: theme.spacing.xxl + theme.spacing.lg,
    },
    title: {
      fontSize: 36,
      fontFamily: theme.typography.fontBold,
      color: '#FFFFFF',
      marginBottom: theme.spacing.md,
      letterSpacing: 0.5,
    },
    tagline: {
      fontSize: 16,
      fontFamily: theme.typography.fontRegular,
      color: 'rgba(255, 255, 255, 0.8)',
      marginBottom: theme.spacing.xxxl * 2,
    },
    dotsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.sm,
      position: 'absolute',
      bottom: theme.spacing.xxxl + theme.spacing.xl,
    },
    dot: {
      height: 8,
      width: 8,
      borderRadius: 4,
    },
    activeDot: {
      backgroundColor: '#FFFFFF',
    },
    inactiveDot: {
      backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
  });

export default SplashScreens;
