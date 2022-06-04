import { Order } from './order';
export default class Parcel extends Order {
  public parcelIds: string[] = [];

  constructor(
    parcelIds: string[],
    sellerId: string,
    buyerId: string,
    orderId: string,
    paymentOption: 'cash on delivery' | 'pickup and pay'
  ) {
    super(sellerId, buyerId, orderId, paymentOption);
    this.parcelIds = parcelIds;
  }
}
