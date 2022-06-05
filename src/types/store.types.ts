// ideal for owners and one to many objects
export interface IObjectType {
  id: string;
}

// ideal for objects that is related to each other
export interface IRelationalObjectType extends IObjectType {
  ownerID: string;
}

<<<<<<< HEAD:src/types/store.types.ts
// main item type
export interface IItemType extends IRelationalObjectType {
  imageID: string[];
  description: string;
  details: string;

  // uncomment for later use
  rating: number;
  location: string;
=======
export interface PackingStatusType {
  isPacked: boolean;
}

// main item type
export interface ItemType extends RelationalObjectType, PackingStatusType {
  imageIDs: string[];
  description: string;
  price: number;
  details: string;
  rating: number;
  locationName: string;
}

/**
 * @interface UserDataType
 * everything that is essencial to the user relation
 * and activities
 */
export interface UserDataType {
  role: 'seller' | 'not verified' | 'not logged in';
  email: string;
  fullName: string;
  userId: string;
  contactNumber: string;
  address: string;
  geohash: string;
  transactionIds: string[];
  convoIds: string[];
}

/**
 * @interface TransactionMetadataType center of 2 parties
 */
export interface TransactionMetadataType extends ObjectType {
  id: string;
  buyerId: string;
  sellerId: string;
  paymentOption: 'cash on delivery' | 'pickup and pay';
  placedOrder: boolean;
  confirmed: boolean;
  itemIds: string[];
  shippingFee: number;
  subtotal: number;
  totalAmount: number;
  chatId: string;
>>>>>>> db94568502f58fd09f810715f393a65e1b536d11:src/types/types.tsx
}
