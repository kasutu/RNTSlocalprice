import { makeAutoObservable, runInAction } from 'mobx';
import { userLocation } from '../../api/geoquery/rnGeoFire';
import { getData, storeData } from '../../api/mmkv';
import { UserDataType, UserRole } from '../../types/types';
import { documentAddHandler, getDocById } from '../common/utils';
import mapCoordsStore from '../mapCoordsStore/mapCoordsStore';
import persistedUserData from './persistedUserData';
import { UserBuilder } from './userFactory';

export class UserStore implements UserDataType {
  /**
   * atleast 1 property to hold data
   * you want to broadcast all over any screen
   */
  public role: UserRole = 'not logged in';
  public email: string = '';
  public fullName: string = '';
  public id: string = '';
  public contactNumber: string = '';
  public brgy: string = '';
  public town: string = '';
  public city: string = '';
  public zipCode: string | number = '';
  public geoPointId: string = ''; // automated
  public transactionIds: string[] = [];
  public convoIds: string[] = [];
  public itemIds: string[] = [];

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
    this.id = '';
    this.contactNumber = '';
    this.brgy = '';
    this.town = '';
    this.city = '';
    this.zipCode = '';
    this.geoPointId = '';
    this.transactionIds = [];
    this.convoIds = [];
  }

  public cacheData() {
    // gets all the data persisted on the user phone memory
    getData('loginData')
      .then((data: UserDataType) => {
        runInAction(() => {
          this.role = data.role;
          this.email = data.email;
          this.fullName = data.fullName;
          this.id = data.id;
          this.contactNumber = data.contactNumber;
          this.brgy = data.brgy;
          this.town = data.town;
          this.city = data.city;
          this.zipCode = data.zipCode;
          this.geoPointId = data.geoPointId;
          this.transactionIds = data.transactionIds;
          this.convoIds = data.convoIds;
        });
      })
      .catch(() => this.pullFromServer(this.id));
  }

  public pullFromServer(id: string) {
    getDocById('users', id).then((data) => {
      let result = data.data() as UserBuilder;
      runInAction(() => {
        this.role = result.role;
        this.email = result.email;
        this.fullName = result.fullName;
        this.id = result.id;
        this.contactNumber = result.contactNumber;
        this.brgy = result.brgy;
        this.town = result.town;
        this.city = result.city;
        this.zipCode = result.zipCode;
        this.geoPointId = result.geoPointId;
        this.transactionIds = result.transactionIds;
        this.convoIds = result.convoIds;
      });
    });
  }

  get address() {
    return `${this.brgy}, ${this.town}, ${this.city}, ${this.zipCode}`;
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
