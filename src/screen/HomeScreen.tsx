import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  useColorScheme,
} from 'react-native';
import React, { useMemo, useState } from 'react';
import { getTheme } from '../global/theme';
import type { Theme } from '../global/theme';
import { SafeAreaView } from 'react-native-safe-area-context';
import BellIcon from '../assets/images/svg/BellIcon';
import CheckIcon from '../assets/images/svg/CheckIcon';
import CalendarIcon from '../assets/images/svg/CalendarIcon';

type SimpleReminder = {
  id: string;
  title: string;
  time: string;
  frequency: string;
  done: boolean;
};

const initialReminders: SimpleReminder[] = [
  {
    id: '1',
    title: 'Take vitamins',
    time: '08:00 AM',
    frequency: 'Daily',
    done: false,
  },
  {
    id: '2',
    title: 'Drink water',
    time: '10:30 AM',
    frequency: 'Hourly',
    done: true,
  },
  {
    id: '3',
    title: 'Call Mom',
    time: '07:00 PM',
    frequency: 'Today',
    done: false,
  },
];

const HomeScreen = () => {
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  const styles = useMemo(() => createStyles(theme), [theme]);
  const [reminders, setReminders] = useState(initialReminders);

  const completedCount = reminders.filter(item => item.done).length;

  const toggleReminder = (id: string) => {
    setReminders(prev =>
      prev.map(item =>
        item.id === id ? { ...item, done: !item.done } : item,
      ),
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Hey there 👋</Text>
            <Text style={styles.subtitle}>Here are today&apos;s reminders.</Text>
          </View>
          <View style={styles.notificationButton}>
            <BellIcon size={24} color={theme.colors.textPrimary} />
          </View>
        </View>

        <View style={styles.progressCard}>
          <View style={styles.progressContent}>
            <View>
              <Text style={styles.progressTitle}>Progress</Text>
              <Text style={styles.progressCount}>
                {completedCount} / {reminders.length} done
              </Text>
            </View>
            <View style={styles.progressIcon}>
              <CheckIcon size={28} color="#FFFFFF" />
            </View>
          </View>
          <View style={styles.progressBarContainer}>
            <View
              style={[
                styles.progressBar,
                {
                  width: `${reminders.length ? (completedCount / reminders.length) * 100 : 0}%`,
                },
              ]}
            />
          </View>
        </View>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Today</Text>
          <View style={styles.sectionDate}>
            <CalendarIcon size={18} color={theme.colors.primary} />
            <Text style={styles.sectionDateText}>Stay on track</Text>
          </View>
        </View>

        <View style={styles.remindersContainer}>
          {reminders.map(item => (
            <TouchableOpacity
              key={item.id}
              style={[
                styles.reminderCard,
                item.done && styles.reminderCardDone,
              ]}
              onPress={() => toggleReminder(item.id)}
              activeOpacity={0.8}
            >
              <View style={styles.reminderLeft}>
                <View style={styles.reminderIcon}>
                  {item.done ? (
                    <CheckIcon size={20} color="#FFFFFF" />
                  ) : (
                    <BellIcon size={20} color="#FFFFFF" />
                  )}
                </View>
                <View>
                  <Text
                    style={[
                      styles.reminderTitle,
                      item.done && styles.reminderTitleDone,
                    ]}
                  >
                    {item.title}
                  </Text>
                  <Text style={styles.reminderMeta}>
                    {item.time} • {item.frequency}
                  </Text>
                </View>
              </View>
              <Text style={styles.reminderAction}>
                {item.done ? 'Undo' : 'Mark done'}
              </Text>
            </TouchableOpacity>
          ))}
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
      paddingHorizontal: theme.spacing.xl,
      paddingBottom: theme.spacing.xl,
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: theme.spacing.lg,
      marginBottom: theme.spacing.xl,
    },
    greeting: {
      fontSize: 28,
      fontFamily: theme.typography.fontBold,
      color: theme.colors.textPrimary,
      marginBottom: theme.spacing.xs,
    },
    subtitle: {
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontRegular,
      color: theme.colors.textSecondary,
    },
    notificationButton: {
      width: 48,
      height: 48,
      borderRadius: 24,
      backgroundColor: theme.colors.background,
      justifyContent: 'center',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },
    progressCard: {
      backgroundColor: theme.colors.primary,
      borderRadius: theme.radii.xl,
      padding: theme.spacing.xl,
      marginBottom: theme.spacing.xl,
    },
    progressContent: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    progressTitle: {
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontMedium,
      color: 'rgba(255, 255, 255, 0.9)',
    },
    progressCount: {
      fontSize: 20,
      fontFamily: theme.typography.fontBold,
      color: '#FFFFFF',
      marginTop: theme.spacing.xs,
    },
    progressIcon: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    progressBarContainer: {
      height: 10,
      borderRadius: theme.radii.pill,
      backgroundColor: 'rgba(255, 255, 255, 0.25)',
      overflow: 'hidden',
    },
    progressBar: {
      height: '100%',
      backgroundColor: '#FFFFFF',
      borderRadius: theme.radii.pill,
    },
    sectionHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: theme.spacing.md,
    },
    sectionTitle: {
      fontSize: 20,
      fontFamily: theme.typography.fontBold,
      color: theme.colors.textPrimary,
    },
    sectionDate: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.xs,
    },
    sectionDateText: {
      fontSize: theme.typography.sizeSm,
      fontFamily: theme.typography.fontMedium,
      color: theme.colors.primary,
    },
    remindersContainer: {
      gap: theme.spacing.md,
    },
    reminderCard: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.radii.xl,
      padding: theme.spacing.lg,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.05,
      shadowRadius: 8,
      elevation: 2,
    },
    reminderCardDone: {
      opacity: 0.8,
    },
    reminderLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: theme.spacing.md,
      flex: 1,
    },
    reminderIcon: {
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: theme.colors.primary,
      justifyContent: 'center',
      alignItems: 'center',
    },
    reminderTitle: {
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontSemiBold,
      color: theme.colors.textPrimary,
    },
    reminderTitleDone: {
      color: theme.colors.textSecondary,
      textDecorationLine: 'line-through',
    },
    reminderMeta: {
      fontSize: theme.typography.sizeSm,
      fontFamily: theme.typography.fontRegular,
      color: theme.colors.textSecondary,
      marginTop: theme.spacing.xs / 2,
    },
    reminderAction: {
      fontSize: theme.typography.sizeSm,
      fontFamily: theme.typography.fontSemiBold,
      color: theme.colors.primary,
    },
  });

export default HomeScreen;
