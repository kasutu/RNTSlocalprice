import { uuid } from '../../../api/uuid/index.uuid';
import { TransactionMetadataType } from '../../../types/types';

export class Transaction implements TransactionMetadataType {
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
    itemIds: string[],
    buyerId: string,
    sellerId: string,
    chatId: string,
    paymentOption: 'cash on delivery' | 'pickup and pay'
  ) {
    this.buyerId = buyerId;
    this.sellerId = sellerId;
    this.paymentOption = paymentOption;
    this.itemIds = itemIds;

    // init default
    // generates a random id for the transaction
    this.subtotal = 0;
    this.shippingFee = 0;
    this.totalAmount = 0;
    this.chatId = chatId;
    this.placedOrder = false;
    this.confirmed = false;
    this.id = uuid.v4();
  }
}
