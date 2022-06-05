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
