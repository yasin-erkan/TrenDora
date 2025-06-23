import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import defaultScreenStyle from '../../styles/defaultScreenStyle';
import { RootState } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';
import Login from '../authScreen/Login';
import { logoutUser } from '../../store/actions/authActions';

const Profile: React.FC = () => {
  const { isLogin } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  if (!isLogin) {
    return (
      <SafeAreaView style={defaultScreenStyle.safeAreaViewStyle}>
        <Login />
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={defaultScreenStyle.safeAreaViewStyle}>
      <ScrollView style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.avatarContainer}>
            <Image
              source={require('../../assets/images/lee.png')}
              style={styles.image}
            />
            <TouchableOpacity style={styles.editAvatarButton}>
              <Text style={styles.editAvatarText}>✏️</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.name}>John Lee</Text>
          <Text style={styles.email}>john@gmail.com</Text>
        </View>

        {/* Stats */}
        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>5</Text>
            <Text style={styles.statLabel}>Orders</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>15</Text>
            <Text style={styles.statLabel}>Favorites</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statNumber}>2</Text>
            <Text style={styles.statLabel}>Addresses</Text>
          </View>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>👤</Text>
            <Text style={styles.menuText}>Profile Information</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>📦</Text>
            <Text style={styles.menuText}>My Orders</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>❤️</Text>
            <Text style={styles.menuText}>Favorites</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>📍</Text>
            <Text style={styles.menuText}>My Addresses</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuIcon}>⚙️</Text>
            <Text style={styles.menuText}>Settings</Text>
            <Text style={styles.menuArrow}>›</Text>
          </TouchableOpacity>
        </View>

        {/* Logout Button */}
        <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 30,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  avatarContainer: {
    position: 'relative',
    marginBottom: 15,
  },
  image: {
    width: 60,
    height: 100,
    borderRadius: 80,
    borderWidth: 2,
    borderColor: '#e9ecef',
    marginBottom: 10,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007bff',
    width: 36,
    height: 36,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  editAvatarText: {
    fontSize: 16,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#212529',
    marginBottom: 5,
  },
  email: {
    fontSize: 16,
    color: '#6c757d',
  },
  statsContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 12,
    paddingVertical: 20,
  },
  statItem: {
    flex: 1,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007bff',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 14,
    color: '#6c757d',
  },
  menuContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 20,
    borderRadius: 12,
    marginBottom: 20,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f8f9fa',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 15,
    width: 25,
  },
  menuText: {
    flex: 1,
    fontSize: 16,
    color: '#212529',
    fontWeight: '500',
  },
  menuArrow: {
    fontSize: 20,
    color: '#6c757d',
  },
  logoutButton: {
    backgroundColor: '#dc3545',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  logoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
