export class Notification {
  public id: string;
  public sellerId: string;
  public buyerId: string;
  public typeOfItem: string;

  constructor(
    id: string,
    sellerId: string,
    buyerId: string,
    typeOfItem: string
  ) {
    this.id = id;
    this.sellerId = sellerId;
    this.buyerId = buyerId;
    this.typeOfItem = typeOfItem;
  }


}
