import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AllChatsScreen,
  LogInScreen,
  NotificationScreen,
  ProfileScreen,
  ShoppingBagScreen
} from '../screens/index.screens';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import HomeStack from './homeStack';
import CartScreen from '../screens/cartScreen/cartScreen';
import MapScreen from '../screens/mapScreen/mapScreen';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#363636',
        tabBarActiveTintColor: '#9e6dde'
      }}
    >
      <Tab.Screen
        component={HomeStack}
        name="Home"
        options={{
          tabBarIcon: ({ color: color }) => (
            <Ionicons name="home-sharp" color={color} size={25} />
          )
        }}
      />

      <Tab.Screen
        component={AllChatsScreen}
        name="Chat"
        options={{
          tabBarIcon: ({ color: color }) => (
            <Ionicons name="ios-chatbox" color={color} size={25} />
          )
        }}
      />

      <Tab.Screen
        component={CartScreen}
        name="Bag"
        options={{
          tabBarIcon: ({ color: color }) => (
            <MaterialIcons name="shopping-bag" color={color} size={25} />
          )
        }}
      />

      <Tab.Screen
        component={NotificationScreen}
        name="Notif"
        options={{
          tabBarIcon: ({ color: color }) => (
            <Ionicons name="ios-notifications" color={color} size={25} />
          )
        }}
      />

      <Tab.Screen
        component={MapScreen}
        name="Me"
        options={{
          tabBarIcon: ({ color: color }) => (
            <MaterialIcons name="account-circle" color={color} size={25} />
          )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNav;
