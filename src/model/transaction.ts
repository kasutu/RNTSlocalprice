import { transaction } from "mobx";
import { Order } from "./order";
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
//const findOrder = transaction.Find((parcel: any) => parcel )

