import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
  useColorScheme,
} from 'react-native';
import React, { useState } from 'react';
import { getTheme } from '../global/theme';
import type { Theme } from '../global/theme';

interface DropdownProps {
  placeholder: string;
  value: string;
  onSelect: (value: string) => void;
  options: string[];
}

const Dropdown = ({ placeholder, value, onSelect, options }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const colorScheme = useColorScheme();
  const theme = getTheme(colorScheme);
  const styles = createStyles(theme);

  const handleSelect = (option: string) => {
    onSelect(option);
    setIsOpen(false);
  };

  return (
    <View>
      <TouchableOpacity style={styles.dropdown} onPress={() => setIsOpen(true)}>
        <Text
          style={[styles.dropdownText, !value && styles.dropdownPlaceholder]}
        >
          {value || placeholder}
        </Text>
        <Text style={styles.chevron}>{isOpen ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      <Modal
        visible={isOpen}
        transparent
        animationType="fade"
        onRequestClose={() => setIsOpen(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setIsOpen(false)}
        >
          <View style={styles.modalContent}>
            <FlatList
              data={options}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <TouchableOpacity
                  style={styles.option}
                  onPress={() => handleSelect(item)}
                >
                  <Text style={styles.optionText}>{item}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const createStyles = (theme: Theme) =>
  StyleSheet.create({
    dropdown: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: theme.colors.surface,
      borderRadius: theme.radii.lg,
      borderWidth: 1,
      borderColor: theme.colors.border,
      paddingHorizontal: theme.spacing.lg,
      paddingVertical: theme.spacing.lg,
    },
    dropdownText: {
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontRegular,
      color: theme.colors.textPrimary,
    },
    dropdownPlaceholder: {
      color: theme.colors.muted,
    },
    chevron: {
      fontSize: theme.typography.sizeSm,
      color: theme.colors.textPrimary,
    },
    modalOverlay: {
      flex: 1,
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalContent: {
      backgroundColor: theme.colors.background,
      borderRadius: theme.radii.lg,
      width: '80%',
      maxHeight: '50%',
      overflow: 'hidden',
    },
    option: {
      paddingVertical: theme.spacing.lg,
      paddingHorizontal: theme.spacing.xl,
      borderBottomWidth: 1,
      borderBottomColor: theme.colors.border,
    },
    optionText: {
      fontSize: theme.typography.sizeMd,
      fontFamily: theme.typography.fontRegular,
      color: theme.colors.textPrimary,
    },
  });

export default Dropdown;
