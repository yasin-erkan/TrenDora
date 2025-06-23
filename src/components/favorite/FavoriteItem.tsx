import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Pressable,
} from 'react-native';
import { CloseCircle } from 'iconsax-react-native';
import colors from '../../theme/colors';
import { ChartItemProps } from '../../models/ui/chartItemProps';
import { useDispatch } from 'react-redux';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { PRODUCTDETAIL } from '../../utils/routes';
import { removeFromFavorite } from '../../store/slices/favoriteSlice';

const { width } = Dimensions.get('window');

const FavoriteItem: React.FC<ChartItemProps> = ({ product }) => {
  const dispatch = useDispatch();
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTDETAIL, { productId: product.id })
      }
      style={styles.container}
    >
      <Image source={{ uri: product.images[0] }} style={styles.image} />
      <View style={styles.infoContainer}>
        <View>
          <View style={styles.titleRow}>
            <Text style={styles.title} numberOfLines={1}>
              {product.title}
            </Text>
            <TouchableOpacity
              onPress={() => dispatch(removeFromFavorite(product.id))}
              style={styles.removeButton}
            >
              <CloseCircle size={20} color={colors.RED} variant="Bold" />
            </TouchableOpacity>
          </View>
          <Text style={styles.description} numberOfLines={1}>
            {product.priceDiscount}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default FavoriteItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
    borderWidth: 1,
    borderColor: colors.GRAY,
  },
  image: {
    width: width * 0.28,
    height: width * 0.28,
    borderRadius: 12,
    backgroundColor: colors.GRAY,
    resizeMode: 'cover',
  },
  infoContainer: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'space-between',
  },
  titleRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: colors.BLACK,
    flex: 1,
    marginRight: 12,
    lineHeight: 20,
  },
  description: {
    fontSize: 14,
    color: colors.DARK_GRAY,
    marginTop: 4,
    flexShrink: 1,
    flexWrap: 'nowrap',
    width: '100%',
    lineHeight: 18,
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    color: colors.PRIMARY,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: colors.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: colors.PRIMARY,
  },
  quantity: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.BLACK,
    marginHorizontal: 14,
  },
  removeButton: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: colors.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
