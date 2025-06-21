import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { ShoppingBag, ArrowRight2 } from 'iconsax-react-native';
import colors from '../../theme/colors';

interface EmptyCartProps {
  onStartShopping?: () => void;
}

const EmptyCart: React.FC<EmptyCartProps> = ({ onStartShopping }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <ShoppingBag size={100} color={colors.RED} />
      </View>
      <Text style={styles.title}>Your cart is empty</Text>
      <Text style={styles.subtitle}>
        Looks like you haven't added any items to your cart yet
      </Text>
      <TouchableOpacity style={styles.button} onPress={onStartShopping}>
        <Text style={styles.buttonText}>Start Shopping Now !</Text>
        <ArrowRight2 size={20} color={colors.WHITE} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  iconContainer: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.BLACK,
    marginBottom: 12,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: colors.BLACK,
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
  },
  button: {
    backgroundColor: colors.INFO,
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  buttonText: {
    color: colors.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EmptyCart;
