import {
  Box,
  Center,
  HStack,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  VStack
} from 'native-base';
import React from 'react';
import HomeIconButtonsFooter from '../../general/footer/home.iconButtons.footer';
import { SearchHeader } from '../../general/header/headers';
import FilterButton from './filterButton';

export function MainHomeScreen({ navigation }) {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        {/* HEADER HERE */}
        <SearchHeader />

        {/* BODY AND CONTENT */}
        <VStack space={2} flex={1}>
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

          <ScrollView
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
          >
            {/* ITEM LIST CONTAINER */}
            <Box
              // container for grid effect
              flexDirection={'row'}
              flexWrap={'wrap'}
              justifyContent={'space-around'}
            >
              {/* make a linked list loop that returns an item */}
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
              <Box padding={2} width={'50%'} height={'250'}>
                <Pressable
                  bg={'dark.500'}
                  width={'full'}
                  height={'full'}
                  onPress={() => console.log('item pressed')}
                >
                  <Box>item container</Box>
                </Pressable>
              </Box>
            </Box>
          </ScrollView>
        </VStack>
        <Box width={'full'} height={'80px'}>
          <HomeIconButtonsFooter navigation={navigation} />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
