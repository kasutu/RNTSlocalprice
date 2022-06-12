import React, { useEffect, useState } from 'react';
import { Box, NativeBaseProvider, ScrollView, VStack } from 'native-base';
import { FilterButtons } from './filterBtnsComponent';
import { Item, ItemCardsRenderer } from '../../render/ItemCards.renderer';
import { SearchBarHeader } from '../../general/header/headers';
import { observer } from 'mobx-react-lite';
import MapNearbyScreen from '../mapScreen/mapNearbyScreen';
import { uuid } from '../../../api/uuid/index.uuid';

const uri = 'https://etech.com.pk/wp-content/uploads/2020/07/ROG.jpg';
const name = 'ROG nga baklon ni dave';
const price = 6500;
const loc = 'iloilo';

const items: Item[] = [];

for (let i = 0; i < 10; i++) {
  items.push(new Item(uri, name, price, loc, uuid.v4()));
}

export function MainHome() {
  const [displayMap, setDisplayMap] = useState<string>('all');

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
              <ItemCardsRenderer items={items} />
            </Box>
          </ScrollView>
        </VStack>
      </>
    );
  } else {
    return <MapNearbyScreen />;
  }
}
