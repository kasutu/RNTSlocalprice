import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import HomeItems from './homeItems.home';
import products from './data/products';
import { HomeSearch } from './searchButton.home';
import { Center, HStack, ScrollView } from 'native-base';
import FilterButton from './filterButton';
import HomeIconButtonsFooter from '../../general/footer/home.iconButtons.footer';

const HomeScreen = (navigation: any) => {
  return (
    <>
      <HomeSearch />
      <Center width={'full'} paddingY={'2'}>
        <HStack space={3}>
          {/* displays everything but renders up to 6 items only and loads another when scrolled */}
          <FilterButton value="All" />

          {/* filters everything that you posted */}
          <FilterButton value="My posts" />

          {/* filters item near your geolocation */}
          <FilterButton value="Near you" />

          {/* filters by a price range preset */}
          <FilterButton value="Filter" />
        </HStack>
      </Center>
      
      <ScrollView>
      <View style={styles.page}>
        <FlatList
          data={products}
          renderItem={({ item }) => <HomeItems item={item} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
      </ScrollView>
      <HomeIconButtonsFooter navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 2
  }
});

export default HomeScreen;
