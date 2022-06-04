// make a definition for geo querying
// make common core logic and parsers for geoQuery
// render to mapview

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export type GeoPointRef = FirebaseFirestoreTypes.GeoPoint;

export type firestoreDocumentData = FirebaseFirestoreTypes.DocumentData;

export type CollectionRef =
  FirebaseFirestoreTypes.CollectionReference<FirebaseFirestoreTypes.DocumentData>;

export interface ObjectBasicInfo {
  id?: string;
  name?: string;
}
export interface GeoPointWithHash {
  geohash: string;
  lat: number;
  lng: number;
}

export interface ObjectWithGeoPoint extends ObjectBasicInfo {
  geopoint: GeoPointWithHash;
  [key: string]: any;
}

export type GeoLocationsRef = 'shops';
