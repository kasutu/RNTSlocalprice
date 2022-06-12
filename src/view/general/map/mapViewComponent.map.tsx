import mapCoordsStore from '../../../model/mapCoordsStore/mapCoordsStore';
import MapView, { Region } from 'react-native-maps';
import MarkerRenderer from './markerRenderer';
import React, { useEffect, useState } from 'react';
import { LocationIcon } from '../icons/localprice.icons';
import { StyleSheet, Text, View } from 'react-native';
import { observer } from 'mobx-react-lite';
import Geolocation from '@react-native-community/geolocation';

const config = {
  enableHighAccuracy: true,
  timeout: 2000,
  maximumAge: 3600000
};

export function MapViewMain() {
  const [show, setShow] = useState(false);

  const [position, setPosition] = useState({
    latitude: 10.71294152149179,
    longitude: 122.56281288340688,
    latitudeDelta: 0.2386657037109785,
    longitudeDelta: 0.15681501477956772
  });

  useEffect(() => {
    Geolocation.getCurrentPosition((pos) => {
      try {
        const crd = pos.coords;

        setPosition({
          latitude: crd.latitude,
          longitude: crd.longitude,
          latitudeDelta: 0.0421,
          longitudeDelta: 0.0421
        });
      } catch (error) {
        console.log('ERROR', error), config;
      }
    });
  }, []);

  return (
    <View style={styles.map}>
      <MapView
        initialRegion={position}
        followsUserLocation={true}
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
  region: {
    color: '#fff',
    lineHeight: 20,
    margin: 20
  }
});

export const MapViewComponent = observer(MapViewMain);
