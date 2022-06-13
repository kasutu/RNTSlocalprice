import { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { makeAutoObservable, runInAction } from 'mobx';
import { getData, storeData } from '../../api/mmkv';
import { UserDataType, UserRole } from '../../types/types';
import { getDocById } from '../common/utils';
import userStore from './UserStore';

class PersistedUserData {
  public data: UserDataType = {
    role: 'not logged in',
    email: '',
    fullName: '',
    id: '',
    contactNumber: '',
    brgy: '',
    town: '',
    city: '',
    zipCode: '',
    geoPointId: '',
    transactionIds: [],
    convoIds: []
  };
  public loggedIn: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  get address() {
    return `${this.data.brgy}, ${this.data.town}, ${this.data.city}, ${this.data.zipCode}`;
  }

  public cacheData() {
    runInAction(() => {
      this.data.role = userStore.role;
      this.data.email = userStore.email;
      this.data.fullName = userStore.fullName;
      this.data.id = userStore.id;
      this.data.contactNumber = userStore.contactNumber;
      this.data.brgy = userStore.brgy;
      this.data.town = userStore.town;
      this.data.city = userStore.city;
      this.data.zipCode = userStore.zipCode;
      this.data.geoPointId = userStore.geoPointId;
      this.data.transactionIds = userStore.transactionIds;
      this.data.convoIds = userStore.convoIds;

      console.log(this.data);
    });

    getData('loginStatus')
      .then((bool) => {
        runInAction(() => {
          this.loggedIn = bool;
        });
      })
      .catch((err) => console.log(err));
  }
}

// make a store instance and export it
// change name base on the name of the class above
const persistedUserData = new PersistedUserData();

/**
 * @exports persistedUserData
 * import this to any screen and use a dot notation
 */
export default persistedUserData;

class CurrentUser {
  constructor(
    public role: UserRole,
    public email: string,
    public fullName: string,
    public id: string,
    public contactNumber: string,
    public brgy: string,
    public town: string,
    public city: string,
    public zipCode: string | number,
    public geoPointId: string,
    public transactionIds: string[],
    public convoIds: string[]
  ) {}

  get address() {
    return `${this.brgy}, ${this.town}, ${this.city}, ${this.zipCode}`;
  }
}
