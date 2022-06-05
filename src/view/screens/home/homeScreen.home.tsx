import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import HomeItems from './homeItems.home';
import products from './data/products';
import { HomeSearch } from './searchButton.home';
import { Box, Center, HStack, ScrollView } from 'native-base';
import FilterButton from './filterButton';
import HomeIconButtonsFooter from '../../general/footer/home.iconButtons.footer';

const HomeScreen = () => {
  return (
    <>
    <Box marginTop={'2'}><HomeSearch /></Box>
      <Center width={'full'} paddingY={'2'}>
        <HStack space={3}>
          <FilterButton value="All" />

          <FilterButton value="My posts" />

          <FilterButton value="Near you" />

          <FilterButton value="Filter" />
        </HStack>
      </Center>
      
      <View style={styles.page}>
        <FlatList
          data={products}
          renderItem={({ item }) => <HomeItems item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 2
  }
});

export default HomeScreen;
