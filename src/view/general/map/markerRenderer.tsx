import { observer } from 'mobx-react-lite';
import React from 'react';
import { LatLng, Marker } from 'react-native-maps';
import { uuid } from '../../../api/uuid/index.uuid';
import geoStore from '../../../model/geoQueryStore/geoQuery.store';

export function MarkerRenderer() {
  return (
    <>
      {geoStore.docs.map((doc) => {
        let latlng: LatLng = {
          latitude: doc.geopoint.lat,
          longitude: doc.geopoint.lng
        };

        return <Marker key={uuid.v1()} title={doc.name} coordinate={latlng} />;
      })}
    </>
  );
}

export default observer(MarkerRenderer);
