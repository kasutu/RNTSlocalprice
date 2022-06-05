export class packing {
  id: string;
  sellerId: string;
  buyerid: string;
  typeOfItem: string;

  constructor(
    id: string,
    sellerId: string,
    buyerId: string,
    typeOfItem: string
  ) {
    this.id = id;
    this.sellerId = sellerId;
    this.buyerid = buyerId;
    this.typeOfItem = typeOfItem;
  }
}

export class packed extends packing {
  public isPacked?: boolean;
}
