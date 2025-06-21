import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Product } from '../../models/data/productsState';
import colors from '../../theme/colors';
import { width } from '../../utils/constants';
import { Star1 } from 'iconsax-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PRODUCTDETAIL } from '../../utils/routes';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTDETAIL, { productId: product.id })
      }
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        {product?.images && product.images[0] && (
          <Image
            style={styles.image}
            source={{ uri: product.images[0] as string }}
          />
        )}
      </View>

      <View style={styles.nameContainer}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={1} style={styles.name}>
            {product.title}
          </Text>
        </View>

        <View style={styles.starContainer}>
          <Star1 color={colors.ORANGE} variant="Bold" size={14} />
          <Text style={styles.rating}>5.0</Text>
        </View>
      </View>

      <Text style={styles.price}>${product.price}.00</Text>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 30,
    margin: 10,
  },
  imageContainer: {
    backgroundColor: colors.GRAY,
    paddingVertical: 20,
    borderRadius: 10,
    width: '100%',
    height: width * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '80%',
    resizeMode: 'contain',
    borderRadius: 8,
  },
  name: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.DARK_GRAY,
  },
  nameContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
  },
  starContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  rating: {
    fontSize: 12,
    fontWeight: '600',
    color: colors.DARK_GRAY,
    marginLeft: 2,
  },
  price: {
    fontSize: 14,
    fontWeight: '700',
    color: colors.SECONDARY,
  },
  titleContainer: {
    flex: 6,
  },
});
