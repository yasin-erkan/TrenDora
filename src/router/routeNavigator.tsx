import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CART,
  CATEGORIES,
  PRODUCTDETAIL,
  PRODUCTSLISTSCREEN,
  TABBAR,
} from '../utils/routes';
import TabNavigator from './tabNavigator';
import CategoriesScreen from '../screens/categories/CategoriesScreen';
import ProductsListScreen from '../screens/products/ProductsListScreen';
import ProductDetail from '../screens/products/ProductDetail';
import Cart from '../screens/cart/Cart';
import { RootStackParamList } from '../navigation/types';

const RouteNavigator = () => {
  const Stack = createNativeStackNavigator<RootStackParamList>();

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
    </Stack.Navigator>
  );
};

export default RouteNavigator;
