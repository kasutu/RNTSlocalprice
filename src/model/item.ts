import { ItemType } from '../types/types';

class Item implements ItemType {
  imageID: string[];
  description: string;
  details: string;
  rating: number;
  location: string;
  ownerID: string;
  id: string;
  constructor(
    imageID: string[],
    description: string,
    details: string,
    rating: number,
    location: string,
    ownerID: string,
    id: string
  ) {
    this.imageID = imageID;
    this.description = description;
    this.details = details;
    this.rating = rating;
    this.location = location;
    this.ownerID = ownerID;
    this.id = id;
  }
}
