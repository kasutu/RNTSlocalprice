import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../../view/screens/home/homeScreen.home';
import ProductScreen from '../../view/screens/itemView/productScreen';
import { SafeAreaView, TextInput } from 'react-native';
import { InputColor } from '../../view/general/colors/localprice.colors';

const Stack = createStackNavigator();

interface HeaderStyleProps {
  searchInput: string;
  setSearchInput: () => void;
}

const HeaderStyle = ({ searchInput, setSearchInput }: HeaderStyleProps) => {
  return (
    <SafeAreaView>
      <TextInput
        style={{
          padding: 10,
          margin: 10,
          backgroundColor: InputColor,
          borderRadius: 15
        }}
        placeholder="Search"
        value={searchInput}
        onChangeText={setSearchInput}
      />
    </SafeAreaView>
  );
};
const HomeStack = () => {
  const [searchInput, setSearchInput] = useState('');
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => (
          <HeaderStyle
            searchInput={searchInput}
            setSearchInput={() => setSearchInput}
          />
        )
      }}
    >
      <Stack.Screen name="HomeTabs">
        {() => <HomeScreen searchInput={searchInput} />}
      </Stack.Screen>
      <Stack.Screen component={ProductScreen} name="ProductDetails" />
    </Stack.Navigator>
  );
};

export default HomeStack;
