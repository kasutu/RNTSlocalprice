// MobX implementation

import { makeAutoObservable } from 'mobx';
import { Transaction } from '../common/classes/transaction';

export class TransactionStore {
  /**
   * atleast 1 property to hold data
   * you want to broadcast all over any screen
   */
  public data: Transaction[] = [];

  constructor() {
    // let MobX observe this class and use this to any screen
    // important
    makeAutoObservable(this);
  }

  // add methods here if needed

  /**
   * @function empty() empties the array first before reendering
   */
  public empty(): void {
    this.data = [];
  }
}

// make a store instance and export it
// change name base on the name of the class above
const transactionStore = new TransactionStore();

/**
 * @exports transactionStore
 * import this to any screen and use a dot notation
 * transactionStore.data // exposes the docs contents
 */
export default transactionStore;
