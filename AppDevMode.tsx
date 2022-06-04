import React, { useState } from 'react';
import type { ReactNode } from 'react';
import {
  Box,
  Button,
  Center,
  Input,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';
import { ScreensInProgress } from './src/controller/screensInProgress';
import AppTest from './test/App.test';
import Textrenedere from './test/textrenedere';
import geoStore from './src/model/geoQueryStore/geoQuery.store';
import { ReactNativeGeofire } from './src/api/geoquery/geoquery';
import { MapViewComponent } from './src/view/general/map/mapViewComponent.map';
import mapCoordsStore from './src/model/mapCoordsStore/mapCoordsStore';

const shopsGeoFire = new ReactNativeGeofire('shops');

export default function AppDevMode(): ReactNode {
  const [text, setText] = useState<string>('');

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <Center bg={'warning.400'} w={'full'} position={'absolute'}>
          <Text fontSize={'10px'} fontWeight={'bold'}>
            DEVELOPMENT MODE
          </Text>
        </Center>

        <MapViewComponent />

        <VStack justifyContent={'center'} space={5}>
          <Button
            // custom geofire implementation
            onPress={() =>
              shopsGeoFire.query(
                mapCoordsStore.data.latitude,
                mapCoordsStore.data.longitude,
                2
              )
            }
          >
            {'Search nearby (2Km)'}
          </Button>
          <Button
            // custom geofire implementation
            onPress={() => {
              setText('');
              shopsGeoFire.add(
                { name: text },
                mapCoordsStore.data.latitude,
                mapCoordsStore.data.longitude
              );
            }}
          >
            Add Location
          </Button>
          <Input value={text} onChangeText={(val) => setText(val)} />
        </VStack>

        <Textrenedere />

        {/* <AppTest /> */}
        {/* <ScreensInProgress /> */}
      </Box>
    </NativeBaseProvider>
  );
}
