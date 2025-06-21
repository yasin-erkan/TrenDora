import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import colors from '../../theme/colors';
import { height } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { CART } from '../../utils/routes';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';

const Header: React.FC = () => {
  const navigation = useNavigation();
  const { cart } = useSelector((state: RootState) => state.cart);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Text style={styles.text}>Discover</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate(CART)}
          style={styles.bagWrapper}
        >
          <View style={styles.bagContainer}>
            <Text style={styles.bagIcon}>👜</Text>
            <View style={styles.bagCount}>
              <Text style={styles.bagCountText}>{cart.length}</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: height / 10,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
  },
  text: {
    fontSize: 24,
    color: colors.SECONDARY,
    fontWeight: '600',
  },
  bagWrapper: {
    position: 'absolute',
    right: 20,
    bottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bagContainer: {
    borderWidth: 0.5,
    padding: 7,
    borderRadius: 100,
    borderColor: colors.SECONDARY,
    backgroundColor: colors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  bagIcon: {
    width: 24,
    height: 24,
    color: colors.SECONDARY,
  },
  bagCount: {
    position: 'absolute',
    width: 22,
    height: 22,
    backgroundColor: colors.PRIMARY,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    right: -5,
    top: -5,
    zIndex: 10,
  },
  bagCountText: {
    fontSize: 12,
    color: colors.WHITE,
    fontWeight: '700',
  },
});
