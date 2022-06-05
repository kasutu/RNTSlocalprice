import React from "react";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { AllChatsScreen, NotificationScreen, ProfileScreen } from "../screens/index.screens";
import HomeScreen from "../screens/home/homeScreen.home";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomeStack from "./homeStack";

const Tab = createBottomTabNavigator();

const BottomTabNav = () => {
    return (
        <Tab.Navigator screenOptions={{headerShown: false, tabBarInactiveTintColor: '#363636', tabBarActiveTintColor: '#9e6dde'}}>
            <Tab.Screen 
            component={HomeStack} 
            name='Home' 
            options={{
                tabBarIcon: ({color: color}) => (
                    <Ionicons name='home-sharp' color={color} size={25} />
                ),
            }}
            />

            <Tab.Screen 
            component={AllChatsScreen} 
            name='Chat' 
            options={{
                tabBarIcon: ({color: color}) => (
                    <Ionicons name='ios-chatbox' color={color} size={25} />
                ),
            }}
            />

            <Tab.Screen 
            component={HomeScreen} 
            name='Bag' 
            options={{
                tabBarIcon: ({color: color}) => (
                    <MaterialIcons name='shopping-bag' color={color} size={25} />
                ),
            }}
            />

            <Tab.Screen 
            component={NotificationScreen} 
            name='Notif' 
            options={{
                tabBarIcon: ({color: color}) => (
                    <Ionicons name='ios-notifications' color={color} size={25} />
                ),
            }}
            />

            <Tab.Screen 
            component={HomeScreen} 
            name='Me' 
            options={{
                tabBarIcon: ({color: color}) => (
                    <MaterialIcons name='account-circle' color={color} size={25} />
                ),
            }}
            />
        </Tab.Navigator>
    );
};

export default BottomTabNav;