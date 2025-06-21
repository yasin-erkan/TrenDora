import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { width } from '../utils/constants';

const BestSeller = () => {
  const { products } = useSelector((state: RootState) => state.products);

  // Rastgele 3 ürün seç
  const randomProducts = products
    .filter(p => p.images && p.images.length > 0)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <Text style={styles.title}>Best-Seller</Text>
        <Text style={styles.desc}>Most popular products of the week!</Text>
        <View style={styles.imageRow}>
          {randomProducts.map((product, idx) => (
            <Image
              key={product.id || idx}
              source={{ uri: product.images[0] as string }}
              style={styles.image}
              resizeMode="contain"
            />
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F6F6F6',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 24,
    padding: 24,
    alignItems: 'center',
    width: width - 40,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 4,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#232323',
    marginBottom: 8,
  },
  desc: {
    fontSize: 16,
    color: '#666',
    marginBottom: 18,
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 12,
  },
  image: {
    width: width * 0.22,
    height: width * 0.18,
    borderRadius: 12,
    marginHorizontal: 4,
  },
});

export default BestSeller;
