import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { AppDispatch, RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../store/actions/productsActions';
import colors from '../../theme/colors';
import ProductItem from '../../components/products/ProductItem';
import { RouteProp } from '@react-navigation/native';

const ProductsListScreen: React.FC<{ route: RouteProp<any> }> = ({ route }) => {
  const categorySlug = route?.params?.categorySlug;
  const { products, pending } = useSelector(
    (state: RootState) => state.products,
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getProducts({
        categorySlug: categorySlug === 'all' ? '' : categorySlug,
      }),
    );
  }, [categorySlug, dispatch]);

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaViewStyle}>
      <View style={defaultScreenStyle.container}>
        <View style={styles.loadingContainer}>
          {pending && (
            <ActivityIndicator size="large" color={colors.DARK_GRAY} />
          )}
          <FlatList
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={products}
            renderItem={({ item }) => <ProductItem product={item} />}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ProductsListScreen;
