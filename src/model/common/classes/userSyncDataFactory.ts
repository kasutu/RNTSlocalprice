import { storeData } from '../../../api/mmkv';
import { LocalUserData } from '../userDataTypes';
import { combineArrays, documentAddHandler, getDocById } from '../utils';
import { LocalUserDataFactory } from './userDataFactory';

/**
 * @uploader
 */
export class UserDataSync {
  private server: LocalUserData | null = null;
  private local: LocalUserData = {
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

  public push(newData: LocalUserDataFactory) {
    this.local = newData;

    getDocById('users', newData.id)
      .then((snap) => {
        this.server = snap.data() as LocalUserData;
      })
      .then(() => {
        let serverTransactionIds = this.server?.transactionIds;
        let serverConvoIds = this.server?.convoIds;
        let serverItemIds = this.server?.itemIds;

        let newTransactionIds = newData.transactionIds;
        let newConvoIds = newData.convoIds;
        let newItemIds = newData.itemIds;

        if (serverTransactionIds && serverConvoIds && serverItemIds) {
          this.local.transactionIds = combineArrays(
            serverTransactionIds,
            newTransactionIds
          );
          this.local.convoIds = combineArrays(serverConvoIds, newConvoIds);
          this.local.itemIds = combineArrays(serverItemIds, newItemIds);
        } else {
          this.local.transactionIds = newTransactionIds;
          this.local.transactionIds = newConvoIds;
          this.local.transactionIds = newItemIds;
        }
      })
      .then(() => this.sync()) // auto sync
      .catch((err) => console.log(err));
  }

  /**
   * add to server and
   * save locally
   */
  public sync() {
    let userData = new LocalUserDataFactory(this.local);
    documentAddHandler('users', userData);
    storeData('user', userData);
  }
}

export const userDataSync = new UserDataSync();
