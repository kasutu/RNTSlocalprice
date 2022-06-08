import { geohashForLocation } from 'geofire-common';

export class ReactNativeGeoPoint {
  public geohash: string;
  public lat: number;
  public lng: number;

  constructor(lat: number, lng: number) {
    this.geohash = geohashForLocation([lat, lng]);
    this.lat = lat;
    this.lng = lng;
  }
}
