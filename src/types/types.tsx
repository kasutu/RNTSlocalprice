// ideal for owners and one to many objects
export interface ObjectType {
  id: string;
}

// ideal for objects that is related to each other
export interface RelationalObjectType extends ObjectType {
  ownerID: string;
}

// main item type
export interface ItemType extends RelationalObjectType {
  imageID: string[];
  description: string;
  details: string;

  // uncomment for later use
  rating: number;
  location: string;
}
