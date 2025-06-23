import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CART,
  CATEGORIES,
  LOGIN,
  PRODUCTDETAIL,
  PRODUCTSLISTSCREEN,
  SIGNUP,
  TABBAR,
} from '../utils/routes';
import TabNavigator from './tabNavigator';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import ProductsListScreen from '../screens/products/ProductsListScreen';
import ProductDetail from '../screens/products/ProductDetail';
import Cart from '../screens/cart/Cart';
import Login from '../screens/authScreen/Login';
import { RootStackParamList } from '../navigation/types';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/store';
import SignUp from '../screens/signupScreen.tsx/SignUp';
import { checkUser } from '../store/actions/authActions';

const RouteNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(checkUser());
  }, [dispatch]);

  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Back',
        headerTintColor: 'black',
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name={TABBAR}
        component={TabNavigator}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={CATEGORIES}
        component={CategoriesScreen}
      />
      <Stack.Screen
        options={{ headerShown: true }}
        name={PRODUCTSLISTSCREEN}
        component={ProductsListScreen}
      />
      <Stack.Screen
        options={{ headerShown: true, headerTitle: 'My Cart' }}
        name={CART}
        component={Cart}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={PRODUCTDETAIL}
        component={ProductDetail}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={LOGIN}
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name={SIGNUP}
        component={SignUp}
      />
    </Stack.Navigator>
  );
};

export default RouteNavigator;
