import { makeAutoObservable } from 'mobx';
import { getData } from '../../api/mmkv';
import { triggerAlert } from '../../view/screens/logIn/logInView.logIn';
import { userDataSync } from '../common/classes/userSyncDataFactory';
import { LocalUserData } from '../common/userDataTypes';
import { userPersistDataStore } from '../localPersistUserDataStore.ts/localPersistDataStore';

export class LocalUserDataStateStore {
  public state: LocalUserData = {
    role: 'not verified',
    id: '',
    fullName: '',
    email: '',
    contactNumber: '',
    brgy: '',
    town: '',
    city: '',
    zipCode: '',
    address: '',
    geopointId: '',
    transactionIds: [],
    convoIds: [],
    itemIds: [],
    isLoggedIn: false
  };

  public view: LocalUserData = {
    role: 'not verified',
    id: '',
    fullName: '',
    email: '',
    contactNumber: '',
    brgy: '',
    town: '',
    city: '',
    zipCode: '',
    address: '',
    geopointId: '',
    transactionIds: [],
    convoIds: [],
    itemIds: [],
    isLoggedIn: false
  };

  constructor() {
    if (userPersistDataStore.persist !== null) {
      this.state = userPersistDataStore.persist;
      this.view = this.state;
    }

    makeAutoObservable(this);
  }

  public sync() {
    if (userPersistDataStore.persist !== null) {
      userDataSync.push(this.state);
      this.view = this.state;
    } else {
      triggerAlert('Ooopss!', 'Please login first or ill be sad :<', [
        { text: `Ok, just don't be sad` }
      ]);
    }
  }
}

// make a store instance and export it
export const userState = new LocalUserDataStateStore();
