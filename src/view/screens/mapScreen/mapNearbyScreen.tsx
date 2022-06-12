import React, { useEffect } from 'react';
import { MapViewComponent } from '../../general/map/mapViewComponent.map';
import { StyleSheet, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import { ReactNativeGeofire } from '../../../api/geoquery/geoquery';

// maps
import mapCoordsStore from '../../../model/mapCoordsStore/mapCoordsStore';
const shopsGeoFire = new ReactNativeGeofire('shops');

export default function MapNearbyComponent() {
  useEffect(() => {
    shopsGeoFire.query(
      mapCoordsStore.data.latitude,
      mapCoordsStore.data.longitude,
      30
    );
  });

  return (
    <View style={styles.body}>
      <MapViewComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  }
});

export const MapNearbyScreen = observer(MapNearbyComponent);
