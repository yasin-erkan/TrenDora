import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { CategoryItemProps } from '../../models/ui/categoryItemProps';
import colors from '../../theme/colors';
import { PRODUCTSLISTSCREEN } from '../../utils/routes';
import { useNavigation } from '@react-navigation/native';

const Category: React.FC<CategoryItemProps> = ({ category }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate(PRODUCTSLISTSCREEN, { categorySlug: category.slug })
      }
      style={styles.container}
    >
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{category.name}</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image source={{ uri: category.image }} style={styles.image} />
      </View>
    </Pressable>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    margin: 5,
    padding: 5,
    borderRadius: 8,
  },
  nameContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: '600',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 150,
    resizeMode: 'stretch',
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
});
