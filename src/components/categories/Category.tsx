import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CategoryItemProps } from '../../models/ui/categoryItemProps';
import colors from '../../theme/colors';
import { PRODUCTSLISTSCREEN } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';
import { width } from '../../utils/constants';
import { NavigationProp } from '@react-navigation/native';

const Category: React.FC<CategoryItemProps> = ({ category }) => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTSLISTSCREEN, { categorySlug: category.slug })
      }
      style={styles.container}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: category.image }} style={styles.image} />
        <View style={styles.overlay} />
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{category.name}</Text>
        <Text style={styles.productCount}>24 products</Text>
      </View>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    width: (width - 60) / 2,
    backgroundColor: colors.WHITE,
    borderRadius: 16,
    margin: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 5,
    overflow: 'hidden',
  },
  imageContainer: {
    position: 'relative',
    width: '100%',
    height: 100,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.15)',
  },
  nameContainer: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: colors.WHITE,
  },
  name: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.BLACK,
    textAlign: 'center',
    marginBottom: 4,
    lineHeight: 20,
  },
  productCount: {
    fontSize: 12,
    color: colors.DARK_GRAY,
    fontWeight: '400',
  },
});
