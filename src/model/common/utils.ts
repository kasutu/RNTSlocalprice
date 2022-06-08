import firebase from '@react-native-firebase/app';
import { runInAction } from 'mobx';
import Db from '../../api/firebase/db.firebase';
import { firestoreDocumentData } from '../../api/geoquery/common/definitions';
import { ReactNativeGeoPoint } from '../../api/geoquery/common/util';
import {
  Collections,
  GenericObjectType,
  GenericObjectWithIdType,
  MessageType
} from '../../types/types';
import convoStore from '../convoStore/convoStore';
import messageStore from '../messageStore/messageStore';
import { Conversation, Message } from './classes/messageClass';
import { ValueCallback } from './types';

export const RNTimestamp = firebase.firestore.FieldValue.serverTimestamp();

/**
 * @function documentUpdateHandler handles specific property updates via targeted user id
 *
 * @param collection collection name @example 'shops'
 * @param newData any object
 */
export function documentUpdateHandler(
  collection: string,
  newData: { targetId: string; data: GenericObjectType | ReactNativeGeoPoint }
): void {
  const ref = Db.collection(collection);

  // returns an object when matched
  ref.doc(newData.targetId).update(newData.data);
}

/**
 * @function documentAddHandler handles database document add
 * @callback success triggers if the operations succeeded
 * @callback fail triggers that handles error
 */
export function documentAddHandler(
  collection: string,
  data: GenericObjectWithIdType,
  success?: () => void,
  fail?: () => void
): void {
  const ref = Db.collection(collection);

  ref
    .doc(data.id)
    .set(data)
    .then(() => success)
    .catch(() => fail);
}

/**
 * @function documentDeleteHandler deletes documents specified by id in the db
 *
 * @param targetId target id
 * @callback success triggers if the operations succeeded
 * @callback fail triggers that handles error
 */
export function documentDeleteHandler(
  collection: string,
  targetId: string,
  success?: () => void,
  fail?: () => void
): void {
  const ref = Db.collection(collection);

  ref
    .doc(targetId)
    .delete()
    .then(() => success)
    .catch(() => fail);
}

/**
 * @function documentGetCollectionHandler gets all the docs inside the collection
 *
 * @param collection reference to firebase collection
 * @callback success callback returns the docs inside a collection
 * @callback fail triggers that handles error
 */
export function documentGetCollectionHandler(
  collection: string,
  success: ValueCallback<firestoreDocumentData[]>,
  fail?: () => void
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
    .then((docs) => success(docs))
    .catch(() => fail);
}

/**
 * @function addConversationHandler adds a conversation collection
 *
 * @param buyerName text
 * @param sellerName text
 * @callback success triggers if the operations succeeded
 * @callback fail triggers that handles error
 */
export function addConversationHandler(
  buyerName: string,
  sellerName: string,
  success?: (id: string) => void,
  fail?: () => void
) {
  const conversation = new Conversation(buyerName, sellerName);
  if (success) {
    Db.collection('conversations')
      .doc(conversation.id)
      .set(conversation)
      .then(() => success(conversation.id))
      .catch(() => fail);
  } else {
    Db.collection('conversations').doc(conversation.id).set(conversation);
  }
}

/**
 * @function addMessageHandler adds a nested collection inside the doc
 *
 * @param from the sender
 * @param msg text message content
 */
export function addMessageHandler(convoId: string, from: string, msg: string) {
  const message = new Message(from, msg);

  runInAction(() => convoStore.data.push(message));

  // adds a message to an existing convo
  Db.collection('conversations')
    .doc(convoId)
    .collection('messages')
    .doc(message.id)
    .set(message);
}

// NewMessageClass

export function NewMessage(
  from: string,
  msg: string,
  options:
    | string
    | {
        buyerName: string;
        sellerName: string;
      },
  callback?: (v: string) => void
) {
  if (typeof options === 'string') {
    addMessageHandler(options, from, msg);
  } else {
    addConversationHandler(
      options.buyerName,
      options.sellerName,
      async (convoId) => {
        while (!isExisting('conversations', convoId)) {
          null;
        }

        if (callback) {
          callback(convoId);
        }

        addMessageHandler(convoId, from, msg);
      }
    );
  }
}

/**
 * Checks if the document exists in a collection
 *
 * @async
 *
 * @param collection collection names
 * @param id document ID
 * @returns boolean
 */
export async function isExisting(collection: Collections | string, id: string) {
  const result = await Db.collection(collection)
    .doc(id)
    .get({ source: 'server' });

  return result.exists;
}

export function getAllMessagesHandler() {
  let retries = 0;

  while (
    !isExisting('conversations', convoStore.currentConvoId) &&
    retries < 10
  ) {
    console.log('conversations exist:', false);
    retries++;
  }

  Db.collection('conversations')
    .doc(convoStore.currentConvoId)
    .collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot((snapshot) => {
      const messages: MessageType[] = [];

      // pushes the messages to the store
      snapshot.forEach((msg) => {
        messages.push(msg.data() as MessageType);
      });

      runInAction(() => (convoStore.data = messages));
    });
}

export async function sendNewMessageHandler(
  owners: {
    buyerName: string;
    sellerName: string;
  },
  from: string,
  msg: string
) {
  {
    /**
     * checks if id exists then send message else make a new one
     */
    if (await isExisting('conversations', convoStore.currentConvoId)) {
      NewMessage(from, msg, convoStore.currentConvoId);
    } else {
      NewMessage(from, msg, owners, (val) => (convoStore.currentConvoId = val));
    }
  }
}

Db 
 .collection('Users')
  // Filter results
  .where('languages', 'in', ['en', 'fr'])
  .get()
  .then(querySnapshot => {
    /* ... */
  });