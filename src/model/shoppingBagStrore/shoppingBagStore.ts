// MobX implementation

import { makeAutoObservable, runInAction } from 'mobx';
import { ShoppingBagItem } from '../common/classes/item';

// make this generic soon
// 'export' is added for test purposes
export class ShoppingBagStore {
  /**
   * atleast 1 property to hold data
   * you want to broadcast all over any screen
   */
  public id: string = ''; // set id before upload
  public data: ShoppingBagItem[] = [];
  public selectedItems: ShoppingBagItem[] = [];
  public ShippingFee: number = 120;
  public Subtotal: number = 0;
  public Total: number = 0;

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

  public compute() {
    this.ShippingFee = 120;
    this.Subtotal = 0;
    this.Total = 0;

    this.selectedItems.forEach(
      (Item) => (this.Subtotal += Item.price * Item.qty)
    );

    if (this.selectedItems.length > 0) {
      this.Total = this.Subtotal + this.ShippingFee;
    }
  }
}

// make a store instance and export it
// change name base on the name of the class above
const shoppingBagStore = new ShoppingBagStore();

/**
 * @exports shoppingBagStore
 * import this to any screen and use a dot notation
 * geoStore.dacs // exposes the docs contents
 */
export default shoppingBagStore;
