import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useEffect, useState } from 'react';
import colors from '../../theme/colors';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import CartItem from '../../components/cart/CartItem';
import EmptyCart from '../../components/cart/EmptyCart';
import { Product } from '../../models/data/productsState';
import { useNavigation } from '@react-navigation/native';
import { NavigationProp } from '@react-navigation/native';

const Cart: React.FC = () => {
  const { cart } = useSelector((state: RootState) => state.cart);
  const [subtotal, setSubtotal] = useState<number>(0);
  const [deliveryFee] = useState<number>(5.0);
  const [discount] = useState<number>(10.0);
  const navigation = useNavigation<NavigationProp<any>>();

  useEffect(() => {
    const calculatedSubtotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0,
    );
    setSubtotal(calculatedSubtotal);
  }, [cart]);

  const total = cart.length > 0 ? subtotal + deliveryFee - discount : 0;

  const renderItem = ({ item }: { item: Product }) => (
    <CartItem product={item} />
  );

  const handleStartShopping = () => {
    navigation.navigate('Tabbar');
  };

  return (
    <SafeAreaView style={styles.container}>
      {cart.length === 0 ? (
        <EmptyCart onStartShopping={handleStartShopping} />
      ) : (
        <>
          <FlatList
            data={cart}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            contentContainerStyle={styles.listContainer}
            showsVerticalScrollIndicator={false}
          />
          <View style={styles.checkoutContainer}>
            <View style={styles.priceDetailRow}>
              <Text style={styles.priceDetailText}>Subtotal</Text>
              <Text style={styles.priceDetailValue}>
                ${subtotal.toFixed(2)}
              </Text>
            </View>
            {cart.length > 0 && (
              <>
                <View style={styles.priceDetailRow}>
                  <Text style={styles.priceDetailText}>Delivery Fee</Text>
                  <Text style={styles.priceDetailValue}>
                    ${deliveryFee.toFixed(2)}
                  </Text>
                </View>
                <View style={styles.priceDetailRow}>
                  <Text style={styles.priceDetailText}>Discount</Text>
                  <Text style={styles.priceDetailValue}>
                    -${discount.toFixed(2)}
                  </Text>
                </View>
              </>
            )}
            <View style={styles.separator} />
            <View style={styles.totalContainer}>
              <Text style={styles.totalText}>Total:</Text>
              <Text style={styles.totalPrice}>${total.toFixed(2)}</Text>
            </View>
            <TouchableOpacity style={styles.checkoutButton}>
              <Text style={styles.checkoutButtonText}>Checkout</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  listContainer: {
    padding: 15,
  },
  checkoutContainer: {
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: colors.GRAY,
    backgroundColor: colors.WHITE,
  },
  priceDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  priceDetailText: {
    fontSize: 16,
    color: colors.DARK_GRAY,
  },
  priceDetailValue: {
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: '500',
  },
  separator: {
    height: 1,
    backgroundColor: colors.GRAY,
    marginVertical: 15,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalText: {
    fontSize: 18,
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.BLACK,
  },
  checkoutButton: {
    backgroundColor: colors.PRIMARY,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: colors.WHITE,
    fontSize: 18,
    fontWeight: 'bold',
  },
});
