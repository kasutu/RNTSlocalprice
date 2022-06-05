import mapCoordsStore from '../../../model/mapCoordsStore/mapCoordsStore';
import MapView from 'react-native-maps';
import MarkerRenderer from './markerRenderer';
import React, { useState } from 'react';
import { LocationIcon } from '../icons/localprice.icons';
import { StyleSheet, Text, View } from 'react-native';

export function MapViewComponent() {
  const [show, setShow] = useState(false);

  return (
    <View style={styles.map}>
      <MapView
        onMarkerPress={() => setShow(false)}
        onMarkerDeselect={() => setShow(true)}
        onPanDrag={() => setShow(true)}
        onMapLoaded={() => setShow(true)}
        showsUserLocation={true}
        showsMyLocationButton={true}
        loadingEnabled={true}
        provider={'google'}
        style={styles.map}
        onRegionChangeComplete={(region) => {
          mapCoordsStore.data = region;
        }}
      >
        <MarkerRenderer />
      </MapView>
      <View style={styles.markerFixed}>
        {show ? LocationIcon : <Text>' '</Text>}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    flex: 1
  },
  markerFixed: {
    left: '50%',
    marginLeft: -20,
    marginTop: -38,
    position: 'absolute',
    top: '50%'
  },
  footer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    bottom: 0,
    position: 'absolute',
    width: '100%'
  },
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20
  }
});
