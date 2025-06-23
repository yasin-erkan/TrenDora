import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import { Product } from '../../models/data/productsState';
import colors from '../../theme/colors';
import { width } from '../../utils/constants';
import { Star1, Heart } from 'iconsax-react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { PRODUCTDETAIL } from '../../utils/routes';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import {
  addToFavorite,
  removeFromFavorite,
} from '../../store/slices/favoriteSlice';

interface ProductItemProps {
  product: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  const navigation = useNavigation<NavigationProp<any>>();
  const dispatch = useDispatch();
  const { favorites } = useSelector((state: RootState) => state.favorite);
  const { isLogin } = useSelector((state: RootState) => state.auth);

  const isProductInFavorites = favorites.some(fav => fav.id === product.id);

  const handleFavorite = () => {
    if (!isLogin) {
      // You could show a login modal here
      return;
    }

    if (isProductInFavorites) {
      dispatch(removeFromFavorite(product.id));
    } else {
      dispatch(addToFavorite(product));
    }
  };

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
        <TouchableOpacity
          style={styles.heartButton}
          onPress={e => {
            e.stopPropagation();
            handleFavorite();
          }}
        >
          <Heart
            size={16}
            color={isProductInFavorites ? colors.RED : colors.DARK_GRAY}
            variant={isProductInFavorites ? 'Bold' : 'Outline'}
          />
        </TouchableOpacity>
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

      <Text style={styles.price}>${product.price.toFixed(2)}</Text>
    </Pressable>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    width: width / 2 - 30,
    margin: 10,
    backgroundColor: colors.WHITE,
    borderRadius: 12,
    padding: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
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
  heartButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: colors.WHITE,
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
});
