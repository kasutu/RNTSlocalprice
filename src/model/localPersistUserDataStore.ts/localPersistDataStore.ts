import { makeAutoObservable } from 'mobx';
import { getData } from '../../api/mmkv';
import { LocalUserData, UserPersistData } from '../common/userDataTypes';
import { getDocById } from '../common/utils';

export class UserPersistDataStore implements UserPersistData {
  public persist: LocalUserData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public fetch(uid: string): void {
    getData('user')
      .then((data) => {
        this.persist = data as LocalUserData;
      })
      .catch(() => {
        console.log('line 19 no user in local');
        getDocById('users', uid)
          .then((doc) => {
            return doc.data();
          })
          .then((data) => {
            this.persist = data as LocalUserData;
          })
          .catch(() => console.log('line 25 no user server'));
      });
  }
}

// make a store instance and export it
export const userPersistDataStore = new UserPersistDataStore();
