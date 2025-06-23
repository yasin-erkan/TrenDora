import {
  StyleSheet,
  Text,
  View,
  TextInput,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../../store/store';
import { getProducts } from '../../store/actions/productsActions';
import ProductItem from '../../components/products/ProductItem';
import colors from '../../theme/colors';
import { SearchNormal1, Filter, CloseCircle } from 'iconsax-react-native';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { Product } from '../../models/data/productsState';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const dispatch = useDispatch<AppDispatch>();
  const { products } = useSelector((state: RootState) => state.products);
  const { categories } = useSelector((state: RootState) => state.categories);

  useEffect(() => {
    dispatch(getProducts({}));
  }, [dispatch]);

  const filterProducts = useCallback(() => {
    let filtered = products;

    // Filter by search query
    if (searchQuery.trim()) {
      filtered = filtered.filter(
        product =>
          product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          product.description.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    }

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(
        product => product.category === selectedCategory,
      );
    }

    setFilteredProducts(filtered);
  }, [searchQuery, products, selectedCategory]);

  useEffect(() => {
    filterProducts();
  }, [filterProducts]);

  const clearSearch = () => {
    setSearchQuery('');
  };

  const CategoryFilter = () => (
    <View style={styles.categoryContainer}>
      <TouchableOpacity
        style={[
          styles.categoryItem,
          selectedCategory === 'All' && styles.selectedCategory,
        ]}
        onPress={() => setSelectedCategory('All')}
      >
        <Text
          style={[
            styles.categoryText,
            selectedCategory === 'All' && styles.selectedCategoryText,
          ]}
        >
          All
        </Text>
      </TouchableOpacity>

      {categories.slice(0, 4).map(category => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.categoryItem,
            selectedCategory === category.name && styles.selectedCategory,
          ]}
          onPress={() => setSelectedCategory(category.name)}
        >
          <Text
            style={[
              styles.categoryText,
              selectedCategory === category.name && styles.selectedCategoryText,
            ]}
          >
            {category.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );

  const EmptyResults = () => (
    <View style={styles.emptyContainer}>
      <SearchNormal1 size={80} color={colors.GRAY} />
      <Text style={styles.emptyTitle}>No products found</Text>
      <Text style={styles.emptyDescription}>
        Try adjusting your search or filter criteria
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaViewStyle}>
      <View style={styles.container}>
        {/* Search Header  part*/}
        <View style={styles.searchHeader}>
          <View style={styles.searchContainer}>
            <SearchNormal1 size={20} color={colors.DARK_GRAY} />
            <TextInput
              style={styles.searchInput}
              placeholder="Search products..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              placeholderTextColor={colors.DARK_GRAY}
            />
            {searchQuery.length > 0 && (
              <TouchableOpacity onPress={clearSearch}>
                <CloseCircle size={20} color={colors.DARK_GRAY} />
              </TouchableOpacity>
            )}
          </View>

          <TouchableOpacity
            style={styles.filterButton}
            onPress={() => setShowFilters(!showFilters)}
          >
            <Filter size={20} color={colors.PRIMARY} />
          </TouchableOpacity>
        </View>

        {/* Results Count */}
        <View style={styles.resultsHeader}>
          <Text style={styles.resultsCount}>
            {filteredProducts.length}{' '}
            {filteredProducts.length === 1 ? 'result' : 'results'}
          </Text>
          {searchQuery && (
            <Text style={styles.searchFor}>for "{searchQuery}"</Text>
          )}
        </View>

        {/* Category Filters */}
        {showFilters && <CategoryFilter />}

        {/* Products List */}
        <FlatList
          data={filteredProducts}
          renderItem={({ item }) => <ProductItem product={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          contentContainerStyle={styles.productsList}
          columnWrapperStyle={styles.row}
          showsVerticalScrollIndicator={false}
          ListEmptyComponent={EmptyResults}
        />
      </View>
    </SafeAreaView>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  searchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY,
  },
  searchContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.GRAY,
    borderRadius: 12,
    paddingHorizontal: 15,
    paddingVertical: 12,
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
    color: colors.BLACK,
  },
  filterButton: {
    padding: 12,
    backgroundColor: colors.GRAY,
    borderRadius: 12,
  },
  resultsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: colors.WHITE,
  },
  resultsCount: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.BLACK,
  },
  searchFor: {
    fontSize: 16,
    color: colors.DARK_GRAY,
    marginLeft: 5,
  },
  categoryContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: colors.WHITE,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY,
  },
  categoryItem: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: colors.GRAY,
    borderRadius: 20,
    marginRight: 10,
  },
  selectedCategory: {
    backgroundColor: colors.PRIMARY,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.DARK_GRAY,
  },
  selectedCategoryText: {
    color: colors.WHITE,
  },
  productsList: {
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  row: {
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginTop: 20,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    color: colors.DARK_GRAY,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
});
