// ideal for owners and one to many objects
export interface IObjectType {
  id: string;
}

// ideal for objects that is related to each other
export interface IRelationalObjectType extends IObjectType {
  ownerID: string;
}

// main item type
export interface IItemType extends IRelationalObjectType {
  imageID: string[];
  description: string;
  details: string;

  // uncomment for later use
  rating: number;
  location: string;
}
