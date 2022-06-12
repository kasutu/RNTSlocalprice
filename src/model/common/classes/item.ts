import { uuid } from '../../../api/uuid/index.uuid';
import { ItemType } from '../../../types/types';

export class Item implements ItemType {
  imageIDs: string[];
  description: string;
  details: string;
  rating: number;
  ownerID: string;
  id: string;
  locationName: string;
  price: number;
  isPacked: boolean;

  constructor(
    imageIDs: string[],
    description: string,
    details: string,
    rating: number,
    ownerID: string,
    locationName: string,
    price: number
  ) {
    this.imageIDs = imageIDs;
    this.description = description;
    this.details = details;
    this.rating = rating;
    this.ownerID = ownerID;
    this.locationName = locationName;
    this.price = price;
    this.isPacked = false;
    this.id = uuid.v4();
  }
}

export class ShoppingBagItem {
  constructor(
    public id: string,
    public uri: string,
    public name: string,
    public price: number,
    public location: string,
    public qty: number,
    public description: string
  ) {}

  public plusQty(): void {
    this.qty++;
  }

  public minusQty(): void {
    if (this.qty !== 1) {
      this.qty--;
    }
  }

  public getThis(): this {
    return this;
  }
}
