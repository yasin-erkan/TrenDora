import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import colors from '../theme/colors';
import { Star1, ArrowRight2 } from 'iconsax-react-native';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';
import { PRODUCTSLISTSCREEN } from '../utils/routes';

const BestSeller = () => {
  const { products } = useSelector((state: RootState) => state.products);
  const navigation = useNavigation<NavigationProp<any>>();

  const bestProducts = products
    .filter(p => p.images && p.images.length > 0)
    .sort((a, b) => b.id - a.id)
    .slice(0, 6);

  const handleViewAll = () => {
    navigation.navigate(PRODUCTSLISTSCREEN, { categorySlug: '' });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Best Sellers</Text>
          <Text style={styles.subtitle}>Most popular products this week</Text>
        </View>
        <TouchableOpacity style={styles.viewAllButton} onPress={handleViewAll}>
          <Text style={styles.viewAllText}>View All</Text>
          <ArrowRight2 size={16} color={colors.PRIMARY} />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {bestProducts.map((product, index) => (
          <TouchableOpacity key={product.id} style={styles.productCard}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: product.images[0] }}
                style={styles.productImage}
                resizeMode="cover"
              />
              {index < 3 && (
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>#{index + 1}</Text>
                </View>
              )}
            </View>
            <View style={styles.productInfo}>
              <Text style={styles.productTitle} numberOfLines={1}>
                {product.title}
              </Text>
              <View style={styles.ratingContainer}>
                <Star1 size={12} color={colors.ORANGE} variant="Bold" />
                <Text style={styles.ratingText}>4.8</Text>
              </View>
              <View style={styles.priceContainer}>
                <Text style={styles.price}>
                  ${product.priceDiscount?.toFixed(2)}
                </Text>
                <Text style={styles.originalPrice}>
                  ${product.price?.toFixed(2)}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.WHITE,
    paddingVertical: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
    paddingHorizontal: 20,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.BLACK,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 13,
    color: colors.DARK_GRAY,
    fontWeight: '700',
  },
  viewAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  viewAllText: {
    fontSize: 13,
    fontWeight: '600',
    color: colors.PRIMARY,
    marginRight: 4,
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  productCard: {
    width: 140,
    backgroundColor: colors.WHITE,
    borderRadius: 12,
    marginRight: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 100,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    overflow: 'hidden',
  },
  productImage: {
    width: '100%',
    height: '100%',
  },
  badge: {
    position: 'absolute',
    top: 6,
    left: 6,
    backgroundColor: colors.ORANGE,
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
  },
  badgeText: {
    fontSize: 12,
    fontWeight: '700',
    color: colors.WHITE,
  },
  productInfo: {
    padding: 10,
  },
  productTitle: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.BLACK,
    marginBottom: 4,
    lineHeight: 14,
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  ratingText: {
    fontSize: 11,
    fontWeight: '600',
    color: colors.BLACK,
    marginLeft: 3,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.PRIMARY,
    marginRight: 4,
  },
  originalPrice: {
    fontSize: 10,
    color: colors.DARK_GRAY,
    fontWeight: '700',
    textDecorationLine: 'line-through',
  },
});

export default BestSeller;
