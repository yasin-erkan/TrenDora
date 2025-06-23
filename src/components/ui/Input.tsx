import { View, StyleSheet, TextInput, Text } from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import { height } from '../../utils/constants';
import { SearchNormal } from 'iconsax-react-native';

interface InputProps {
  label?: string;
  showIcon?: boolean;
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
  onBlur?: () => void;
  secureTextEntry?: boolean;
  error?: string;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({ showIcon, label, error, ...props }) => {
  return (
    <View>
      {label && <Text style={styles.label}>{label}</Text>}
      <View style={styles.container}>
        <TextInput
          {...props}
          style={styles.input}
          placeholderTextColor={colors.DARK_GRAY}
        />

        {showIcon && <SearchNormal size={20} color={colors.BLACK} />}
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.GRAY,
    height: height * 0.055,
    paddingHorizontal: 5,
    borderRadius: 15,
    paddingRight: 15,
  },
  label: {
    fontSize: 18,
    color: colors.BLACK,
    marginBottom: 5,
  },

  input: {
    padding: 15,
    flex: 1,
    fontSize: 16,
    color: colors.BLACK,
  },

  errorText: {
    color: colors.RED,
    marginTop: 5,
  },
});
