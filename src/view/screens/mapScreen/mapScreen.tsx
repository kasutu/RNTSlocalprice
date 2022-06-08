import React from 'react';
import { MapViewComponent } from '../../general/map/mapViewComponent.map';
import { StyleSheet, Text, View } from 'react-native';
import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import { Center } from 'native-base';
import { ReactNativeGeofire } from '../../../api/geoquery/geoquery';
import mapCoordsStore from '../../../model/mapCoordsStore/mapCoordsStore';
import userStore from '../../../model/UserStore/UserStore';

const shopsGeoFire = new ReactNativeGeofire('shops');

export default function MapScreen() {
  return (
    <View style={styles.body}>
      <MapViewComponent />
      <View style={styles.buttonWrapper}>
        <Center width={'full'}>
          <HollowAndSolidButton
            onPressSaveHandler={() => {
              // custom geofire implementation
              // geo point should go to the user

              shopsGeoFire.add(
                { name: userStore.fullName },
                mapCoordsStore.data.latitude,
                mapCoordsStore.data.longitude
              );
            }}

            // onPressCancelHandler={() => /* navigate back */ }
          />
        </Center>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    flex: 1
  },
  buttonWrapper: {
    width: '100%',
    position: 'absolute',
    bottom: 20
  }
});
