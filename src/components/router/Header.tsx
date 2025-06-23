import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  Image,
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
        <View style={styles.logoContainer}>
          <View style={styles.iconContainer}>
            <Image
              source={require('../../assets/images/trendora.png')}
              style={styles.trendora}
            />
          </View>
          <Text style={styles.appName}>TrenDora</Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate(CART as never)}
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
    height: height / 9,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 5,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    backgroundColor: colors.GRAY,
    padding: 4,
    borderRadius: 16,
    marginRight: 5,
    shadowColor: colors.PRIMARY,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  appName: {
    fontSize: 28,
    color: colors.BLACK,
    fontWeight: '700',
    fontFamily: '',
    letterSpacing: -0.5,
  },
  trendora: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
    borderRadius: 100,
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
    fontSize: 20,
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
