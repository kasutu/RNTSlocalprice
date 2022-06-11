import React, { useState } from 'react';
import { Box, NativeBaseProvider, ScrollView, VStack } from 'native-base';
import { FilterButtons } from './filterBtnsComponent';
import { ItemCardsRenderer } from '../../render/ItemCards.renderer';
import { SearchBarHeader } from '../../general/header/headers';
import { observer } from 'mobx-react-lite';

export function MainHome() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        {/* HEADER HERE */}
        <SearchBarHeader />

        {/* BODY AND CONTENT */}
        <VStack space={2} flex={1}>
          <FilterButtons cb={(e) => console.log(e)} />

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

export const MainHomeScreen = observer(MainHome);

// still broken tho