import type { ColorSchemeName } from 'react-native';

// Centralized design tokens for consistent styling across the app.
const lightColors = {
  // Primary - Purple theme (from design)
  primary: '#7C6BF0',
  primaryDark: '#6B5AD9',
  primaryLight: '#A99EF5',
  primarySoft: '#E8E5FC', // For light backgrounds like icon containers

  // Neutrals - Clean, professional grays
  background: '#FFFFFF',
  backgroundSecondary: '#F8F7FC', // Slightly purple-tinted background
  surface: '#F8F9FA',
  surfaceSecondary: '#F3F2F8', // Password requirements box
  border: '#E5E7EB',
  borderLight: '#EBE9F5',

  // Text - High contrast
  textPrimary: '#1F2937',
  textSecondary: '#6B7280',
  muted: '#9CA3AF',

  // Semantic colors
  success: '#10B981',
  successLight: '#D1FAE5',
  warning: '#F59E0B',
  error: '#EF4444',
  info: '#3B82F6',

  // Legacy support
  accent: '#7C6BF0',
  lightBlue: '#F0F9FF',

  // Overlays
  overlay: 'rgba(0, 0, 0, 0.5)',
  modalShadow: '#000000',
  cardShadow: '#6B7280',

  // Social
  google: '#FFFFFF',
  facebook: '#1877F2',
};

const darkColors = {
  // Primary - Purple theme (bright purple for dark mode visibility)
  primary: '#8B7FE8', // Main purple accent
  primaryDark: '#7C6BF0', // Darker purple for pressed states
  primaryLight: '#A99EF5', // Lighter purple for soft accents
  primarySoft: '#3D3A5C', // Purple-tinted container backgrounds

  // Neutrals - Deep navy backgrounds (matching design)
  background: '#12121F', // Main app background - deep navy
  backgroundSecondary: '#1C1B2E', // Secondary background - slightly lighter navy
  surface: '#1E1E32', // Card backgrounds - dark navy
  surfaceSecondary: '#252542', // Secondary surfaces - lighter navy cards
  border: '#2E2E4A', // Subtle border color
  borderLight: '#3D3A5C', // Lighter borders for emphasis

  // Text - High contrast for dark mode
  textPrimary: '#FFFFFF', // Pure white for primary text
  textSecondary: '#B8B8C8', // Muted gray-purple for secondary text
  muted: '#6B6B80', // Muted text for labels

  // Semantic colors - Vibrant for dark backgrounds
  success: '#4ADE80', // Bright green
  successLight: '#1A3D2E', // Dark green background
  warning: '#FFC107', // Bright yellow/amber
  error: '#F87171', // Bright red
  info: '#60A5FA', // Bright blue

  // Legacy support
  accent: '#8B7FE8', // Same as primary
  lightBlue: '#1E2A4A', // Dark blue tint

  // Overlays
  overlay: 'rgba(0, 0, 0, 0.75)',
  modalShadow: '#000000',
  cardShadow: '#0A0A12',

  // Social
  google: '#252542', // Dark surface for Google button
  facebook: '#1877F2', // Facebook blue
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  xxl: 32,
  xxxl: 48,
};

export const radii = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  xxl: 20,
  pill: 999,
};

export const typography = {
  // Inter 18pt variants
  fontThin: 'Inter_18pt-Thin',
  fontExtraLight: 'Inter_18pt-ExtraLight',
  fontLight: 'Inter_18pt-Light',
  fontRegular: 'Inter_18pt-Regular',
  fontMedium: 'Inter_18pt-Medium',
  fontSemiBold: 'Inter_18pt-SemiBold',
  fontBold: 'Inter_18pt-Bold',
  fontExtraBold: 'Inter_18pt-ExtraBold',
  fontBlack: 'Inter_18pt-Black',

  // Inter 24pt variants (for larger text)
  font24Thin: 'Inter_24pt-Thin',
  font24ExtraLight: 'Inter_24pt-ExtraLight',
  font24Light: 'Inter_24pt-Light',
  font24Regular: 'Inter_24pt-Regular',
  font24Medium: 'Inter_24pt-Medium',
  font24SemiBold: 'Inter_24pt-SemiBold',
  font24Bold: 'Inter_24pt-Bold',
  font24ExtraBold: 'Inter_24pt-ExtraBold',
  font24Black: 'Inter_24pt-Black',

  // Inter 28pt variants (for display text)
  font28Thin: 'Inter_28pt-Thin',
  font28ExtraLight: 'Inter_28pt-ExtraLight',
  font28Light: 'Inter_28pt-Light',
  font28Regular: 'Inter_28pt-Regular',
  font28Medium: 'Inter_28pt-Medium',
  font28SemiBold: 'Inter_28pt-SemiBold',
  font28Bold: 'Inter_28pt-Bold',
  font28ExtraBold: 'Inter_28pt-ExtraBold',
  font28Black: 'Inter_28pt-Black',
  font28Italic: 'Inter_28pt-Italic',

  // Font sizes
  sizeXs: 12,
  sizeSm: 14,
  sizeMd: 16,
  sizeLg: 20,
  sizeXl: 24,
  sizeXxl: 28,
  sizeXxxl: 32,
  sizeDisplay: 48,
  sizeDisplaylg: 44,

  // Line heights
  lineHeightTight: 18,
  lineHeightDefault: 22,
  lineHeightRelaxed: 28,
  lineHeightXRelaxed: 36,
};

export const shadows = {
  card: {
    shadowColor: lightColors.cardShadow,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  button: {
    shadowColor: lightColors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 4,
  },
};

export type Theme = {
  colors: typeof lightColors;
  spacing: typeof spacing;
  radii: typeof radii;
  typography: typeof typography;
  shadows: typeof shadows;
};

// Default light tokens for compatibility.
export const colors = lightColors;

export const lightTheme: Theme = {
  colors: lightColors,
  spacing,
  radii,
  typography,
  shadows,
};

export const darkTheme: Theme = {
  colors: darkColors,
  spacing,
  radii,
  typography,
  shadows: {
    ...shadows,
    card: {
      ...shadows.card,
      shadowColor: darkColors.cardShadow,
    },
    button: {
      ...shadows.button,
      shadowColor: darkColors.primary,
    },
  },
};

export type ThemeMode = 'light' | 'dark';

export const getTheme = (mode: ColorSchemeName = 'light'): Theme =>
  mode === 'dark' ? darkTheme : lightTheme;

// Backward-compatible export for existing imports.
export const theme = lightTheme;
