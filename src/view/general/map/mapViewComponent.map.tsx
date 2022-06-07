import mapCoordsStore from '../../../model/mapCoordsStore/mapCoordsStore';
import MapView from 'react-native-maps';
import MarkerRenderer from './markerRenderer';
import React, { useEffect, useState } from 'react';
import { LocationIcon } from '../icons/localprice.icons';
import { StyleSheet, Text, View } from 'react-native';
import Geolocation from '@react-native-community/geolocation';

export function MapViewComponent() {
  const [show, setShow] = useState(false);
  const initialRegion = {
    latitude: 10.885762273697036,
    latitudeDelta: 0.02162698862344392,
    longitude: 122.6996417529881,
    longitudeDelta: 0.011763162910938263
  };

  useEffect(() => {
    Geolocation.getCurrentPosition((info) => console.log(info));
  }, []);

  return (
    <View style={styles.map}>
      <MapView
        initialRegion={initialRegion}
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
          console.log(region);
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
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20
  }
});
