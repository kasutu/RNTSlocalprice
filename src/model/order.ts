import { Transaction } from './transaction';
export abstract class Order extends Transaction {
  public parcel: [];
  public cod: string;
  public orderCompleted: boolean;
  
  constructor(id: string, sellerId: string, buyerId: string ) {
    super(id, buyerId, sellerId);
    this.parcel = [];
    this.cod = '90';
    this.orderCompleted = false;
  }
}
