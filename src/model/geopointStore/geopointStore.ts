// MobX implementation

import { makeAutoObservable } from 'mobx';
import { ReactNativeGeoPoint } from '../../api/geoquery/common/util';

// make this generic soon
// 'export' is added for test purposes
export class GeopointStore {
  public recentGeopoint: ReactNativeGeoPoint = {
    geohash: '',
    lat: 0,
    lng: 0
  };

  constructor() {
    // let MobX observe this class and use this to any screen
    makeAutoObservable(this);
  }
}

// make a store instance and export it
const geopointStore = new GeopointStore();
export default geopointStore;
