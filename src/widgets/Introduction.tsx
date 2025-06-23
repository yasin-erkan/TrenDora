import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../theme/colors';
import { height, width } from '../utils/constants';

const Introduction: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Deals You'll Love</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Up to 70% OFF</Text>
        </TouchableOpacity>
      </View>
      <Image
        source={require('../assets/images/intro-.png')}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.heartIcon}>💖</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.PRIMARY,
    borderRadius: 24,
    padding: 15,
    marginHorizontal: 10,
    marginTop: 10,
    flexDirection: 'row',
    height: height * 0.22,
    position: 'relative',
    overflow: 'visible',
    alignItems: 'center',
    marginBottom: 20,
  },
  textContainer: {
    flex: 1,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    lineHeight: 32,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 16,
    marginTop: 12,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: colors.RED,
    fontWeight: 'bold',
    fontSize: 14,
  },
  image: {
    width: width * 0.7,
    height: height * 0.27,
    position: 'absolute',
    right: -92,
    top: -25,
    bottom: 0,
  },
  heartIcon: {
    position: 'absolute',
    top: '31%',
    right: '30%',
    fontSize: 25,
    transform: [{ rotate: '15deg' }],
  },
});

export default Introduction;
