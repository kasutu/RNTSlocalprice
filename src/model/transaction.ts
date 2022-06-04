import { transaction } from 'mobx';
import { Order } from './order';
export abstract class Transaction {
  public id: string;
  public buyerId: string;
  public sellerId: string;

  constructor(id: string, buyerId: string, sellerId: string) {
    this.id = id;
    this.buyerId = buyerId;
    this.sellerId = sellerId;
  }
}
// logic
// make an array that holds the item and id
let items = new Array();
items = [''];
