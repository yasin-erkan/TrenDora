import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { height, width } from '../utils/constants';
import colors from '../theme/colors';

const Introduction: React.FC = () => {
  return (
    <View style={styles.bg}>
      <View style={styles.card}>
        <View style={styles.leftSection}>
          <Text style={styles.title}>Special Offers! 🔥</Text>
          <Text style={styles.discount}>Up to 70% OFF</Text>
        </View>
        <View style={styles.rightSection}>
          <Image
            source={require('../assets/images/intro1.png')}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    backgroundColor: colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
    borderRadius: 30,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: colors.PRIMARY,
    borderRadius: 20,
    width: width - 10,
    minHeight: height * 0.15,
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 10,
    elevation: 4,
  },
  leftSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingRight: 10,
    paddingLeft: 15,
  },
  title: {
    color: '#fff',
    fontSize: 28,
    fontWeight: 'bold',
    lineHeight: 34,
    letterSpacing: 0.2,
    marginBottom: 10,
  },
  discount: {
    color: '#48D861',
    backgroundColor: colors.WHITE,
    fontSize: 18,
    fontWeight: '700',
    borderRadius: 10,
    marginTop: 6,
    letterSpacing: 0.5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    textAlign: 'center',
  },
  rightSection: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    width: width * 0.7,
    height: height * 0.15,
    borderRadius: 10,
    resizeMode: 'contain',
    padding: 5,
  },
});

export default Introduction;
