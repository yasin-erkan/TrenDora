import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile Page</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
