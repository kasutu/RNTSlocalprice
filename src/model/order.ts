import { Transaction } from './transaction';
export class Order extends Transaction {
  public parcel?: [];
  public paymentOption?: string;
}