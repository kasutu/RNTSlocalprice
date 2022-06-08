import { View } from 'react-native';
import React, { useState } from 'react';
import { Center, FormControl, Input, Button, Modal } from 'native-base';
import { MapViewComponent } from '../view/general/map/mapViewComponent.map';

export default function MapModal() {
  return (
    <View>
      <MapViewComponent />
    </View>
  );
}
