import React from 'react';
import { Box, NativeBaseProvider, ScrollView, VStack } from 'native-base';
import { FilterButtons } from './filterBtnsComponent';
import { ItemCardsRenderer } from '../../render/ItemCards.renderer';
import { SearchBarHeader } from '../../general/header/headers';

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
              <ItemCardsRenderer />
            </Box>
          </ScrollView>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
