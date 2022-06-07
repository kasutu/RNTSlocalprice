import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home/homeScreen.home';
import ProductScreen from '../screens/itemView/productScreen';
import { SafeAreaView, TextInput } from 'react-native';
import { InputColor } from '../general/colors/localprice.colors';

const Stack = createStackNavigator();

const HeaderStyle = () => {
    return (
    <SafeAreaView>
            <TextInput style={{padding: 10 ,margin: 10, backgroundColor: InputColor, borderRadius: 15}} placeholder="Search"/>
    </SafeAreaView>
    )
};
const HomeStack = () => {
    return (
        <Stack.Navigator screenOptions={{header: () => <HeaderStyle/>}}>
            <Stack.Screen component={HomeScreen} name='HomeTabs'/>
            <Stack.Screen component={ProductScreen} name='ProductDetails'/>
        </Stack.Navigator>
    );
};

export default HomeStack;