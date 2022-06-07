import { RNTimestamp } from "../model/common/utils";


// ideal for owners and one to many objects
export interface IObjectType {
  id: string;
}

// ideal for objects that is related to each other
export interface IRelationalObjectType extends IObjectType {
  ownerID: string;
}

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
 * everything that is essential to the user relation
 * and activities
 */
export interface UserDataType {
  role: UserRole;
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
  paymentOption: PaymentOptions;
  placedOrder: boolean;
  confirmed: boolean;
  itemIds: string[];
  shippingFee: number;
  subtotal: number;
  totalAmount: number;
  chatId: string;
}

export interface MessageType extends ObjectType {
  from: string;
  msg: string;
  timestamp: typeof RNTimestamp;
}

export interface ConversationType extends ObjectType {
  buyerName: string;
  sellerName: string;
}

export type UserRole = 'seller' | 'not verified' | 'not logged in';

export type PaymentOptions = 'cash on delivery' | 'pickup and pay';

export interface GenericObjectType {
  [key: string]: any;
}

export interface GenericObjectWithIdType extends GenericObjectType {
  id?: string;
}

export type Collections = 'items' | 'conversations';
