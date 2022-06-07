import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import { uuid } from '../../../api/uuid/index.uuid';
import { ConversationType, MessageType } from '../../../types/types';
import { RNTimestamp } from '../utils';

export class Message implements MessageType {
  from: string;
  msg: string;
  id: string;
  timestamp: FirebaseFirestoreTypes.FieldValue;

  constructor(from: string, msg: string) {
    this.from = from;
    this.msg = msg;
    this.timestamp = RNTimestamp;
    this.id = uuid.v4();
  }
}

export class Conversation implements ConversationType {
  buyerName: string;
  sellerName: string;
  id: string;

  constructor(buyerName: string, sellerName: string) {
    this.buyerName = buyerName;
    this.sellerName = sellerName;
    this.id = uuid.v4();
  }
}
