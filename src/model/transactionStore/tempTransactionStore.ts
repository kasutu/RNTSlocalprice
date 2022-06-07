import { ChatScreenTest } from '../../../test/screens/chat/chat';
import { Transaction } from '../common/classes/transaction';
import { documentAddHandler } from '../common/utils';

export class TempTransaction implements Transaction {
  public id: string;
  public buyerId: string;
  public sellerId: string;
  public paymentOption: 'cash on delivery' | 'pickup and pay';
  public placedOrder: boolean;
  public confirmed: boolean;
  public itemIds: string[];
  public shippingFee: number;
  public subtotal: number;
  public totalAmount: number;
  public chatId: string;
  constructor(
    id: string,
    buyerId: string,
    sellerId: string,
    paymentOption: 'cash on delivery' | 'pickup and pay',
    placedOrder: boolean,
    confirmed: boolean,
    itemIds: string[],
    shippingFee: number,
    subtotal: number,
    totalAmount: number,
    chatId: string
  ) {
    this.id = id;
    (this.buyerId = buyerId), (this.sellerId = sellerId);
    this.paymentOption = paymentOption;
    this.placedOrder = placedOrder;
    this.confirmed = confirmed;
    this.itemIds = itemIds;
    this.shippingFee = shippingFee;
    this.subtotal = subtotal;
    this.totalAmount = totalAmount;
    this.chatId = chatId;
  }
  public addToDatabase(){
    
  }
      
}
