import { StyleSheet, View } from 'react-native';
import React from 'react';
import defaultScreenStyle from '../styles/defaultScreenStyle';
import { height } from '../utils/constants';
import Input from '../components/ui/Input';
import colors from '../theme/colors';

const Search: React.FC = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Input placeholder="Search" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    minHeight: height * 0.1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
});

export default Search;
