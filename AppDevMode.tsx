import React from 'react';
import type { ReactNode } from 'react';
import { Box, Button, Center, NativeBaseProvider, Text } from 'native-base';
import { ScreensInProgress } from './src/controller/screensInProgress';
import AppTest from './test/App.test';
import { runGeoQuery } from './src/api/geoquery/geoquery';

export default function AppDevMode(): ReactNode {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <Center bg={'warning.400'} w={'full'} position={'absolute'}>
          <Text fontSize={'10px'} fontWeight={'bold'}>
            DEVELOPMENT MODE
          </Text>
        </Center>

        <Center>
          <Button onPress={() => runGeoQuery()}>runGeoQuery</Button>
        </Center>

        {/* <AppTest /> */}
        {/* <ScreensInProgress /> */}
      </Box>
    </NativeBaseProvider>
  );
}
