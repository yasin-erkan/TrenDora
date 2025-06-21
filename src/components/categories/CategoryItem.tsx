import { Pressable, StyleSheet, Text } from 'react-native';
import React from 'react';
import { CategoryItemProps } from '../../models/ui/categoryItemProps';
import colors from '../../theme/colors';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { setCategory } from '../../store/slices/categoriesSlice';

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { selectedCategory } = useSelector(
    (state: RootState) => state.categories,
  );

  const dispatch: AppDispatch = useDispatch();

  return (
    <Pressable
      onPress={() => dispatch(setCategory(category.slug))}
      style={[
        styles.container,
        {
          backgroundColor:
            selectedCategory === category.slug ? colors.PRIMARY : colors.WHITE,
          borderColor:
            selectedCategory === category.slug ? colors.PRIMARY : colors.BLACK,
        },
      ]}
    >
      <Text
        style={[
          styles.title,
          {
            color:
              selectedCategory === category.slug ? colors.WHITE : colors.BLACK,
          },
        ]}
      >
        {category.name}
      </Text>
    </Pressable>
  );
};

export default CategoryItem;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 5,
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    paddingVertical: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },

  title: {
    fontSize: 20,
    fontWeight: '500',
  },
});
