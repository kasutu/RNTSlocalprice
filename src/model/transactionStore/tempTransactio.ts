import { makeAutoObservable } from 'mobx';
import { Transaction } from '../common/classes/transaction';
import { documentAddHandler } from '../common/utils';

export class TempTransactionstore implements Transaction {
  public id: string = '';
  public buyerId: string = '';
  public sellerId: string = '';
  public paymentOption: 'cash on delivery' | 'pickup and pay' =
    'cash on delivery';
  public placedOrder: boolean = false;
  public confirmed: boolean = false;
  public itemIds: string[] = [];
  public shippingFee: number = 0;
  public subtotal: number = 0;
  public totalAmount: number = 0;
  public chatId: string = '';
  constructor() {
    makeAutoObservable(this);
  }
  public addToDatabase() {
    documentAddHandler(
      'transactions',
      new Transaction(
        this.itemIds,
        this.buyerId,
        this.sellerId,
        this.chatId,
        this.paymentOption
      )
    );
  }

}
const temptransactionstore = new TempTransactionstore();
export default temptransactionstore;

