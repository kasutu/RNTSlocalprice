// MobX implementation

import { makeAutoObservable } from 'mobx';

// make this generic soon
// 'export' is added for test purposes
export class GeoStore<T> {
  public docs: T[] = [];

  constructor() {
    // let MobX observe this class and use this to any screen
    makeAutoObservable(this);
  }

  /**
   * @function empty() empties the array first before reendering
   */
  public empty(): void {
    this.docs = [];
  }
}

// make a store instance and export it
const geoStore = new GeoStore();
export default geoStore;
