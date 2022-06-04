import React from 'react';
import type { ReactNode } from 'react';
import {
  Box,
  Button,
  Center,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';
import { ScreensInProgress } from './src/controller/screensInProgress';
import AppTest from './test/App.test';
import Textrenedere from './test/textrenedere';
import geoStore from './src/model/geoQueryStore/geoQuery.store';
import { ReactNativeGeofire } from './src/api/geoquery/geoquery';

const shopsGeoFire = new ReactNativeGeofire('shops');

export default function AppDevMode(): ReactNode {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <Center bg={'warning.400'} w={'full'} position={'absolute'}>
          <Text fontSize={'10px'} fontWeight={'bold'}>
            DEVELOPMENT MODE
          </Text>
        </Center>

        <Center flex={1}>
          <Button
            // custom geofire implementation
            onPress={() => shopsGeoFire.findWithin(10.895919, 122.705114, 2)}
          >
            runGeoQuery
          </Button>
        </Center>

        <Textrenedere />

        {/* <AppTest /> */}
        {/* <ScreensInProgress /> */}
      </Box>
    </NativeBaseProvider>
  );
}
