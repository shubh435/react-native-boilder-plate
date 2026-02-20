export interface DoctorData {
  id: number;
  name: string;
  isAvailable: boolean;
  imageUrl: string;
}

export interface CommonDeseaseData {
  id: number;
  backgroudImage: string;
  image: string;
  title: string;
}
export interface YourAppointmentsData {
  id: number;
  rating: number;
  degree: string;
  name: string;
  experience: number;
  views: number;
  image: string;
  available: string;
  isFaveritiated: boolean;
  isAvailable?: boolean;
}

export interface MedicalStoreData {
  id: number;
  rating: number;
  name: string;
  image: string;
  subTitle: string;
}
export interface QualifiedDoctorData {
  id: number;
  rating: number;
  degree: string;
  name: string;
  experience: number;
  views: number;
  available: string;
  image: any;
  isFaveritiated: boolean;
  fees: number;
}

export interface Navigation {
  navigate?: (url: string, data?: any) => void;
  replace?: (url: string, data?: any) => void;
  goBack?: () => void;
  toggleDrawer?: () => void;
  openDrawer?: () => void;
  closeDrawer?: () => void;
}

export interface SlotsDateTimes {
  id: number;
  date: string;
  slotsAvailable: number;
  isSelected: boolean;
}

export interface SlotsAvailable {
  date: string;
  slots: string[];
}
export interface Slots {
  slots: string;
  isSelected: boolean;
}
export interface SlotsAvailableChangeData {
  slots: (Slots | string)[];
  date: string;
}

// Reminder types
export interface Reminder {
  _id: string;
  userId: string;
  title: string;
  description?: string;
  category: 'Work' | 'Health' | 'Personal' | 'Habit' | 'Other';
  priority: 'low' | 'medium' | 'high';
  startDate: string;
  reminderTimes: string[];
  frequency: 'Daily' | 'Weekly' | 'Monthly' | 'SpecificDays' | 'Once';
  specificDays?: string[];
  endDate?: string;
  alarmEnabled: boolean;
  status: 'pending' | 'completed' | 'missed';
  snoozeUntil?: string;
  nextAt?: string;
  revision?: number;
  createdAt: string;
  updatedAt: string;
}

export interface ReminderLog {
  _id?: string;
  userId: string;
  reminderId: string;
  scheduledTime: string;
  scheduledDate: string;
  status: 'pending' | 'completed' | 'missed';
  completedAt?: string;
}

export interface CreateReminderRequest {
  title: string;
  description?: string;
  category?: 'Work' | 'Health' | 'Personal' | 'Habit' | 'Other';
  priority?: 'low' | 'medium' | 'high';
  startDate: string;
  reminderTimes: string[];
  frequency: 'Daily' | 'Weekly' | 'Monthly' | 'SpecificDays' | 'Once';
  specificDays?: string[];
  endDate?: string;
  alarmEnabled: boolean;
}

export interface UpdateReminderRequest {
  title?: string;
  description?: string;
  category?: 'Work' | 'Health' | 'Personal' | 'Habit' | 'Other';
  priority?: 'low' | 'medium' | 'high';
  startDate?: string;
  reminderTimes?: string[];
  frequency?: 'Daily' | 'Weekly' | 'Monthly' | 'SpecificDays' | 'Once';
  specificDays?: string[];
  endDate?: string | null;
  alarmEnabled?: boolean;
  status?: 'pending' | 'completed' | 'missed';
}

export interface UpdateReminderStatusRequest {
  status: 'pending' | 'completed' | 'missed';
  date?: string;
  scheduledTime?: string;
}

export interface ReminderResponse {
  message: string;
  reminder: Reminder;
  error: boolean;
}

export interface RemindersListResponse {
  message: string;
  reminders: Reminder[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  error: boolean;
}

// Profile types
export interface ProfileImage {
  fileId: string;
  imageUrl: string;
}

export interface UserProfile {
  _id: string;
  email: string;
  fullName: string;
  userName: string;
  role: 'user' | 'admin' | 'doctor';
  phoneNumber?: string;
  profileImage?: ProfileImage | null;
  gender?: string;
  dateOfBirth?: string;
  isVerify?: boolean;
  acceptedTerms?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface ProfileResponse {
  message: string;
  user: UserProfile;
  error?: boolean;
}

export interface UpdateProfileRequest {
  fullName?: string;
  email?: string;
  phoneNumber?: string;
  gender?: string;
  dateOfBirth?: string;
}

export interface ProfileStats {
  totalReminders: number;
  completedReminders: number;
  completionRate: number;
  currentStreak: number;
}

export interface Achievement {
  id: string;
  icon: string;
  title: string;
  description: string;
  earned: boolean;
}

export interface ProfileStatsResponse {
  message: string;
  user: UserProfile;
  stats: ProfileStats;
  achievements: Achievement[];
  error: boolean;
}

// Notification types
export interface AppNotification {
  _id: string;
  userId: string;
  title: string;
  message: string;
  type: 'reminder' | 'achievement' | 'system';
  read: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface NotificationsListResponse {
  message: string;
  notifications: AppNotification[];
  pagination: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
  error: boolean;
}

export interface UnreadCountResponse {
  message: string;
  unreadCount: number;
  error: boolean;
}
