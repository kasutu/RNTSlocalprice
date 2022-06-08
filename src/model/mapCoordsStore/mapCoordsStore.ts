// MobX implementation

import { makeAutoObservable } from 'mobx';
import { Region } from 'react-native-maps';

// make this generic soon
// 'export' is added for test purposes
export class MapCoordsStore {
  public recentHash: string = '';
  public data: Region = {
    latitude: 0,
    latitudeDelta: 0,
    longitude: 0,
    longitudeDelta: 0
  };

  constructor() {
    // let MobX observe this class and use this to any screen
    makeAutoObservable(this);
  }
}

// make a store instance and export it
const mapCoordsStore = new MapCoordsStore();
export default mapCoordsStore;
