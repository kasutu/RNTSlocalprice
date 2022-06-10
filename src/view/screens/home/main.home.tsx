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
import { SearchBarHeader } from '../../general/header/headers';
import { FilterButtons } from './filterBtnsComponent';

export function MainHomeScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        {/* HEADER HERE */}
        <SearchBarHeader />

        {/* BODY AND CONTENT */}
        <VStack space={2} flex={1}>
          <FilterButtons />

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
      </Box>
    </NativeBaseProvider>
  );
}
