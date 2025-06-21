import { StyleSheet } from 'react-native';
import colors from '../theme/colors';

const defaultScreenStyle = StyleSheet.create({
  safeAreaViewStyle: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  container: {
    flex: 1,
    padding: 10,
  },
});

export default defaultScreenStyle;
