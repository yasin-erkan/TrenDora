import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import widgets from '../../widgets/widgets.json';
import React, { useEffect } from 'react';
import { RouteType } from '../routes/RouteType';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getProductsFilterCategory } from '../../store/actions/productsActions';
import Introduction from '../../widgets/Introduction';
import Categories from '../../widgets/Categories';
import Search from '../../widgets/Search';
import BestSeller from '../../widgets/BestSeller';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { getCategories } from '../../store/actions/categoriesActions';

type Props = RouteType<'Home'>;

const Home: React.FC<Props> = ({ navigation, route }) => {
  const { pending } = useSelector((state: RootState) => state.products);

  const { selectedCategory } = useSelector(
    (state: RootState) => state.categories,
  );

  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  useEffect(() => {
    dispatch(
      getProductsFilterCategory({
        categorySlug: selectedCategory === 'all' ? '' : selectedCategory,
      }),
    );
  }, [selectedCategory]);

  const renderItem = ({ item }: { item: (typeof widgets)[0] }) => {
    switch (item.slug) {
      case 'search':
        return <Search widget={item} />;
      case 'categories':
        return <Categories widget={item} />;
      case 'introduction':
        return <Introduction widget={item} />;

      case 'best-seller':
        return <BestSeller widget={item} />;
      default:
        return (
          <View style={styles.widgetItem}>
            <Text style={styles.text}>{item.title}</Text>
          </View>
        );
    }
  };

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaViewStyle}>
      <View style={defaultScreenStyle.container}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={widgets}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  widgetItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});

export default Home;
