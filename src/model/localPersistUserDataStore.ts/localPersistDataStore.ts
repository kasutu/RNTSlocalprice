import { makeAutoObservable, runInAction } from 'mobx';
import { getData, storeData } from '../../api/mmkv';
import { LocalUserDataFactory } from '../common/classes/userDataFactory';
import { LocalUserData, UserPersistData } from '../common/userDataTypes';
import { documentAddHandler, getDocById } from '../common/utils';
import { userState } from '../localUserDataStore/localUserDataStore';

export class UserPersistDataStore implements UserPersistData {
  public persist: LocalUserData | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  public fetch(uid?: string): void {
    getData('user')
      .then((data) => {
        runInAction(() => {
          this.persist = data as LocalUserData;

          if (!data && uid) {
            let userData = new LocalUserDataFactory(userState.state);
            userData.id = uid;
            storeData('user', userData);
            documentAddHandler('users', userData);
            this.fetch();
          }
        });
      })
      .catch(() => {
        console.log('line 19 no user in local');
        if (uid) {
          getDocById('users', uid)
            .then((doc) => {
              return doc.data();
            })
            .then((data) => {
              runInAction(() => {
                this.persist = data as LocalUserData;
              });
            })
            .catch(() => console.log('line 25 no user server'));
        }
      });
  }
}

// make a store instance and export it
export const userPersistDataStore = new UserPersistDataStore();
