import { observer } from 'mobx-react-lite';
import React from 'react';
import { LatLng, Marker } from 'react-native-maps';
import { uuid } from '../../../api/uuid/index.uuid';
import geoStore from '../../../model/geoQueryStore/geoQuery.store';

export function MarkerRenderer() {
  return (
    <>
      {geoStore.geopoints.map((point) => {
        let latlng: LatLng = {
          latitude: point.geopoint.lat,
          longitude: point.geopoint.lng
        };

        return (
          <Marker key={uuid.v1()} title={point.name} coordinate={latlng} />
        );
      })}
    </>
  );
}

export default observer(MarkerRenderer);
