import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  AllChatsScreen,
  MainHomeScreen,
  NotificationScreen,
  ProfileScreen,
  ShoppingBagScreen
} from '../../view/screens/index.screens';
import Ionicons from 'react-native-vector-icons/Ionicons.js';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { Colors } from '../../view/general/colors/localprice.colors';
import { HomeStack } from './homeStack';
import { CheckoutStack } from './checkoutStack';
import { ProfileStack } from './profileStack';

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: Colors.Inactive,
        tabBarActiveTintColor: Colors.TrademarkViolet
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
        component={CheckoutStack}
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
        component={ProfileStack}
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
