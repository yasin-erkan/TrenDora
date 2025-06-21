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
import { Minus, Add, CloseCircle } from 'iconsax-react-native';
import colors from '../../theme/colors';
import { ChartItemProps } from '../../models/ui/chartItemProps';
import { useDispatch } from 'react-redux';
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from '../../store/slices/cartSlice';
import { NavigationProp } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';

import { PRODUCTDETAIL } from '../../utils/routes';

const { width } = Dimensions.get('window');

const CartItem: React.FC<ChartItemProps> = ({ product }) => {
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
              onPress={() => dispatch(removeFromCart(product.id))}
            >
              <CloseCircle
                size={24}
                color={colors.DARK_GRAY}
                variant="Linear"
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.description} numberOfLines={1}>
            {product.priceDiscount}
          </Text>
        </View>
        <View style={styles.bottomRow}>
          <Text style={styles.price}>${product.price.toFixed(2)}</Text>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => dispatch(decrementQuantity(product.id))}
              style={styles.quantityButton}
            >
              <Minus size={18} color={colors.BLACK} />
            </TouchableOpacity>
            <Text style={styles.quantity}>{product.quantity}</Text>
            <TouchableOpacity
              onPress={() => dispatch(incrementQuantity(product.id))}
              style={[styles.quantityButton, styles.addButton]}
            >
              <Add size={18} color={colors.WHITE} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    borderRadius: 16,
    padding: 14,
    marginBottom: 18,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 12,
    elevation: 6,
  },
  image: {
    width: width * 0.26,
    height: width * 0.26,
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
    marginBottom: 4,
  },
  title: {
    fontSize: 17,
    fontWeight: '600',
    color: colors.BLACK,
    flex: 1,
    marginRight: 10,
  },
  description: {
    fontSize: 13,
    color: colors.DARK_GRAY,
    marginTop: 2,
    flexShrink: 1,
    flexWrap: 'nowrap',
    width: '100%',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.BLACK,
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
});
