import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import WidgetHeader from '../components/widgets/WidgetHeader';
import { RootState } from '../store/store';
import { useSelector } from 'react-redux';
import CategoryItem from '../components/categories/CategoryItem';
import { useNavigation } from '@react-navigation/native';
import { CATEGORIES } from '../utils/routes';
import ProductItem from '../components/products/ProductItem';
import { height } from '../utils/constants';

interface CategoriesProps {
  widget: any;
}

const Categories: React.FC<CategoriesProps> = ({ widget }) => {
  const { categories } = useSelector((state: RootState) => state.categories);
  const { productsFilterCategory, pending } = useSelector(
    (state: RootState) => state.products,
  );

  const navigation = useNavigation<any>();
  const handleNavigate = () => {
    navigation.navigate(CATEGORIES);
  };

  return (
    <View style={styles.container}>
      <WidgetHeader widget={widget} handleNavigate={handleNavigate} />

      <FlatList
        showsVerticalScrollIndicator={false}
        horizontal={true}
        data={categories}
        renderItem={({ item }) => <CategoryItem category={item} />}
      />
      {pending ? (
        <View style={styles.loading}>
          <ActivityIndicator size={'large'} color={'green'} />
        </View>
      ) : (
        <FlatList
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={productsFilterCategory}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 3,
  },
});
export default Categories;
