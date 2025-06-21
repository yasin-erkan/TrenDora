import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Category from '../../components/categories/Category';
import { SafeAreaView } from 'react-native-safe-area-context';
import defaultScreenStyle from '../../styles/defaultScreenStyle';

const CategoriesScreen: React.FC = ({ navigation, route }) => {
  const { categories } = useSelector((state: RootState) => state.categories);

  return (
    <SafeAreaView style={styles.container}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          data={categories}
          renderItem={({ item }) => <Category category={item} />}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CategoriesScreen;
