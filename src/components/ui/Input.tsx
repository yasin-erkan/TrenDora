import { View, StyleSheet, TextInput } from 'react-native';
import React from 'react';
import { RouteType } from '../../screens/routes/RouteType';
import colors from '../../theme/colors';
import { height } from '../../utils/constants';
import { SearchNormal1 } from 'iconsax-react-native';

type Props = RouteType<'Input'>;

const Input: React.FC<Props> = props => {
  return (
    <View style={styles.container}>
      <TextInput
        {...props}
        style={styles.input}
        placeholderTextColor={colors.DARK_GRAY}
      />

      <SearchNormal1 size={20} color={colors.BLACK} />
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
  input: {
    padding: 15,
    flex: 1,
    fontSize: 16,
    color: colors.BLACK,
  },
});
