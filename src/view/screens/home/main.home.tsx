import React, { useEffect, useState } from 'react';
import { Box, NativeBaseProvider, ScrollView, VStack } from 'native-base';
import { FilterButtons } from './filterBtnsComponent';
import { ItemCardsRenderer } from '../../render/ItemCards.renderer';
import { SearchBarHeader } from '../../general/header/headers';
import { observer } from 'mobx-react-lite';
import MapNearbyScreen from '../mapScreen/mapNearbyScreen';

export function MainHome() {
  const [displayMap, setDisplayMap] = useState<string>('all');

  function RenderMap({ event }: { event: string }) {
    if (event !== 'map') {
      return (
        <>
          {/* BODY AND CONTENT */}
          <VStack space={2} flex={1}>
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
                {/* returns an item */}
                <ItemCardsRenderer />
              </Box>
            </ScrollView>
          </VStack>
        </>
      );
    } else {
      return <MapNearbyScreen />;
    }
  }

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        {/* HEADER HERE */}
        <SearchBarHeader />
        <FilterButtons
          cb={(event) => {
            console.log(event);
            setDisplayMap(event);
          }}
        />
        <RenderMap event={displayMap} />
      </Box>
    </NativeBaseProvider>
  );
}

export const MainHomeScreen = observer(MainHome);
