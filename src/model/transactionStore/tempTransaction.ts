import { makeAutoObservable, runInAction } from 'mobx';
import { uuid } from '../../api/uuid/index.uuid';
import { Item } from '../../view/render/ItemCards.renderer';
import { Transaction } from '../common/classes/transaction';
import { documentAddHandler } from '../common/utils';
import shoppingBagStore from '../shoppingBagStrore/shoppingBagStore';
import persistedUserData from '../UserStore/persistedUserData';

export class TempTransactionstore implements Transaction {
  public id: string = '';
  public buyerId: string = '';
  public sellerId: string = '';
  public paymentOption: 'cash on delivery' | 'pickup and pay' | '' = '';
  public placedOrder: boolean = false;
  public confirmed: boolean = false;
  public itemIds: Item[] = [];
  public shippingFee: number = 0;
  public subtotal: number = 0;
  public totalAmount: number = 0;
  public chatId: string = '';
  constructor() {
    makeAutoObservable(this);
  }
  public addToDatabase() {
    let transaction = new Transaction(
      uuid.v4(),
      persistedUserData.data.userId,
      this.sellerId,
      this.paymentOption,
      this.placedOrder,
      false,
      shoppingBagStore.selectedItems,
      shoppingBagStore.ShippingFee,
      shoppingBagStore.Subtotal,
      shoppingBagStore.Total,
      this.chatId
    );

    this.id = transaction.id;

    documentAddHandler('transactions', transaction);
  }
}
const temptransactionstore = new TempTransactionstore();
export default temptransactionstore;
