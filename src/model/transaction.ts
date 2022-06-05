import { transaction } from 'mobx';
import { Order } from './order';
export class Transaction {
  public buyerId: string;
  public sellerId: string;
  public orderId: string;

  constructor(buyerId: string, sellerId: string, orderId: string) {
    this.buyerId = buyerId;
    this.sellerId = sellerId;
    this.orderId = orderId;
  }
}

