import { makeAutoObservable } from 'mobx';
import { UserDataType } from '../../types/types';

export class UserStore {
  /**
   * atleast 1 property to hold data
   * you want to broadcast all over any screen
   */
  public data: UserDataType = {
    role: 'seller',
    email: '',
    fullName: '',
    userId: '',
    contactNumber: '',
    address: '',
    geohash: '',
    transactionIds: [],
    convoIds: []
  };

  constructor() {
    // let MobX observe this class and use this to any screen
    // important
    makeAutoObservable(this);
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
