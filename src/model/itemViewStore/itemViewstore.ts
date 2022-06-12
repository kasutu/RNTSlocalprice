// MobX implementation

import { makeAutoObservable } from 'mobx';
import { Item } from '../../view/render/ItemCards.renderer';
import { ShoppingBagItem } from '../common/classes/item';

import shoppingBagStore from '../shoppingBagStrore/shoppingBagStore';

// make this generic soon
// 'export' is added for test purposes
export class CurrentItemStore {
  private currentItem: Item = {
    uri: '',
    name: '',
    price: 0,
    location: '',
    id: ''
  };
  private counter: number = 0;
  private isAddedToCart: boolean = false;

  constructor() {
    // let MobX observe this class and use this to any screen
    makeAutoObservable(this);
  }

  public clear() {
    this.currentItem = {
      uri: '',
      name: '',
      price: 0,
      location: '',
      id: ''
    };

    this.counter = 0;
    this.isAddedToCart = false;
  }

  public get item() {
    return this.currentItem;
  }

  public set item(newItem: Item) {
    this.currentItem = newItem;
  }

  private shoppingBagFactory() {
    const { id, location, name, price, uri } = this.currentItem;

    return new ShoppingBagItem(
      id,
      uri,
      name,
      price,
      location,
      1,
      'Coming Soon'
    );
  }

  public addToCart() {
    const item = this.shoppingBagFactory();
    console.log(this.counter);

    if (this.counter === 0) {
      shoppingBagStore.data.push(item);
      this.isAddedToCart = true;
    }

    this.counter++;
  }

  public buyNow() {
    const item = this.shoppingBagFactory();
    console.log(this.counter);

    if (this.counter === 0) {
      shoppingBagStore.selectedItems.push(item);
      shoppingBagStore.compute();
      this.isAddedToCart = true;
    }

    this.counter++;
  }

  get isAdded() {
    return this.isAddedToCart;
  }
}

// make a store instance and export it
const currentItemStore = new CurrentItemStore();
export default currentItemStore;
