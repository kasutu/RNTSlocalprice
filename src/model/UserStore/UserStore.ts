import { makeAutoObservable } from 'mobx';
import { ReactNativeGeoPoint } from '../../api/geoquery/common/util';
import { UserDataType, UserRole } from '../../types/types';
import { documentAddHandler } from '../common/utils';
import geopointStore from '../geopointStore/geopointStore';
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
  public zipCode: string | number = '';
  public geoPointId: string = '';
  public transactionIds: string[] = [];
  public convoIds: string[] = [];

  constructor() {
    // let MobX observe this class and use this to any screen
    // important
    makeAutoObservable(this);
  }

  public addToServer() {
    documentAddHandler('user', this);
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

  public addToDatabase() {
    documentAddHandler('users', this);
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
