import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import FavoriteItem from '../../components/favorite/FavoriteItem';
import colors from '../../theme/colors';
import { Heart } from 'iconsax-react-native';

const Favourite: React.FC = () => {
  const { favorites } = useSelector((state: RootState) => state.favorite);

  const EmptyFavorites = () => (
    
    <View style={styles.emptyContainer}>
      <View style={styles.emptyIconContainer}>
        <Heart size={100} color={colors.RED} variant="Bold" />
      </View>
      <Text style={styles.emptyTitle}>No favorites yet</Text>
      <Text style={styles.emptyDescription}>
        Start adding products to your favorites list by tapping the heart icon
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaViewStyle}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerContent}>
            <Heart size={28} color={colors.RED} variant="Bold" />
            <View style={styles.headerTextContainer}>
              <View style={styles.titleContainer}>
                <View style={styles.titleRow}>
                  <View style={styles.titleBadge}>
                    <Heart size={16} color={colors.WHITE} variant="Bold" />
                  </View>
                  <View style={styles.titleTextContainer}>
                    <Text style={styles.titleText}>My Favorites</Text>
                    <Text style={styles.subtitleText}>
                      {favorites.length}{' '}
                      {favorites.length === 1 ? 'item' : 'items'} saved
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.content}>
          <FlatList
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContainer}
            ListEmptyComponent={EmptyFavorites}
            data={favorites}
            renderItem={({ item }) => <FavoriteItem product={item} />}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Favourite;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  header: {
    backgroundColor: colors.WHITE,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: colors.GRAY,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.05,
    shadowRadius: 8,
    elevation: 3,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerTextContainer: {
    marginLeft: 15,
    flex: 1,
  },
  titleContainer: {
    flex: 1,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleBadge: {
    backgroundColor: colors.RED,
    borderRadius: 20,
    padding: 8,
    marginRight: 12,
    shadowColor: colors.RED,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  titleTextContainer: {
    flex: 1,
  },
  titleText: {
    fontSize: 24,
    fontWeight: '800',
    color: colors.BLACK,
    marginBottom: 2,
  },
  subtitleText: {
    fontSize: 14,
    color: colors.DARK_GRAY,
    fontWeight: '500',
  },
  content: {
    flex: 1,
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 30,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.BLACK,
    marginTop: 20,
    marginBottom: 8,
  },
  emptyDescription: {
    fontSize: 16,
    color: colors.DARK_GRAY,
    textAlign: 'center',
    paddingHorizontal: 40,
  },
  emptyIconContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: colors.GRAY,
    borderRadius: 50,
  },
});
