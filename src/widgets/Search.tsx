import { StyleSheet, View } from 'react-native';
import React from 'react';
import defaultScreenStyle from '../styles/defaultScreenStyle';
import { height } from '../utils/constants';
import Input from '../components/ui/Input';
import colors from '../theme/colors';

const Search: React.FC = () => {
  return (
    <View style={defaultScreenStyle.container}>
      <Input placeholder="Search" showIcon />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    fontWeight: '900',
    borderRadius: 10,
    padding: 10,
    margin: 10,
    marginBottom: 10,
    minHeight: height * 0.1,
    justifyContent: 'center',
  },
  input: {
    backgroundColor: colors.BLACK,
    borderRadius: 10,
    padding: 15,
    margin: 5,
    marginBottom: 5,
    height: height * 0.1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
});

export default Search;
