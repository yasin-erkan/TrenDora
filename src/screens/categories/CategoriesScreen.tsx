import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Category from '../../components/categories/Category';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft2 } from 'iconsax-react-native';
import colors from '../../theme/colors';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/types';
import { CATEGORIES } from '../../utils/routes';

type Props = NativeStackScreenProps<RootStackParamList, typeof CATEGORIES>;

const CategoriesScreen: React.FC<Props> = ({ navigation }) => {
  const { categories } = useSelector((state: RootState) => state.categories);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <ArrowLeft2 size={24} color={colors.BLACK} />
        </Pressable>
        <Text style={styles.headerTitle}>All Categories</Text>
        <View style={styles.placeholder} />
      </View>

      {/* Content */}
      <View style={styles.content}>
        <Text style={styles.subtitle}>Explore our product categories</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => <Category category={item} />}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    backgroundColor: colors.WHITE,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  backButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: colors.GRAY,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: colors.BLACK,
    textAlign: 'center',
  },
  placeholder: {
    width: 44,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  subtitle: {
    fontSize: 16,
    color: colors.DARK_GRAY,
    marginBottom: 24,
    textAlign: 'center',
    fontWeight: '500',
    lineHeight: 22,
  },
  listContainer: {
    paddingBottom: 20,
  },
});

export default CategoriesScreen;
