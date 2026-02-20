import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Easing,
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
} from 'react-native';

interface AnimatedSmileIconProps {
  size?: number;
  style?: ViewStyle;
  onPress?: () => void;
}

const AnimatedSmileIcon: React.FC<AnimatedSmileIconProps> = ({
  size = 32,
  style,
  onPress,
}) => {
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const bounceAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    // Continuous subtle wave animation
    const waveAnimation = Animated.loop(
      Animated.sequence([
        Animated.timing(rotateAnim, {
          toValue: 1,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: -1,
          duration: 1000,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.timing(rotateAnim, {
          toValue: 0,
          duration: 500,
          easing: Easing.ease,
          useNativeDriver: true,
        }),
        Animated.delay(2000), // Pause before next wave
      ]),
    );

    // Start wave animation
    waveAnimation.start();

    // Bounce animation every few seconds
    const bounceAnimation = Animated.loop(
      Animated.sequence([
        Animated.delay(3000),
        Animated.spring(bounceAnim, {
          toValue: -8,
          friction: 3,
          tension: 200,
          useNativeDriver: true,
        }),
        Animated.spring(bounceAnim, {
          toValue: 0,
          friction: 4,
          useNativeDriver: true,
        }),
      ]),
    );

    bounceAnimation.start();

    return () => {
      waveAnimation.stop();
      bounceAnimation.stop();
    };
  }, []);

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 0.85,
      friction: 4,
      tension: 300,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.sequence([
      Animated.spring(scaleAnim, {
        toValue: 1.2,
        friction: 3,
        tension: 200,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        friction: 3,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: ['-15deg', '0deg', '15deg'],
  });

  return (
    <TouchableOpacity
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      activeOpacity={1}
      style={[styles.container, style]}
    >
      <Animated.Text
        style={[
          styles.emoji,
          {
            fontSize: size,
            transform: [
              { rotate: rotateInterpolate },
              { scale: scaleAnim },
              { translateY: bounceAnim },
            ],
          },
        ]}
      >
        😊
      </Animated.Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  emoji: {
    textAlign: 'center',
  },
});

export default AnimatedSmileIcon;
