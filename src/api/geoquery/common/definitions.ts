// make a definition for geo querying
// make common core logic and parsers for geoQuery
// render to mapview

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export type GeoPointRef = FirebaseFirestoreTypes.GeoPoint;

export interface GeoPointWithHash {
  geohash: string;
  lat: number;
  lng: number;
}

export interface ObjectWithGeoPoint {
  geopoint: GeoPointWithHash;
  [key: string]: any;
}
