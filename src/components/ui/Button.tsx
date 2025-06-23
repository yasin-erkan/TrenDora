import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import React from 'react';
import colors from '../../theme/colors';
import { height } from '../../utils/constants';

interface Props extends TouchableOpacityProps {
  title: string;
}

const Button: React.FC<Props> = props => {
  const { title, disabled } = props;

  return (
    <TouchableOpacity
      {...props}
      style={[
        styles.container,
        { backgroundColor: disabled ? colors.GRAY : colors.PRIMARY },
      ]}
    >
      {disabled ? (
        <ActivityIndicator color={colors.WHITE} size="small" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    width: '80%',
    minHeight: height * 0.05,
    padding: 15,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 20,
  },
  title: {
    color: colors.WHITE,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Button;
