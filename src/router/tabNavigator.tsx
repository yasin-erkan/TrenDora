import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { FAVORITE, HOME, PROFILE, SEARCH } from '../utils/routes';
import Home from '../screens/home/Home';
import Search from '../screens/search/Search';
import Profile from '../screens/profile/Profile';
import Favourite from '../screens/favourite/Favourite';
import colors from '../theme/colors';
import TabIcon from '../components/router/TabIcon';
import Header from '../components/router/Header';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }): BottomTabNavigationOptions => ({
        headerTintColor: colors.PRIMARY,
        headerTitleAlign: 'center',
        headerShown: true,
        header: () => <Header />,
        tabBarIcon: ({ focused, color, size }) => (
          <TabIcon
            name={route.name}
            size={size}
            color={color}
            focused={focused}
          />
        ),
        tabBarActiveTintColor: colors.PRIMARY,
        tabBarInactiveTintColor: colors.SECONDARY,
      })}
    >
      <Tab.Screen name={HOME} component={Home} />
      <Tab.Screen name={SEARCH} component={Search} />
      <Tab.Screen name={FAVORITE} component={Favourite} />
      <Tab.Screen name={PROFILE} component={Profile} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
