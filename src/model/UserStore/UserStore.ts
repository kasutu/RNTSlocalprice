import { makeAutoObservable } from 'mobx';
import { userLocation } from '../../api/geoquery/rnGeoFire';
import { storeData } from '../../api/mmkv';
import { UserDataType, UserRole } from '../../types/types';
import {
  documentAddHandler,
  documentGetCollectionHandler
} from '../common/utils';
import mapCoordsStore from '../mapCoordsStore/mapCoordsStore';

export class UserStore implements UserDataType {
  /**
   * atleast 1 property to hold data
   * you want to broadcast all over any screen
   */
  public role: UserRole = 'not logged in';
  public email: string = '';
  public fullName: string = '';
  public userId: string = '';
  public contactNumber: string = '';
  public brgy: string = '';
  public town: string = '';
  public city: string = '';
  public zipCode: string = '';
  public geoPointId: string = ''; // automated
  public transactionIds: string[] = [];
  public convoIds: string[] = [];

  constructor() {
    // let MobX observe this class and use this to any screen
    // important
    makeAutoObservable(this);
  }

  public addToServer() {
    userLocation.add(
      { name: this.fullName },
      mapCoordsStore.data.latitude,
      mapCoordsStore.data.longitude
    );

    documentAddHandler('users', this);

    storeData('user', this);
  }

  public clear() {
    this.role = 'not logged in';
    this.email = '';
    this.fullName = '';
    this.userId = '';
    this.contactNumber = '';
    this.brgy = '';
    this.town = '';
    this.city = '';
    this.zipCode = '';
    this.geoPointId = '';
    this.transactionIds = [];
    this.convoIds = [];
  }
}

// make a store instance and export it
// change name base on the name of the class above
const userStore = new UserStore();

/**
 * @exports userStore
 * import this to any screen and use a dot notation
 */
export default userStore;
