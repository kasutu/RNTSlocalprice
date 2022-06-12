import React from 'react';
import { MapViewComponent } from '../../general/map/mapViewComponent.map';
import { StyleSheet, Text, View } from 'react-native';
import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import { Center } from 'native-base';
import { ReactNativeGeofire } from '../../../api/geoquery/geoquery';
import mapCoordsStore from '../../../model/mapCoordsStore/mapCoordsStore';
import userStore from '../../../model/UserStore/UserStore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types/navigationProps';

const shopsGeoFire = new ReactNativeGeofire('shops');

export default function MapScreen() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

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
            onPressCancelHandler={() => stack.goBack()}
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
