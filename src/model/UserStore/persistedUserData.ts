import { makeAutoObservable, runInAction } from 'mobx';
import { getUser } from '../../api/firebase/authentications';
import { getData } from '../../api/mmkv';
import { UserDataType } from '../../types/types';

class PersistedUserData {
  public data: UserDataType = {
    role: 'not logged in',
    email: '',
    fullName: '',
    userId: '',
    contactNumber: '',
    brgy: '',
    town: '',
    city: '',
    zipCode: '',
    geoPointId: '',
    transactionIds: [],
    convoIds: []
  };
  public address: string = '';
  public loggedIn: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  public cacheData() {
    getData('user')
      .then((data: UserDataType) => {
        runInAction(() => {
          this.data = data;
          this.address = `${this.data.brgy}, ${this.data.town}, ${this.data.city}, ${this.data.zipCode}`;
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
