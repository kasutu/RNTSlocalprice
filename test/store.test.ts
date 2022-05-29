// MobX implementation

import { makeAutoObservable } from 'mobx';

// make this generic soon
// 'export' is added for test purposes
export class Store {
  public objects: string[] = [];
  public newObject: string = '';

  constructor() {
    // let MobX observe this class and use this to any screen
    makeAutoObservable(this);
  }

  addNewObject(): void {
    // "...this.objects" - takes all the current list of objects in the arr
    // using the spreader("...") notation and appends "this.newObject" to the arr
    this.objects = [...this.objects, this.newObject];
    this.newObject = '';
  }
}

// make a store instance and export it
const storeInstanceTest = new Store();
export default storeInstanceTest;
