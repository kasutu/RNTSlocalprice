import { Box, Icon, NativeBaseProvider } from 'native-base';
import React from 'react';
import MapView from 'react-native-maps';
import { LocationIcon } from '../icons/localprice.icons';

const initRegion = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421
};

export function MapViewComponent() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} justifyContent={'center'}>
        <Box flex={1}>
          <MapView
            loadingEnabled={true}
            provider={'google'}
            style={{ flex: 1 }}
            onRegionChangeComplete={(region) => console.log(region)}
          />
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}
