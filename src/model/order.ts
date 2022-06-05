import { Transaction } from './transaction';
export class Order extends Transaction {
  public paymentOption: 'cash on delivery' | 'pickup and pay';
  public paid: boolean;

  constructor(
    sellerId: string,
    buyerId: string,
    orderId: string,
    paymentOption: 'cash on delivery' | 'pickup and pay'
  ) {
    super(buyerId, sellerId, orderId);
    this.paymentOption = paymentOption;
    this.paid = false;
  }
}
// console.log(new Order('basilio', 'lappii', 'hhhhhhh', 'cash on delivery'))
