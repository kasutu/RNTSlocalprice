import { Item } from '../../../view/render/ItemCards.renderer';
import { PaymentOptions, TransactionMetadataType } from '../../../types/types';

export class Transaction implements TransactionMetadataType {
  constructor(
    public id: string,
    public buyerId: string,
    public sellerId: string,
    public paymentOption: PaymentOptions,
    public placedOrder: boolean,
    public confirmed: boolean,
    public itemIds: Item[],
    public shippingFee: number,
    public subtotal: number,
    public totalAmount: number,
    public chatId: string
  ) {}
}
