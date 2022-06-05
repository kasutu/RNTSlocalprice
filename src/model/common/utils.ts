import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import Db from '../../api/firebase/db.firebase';
import { firestoreDocumentData } from '../../api/geoquery/common/definitions';
import { uuid } from '../../api/uuid/index.uuid';
import { GenericObjectType, MessageType } from '../../types/types';
import { Conversation, Message } from './classes/messageClass';
import { ValueCallback } from './types';

/**
 * @function documentUpdateHandler hadles specific property updates via targeted user id
 *
 * @param collection collection name @example 'shops'
 * @param where the property of the do, use dot notation wen you want to access deeply nested objects
 * @param targetId target id
 * @param newData any object
 */
export function documentUpdateHandler(
  collection: string,
  targetId: string,
  newData: GenericObjectType
): void {
  const ref = Db.collection(collection);

  // stores the documentId
  let documentIdSnap: string;

  // returns an object when matched
  ref
    .where('id', '==', targetId)
    .limit(1)
    .get()
    .then((snapshots) => {
      // saves the first result
      snapshots.docs.forEach((snap) => (documentIdSnap = snap.id));

      return documentIdSnap;
    })
    .then((SnapId) => {
      ref.doc(SnapId).update(newData);
    });
}

/**
 * @function documentAddHandler handles database document add
 * @callback success triggers if the operations succeded
 * @callback fail triggers that handles error
 */
export function documentAddHandler(
  collection: string,
  data: GenericObjectType,
  success?: () => void,
  fail?: () => void
): void {
  const ref = Db.collection(collection);

  ref
    .add(data)
    .then(() => success)
    .catch(() => fail);
}

/**
 * @function documentDeleteHandler deletes documents specified by id in the db
 *
 * @param where the property of the do, use dot notation wen you want to access deeply nested objects
 * @param targetId target id
 * @callback success triggers if the operations succeded
 * @callback fail triggers that handles error
 */
export function documentDeleteHandler(
  collection: string,
  targetId: string,
  success?: () => void,
  fail?: () => void
): void {
  const ref = Db.collection(collection);

  // stores the documentId
  let documentIdSnap: string;

  // returns an object when matched
  ref
    .where('id', '==', targetId)
    .limit(1)
    .get()
    .then((snapshots) => {
      // saves the first result
      snapshots.docs.forEach((snap) => (documentIdSnap = snap.id));

      return documentIdSnap;
    })
    .then((SnapId) => {
      ref
        .doc(SnapId)
        .delete()
        .then(() => success)
        .catch(() => fail);
    });
}

/**
 * @function documentGetCollectionHandler gets all the docs inside the collection
 *
 * @param collection reference to firebase collection
 * @param cb callback returns the docs inside a collection
 */
export function documentGetCollectionHandler(
  collection: string,
  cb: ValueCallback<firestoreDocumentData[]>
) {
  const ref = Db.collection(collection);
  const docs: firestoreDocumentData[] = [];

  ref
    .get()
    .then((snapshots) => {
      // saves the result
      snapshots.docs.forEach((snap) => docs.push(snap.data()));

      return docs;
    })
    .then((docs) => cb(docs));
}

export function addConversationHandler(buyerName: string, sellerName: string) {
  const ref = Db.collection('conversations');

  ref.add(new Conversation(buyerName, sellerName));
}

export function addMessageHandler(from: string, msg: string): void {
  const tempId = uuid.v4();

  // under construction
  Db.collection('conversations')
    .doc(tempId)
    .collection('messages')
    .doc()
    .set(new Message(from, msg));
}

export function addNestedCollection() {
  Db.collection('conversations').doc().collection('kudasai').doc().set({
    basket: 'hiho',
    amount: 20000,
    created: 'mamamia'
  });
}
