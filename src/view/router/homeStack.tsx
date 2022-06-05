import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/homeScreen.home';
import ProductScreen from '../screens/itemView/productScreen';

const Stack = createStackNavigator();

const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen component={HomeScreen} name='HomeTabs'/>
            <Stack.Screen component={ProductScreen} name='ProductDetails'/>
        </Stack.Navigator>
    );
};

export default HomeStack;