import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import colors from '../../theme/colors';

interface EmptyCartProps {
  onStartShopping: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onStartShopping }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Your cart is empty</Text>
      <Text style={styles.subtitle}>Add some products to get started</Text>
      <TouchableOpacity style={styles.button} onPress={onStartShopping}>
        <Text style={styles.buttonText}>Start Shopping</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmptyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: colors.DARK_GRAY,
    marginBottom: 30,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.PRIMARY,
    paddingHorizontal: 30,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
