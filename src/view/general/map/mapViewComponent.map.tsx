import { Box, NativeBaseProvider } from 'native-base';
import React from 'react';
import MapView from 'react-native-maps';
import mapCoordsStore from '../../../model/mapCoordsStore/mapCoordsStore';

export function MapViewComponent() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} justifyContent={'center'}>
        <Box flex={1}>
          <MapView
            loadingEnabled={true}
            provider={'google'}
            style={{ flex: 1 }}
            onRegionChangeComplete={(region) => {
              mapCoordsStore.data = region;
            }}
          />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
