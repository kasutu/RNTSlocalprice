import Db from '../../api/firebase/db.firebase';
import { GenericObjectType } from '../../types/types';
import { ValueCallback } from './types';

/**
 * @function documentUpdateHandler hadles role update via targeted user id
 *
 * @param collection collection name @example 'shops'
 * @param where the property of the do, use dot notation wen you want to access deeply nested objects
 * @param targetUserId target id
 * @param newData any object
 */
export function documentUpdateHandler(
  collection: string,
  where: string,
  targetUserId: string,
  newData: GenericObjectType
): void {
  const ref = Db.collection(collection);

  // stores the documentId
  let documentIdSnap: string;

  // returns an object when matched
  ref
    .where(where, '==', targetUserId)
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
 */
export function documentDeleteHandler(
  collection: string,
  targetUserId: string,
  where: string,
  success?: () => void,
  fail?: () => void
): void {
  const ref = Db.collection(collection);

  // stores the documentId
  let documentIdSnap: string;

  // returns an object when matched
  ref
    .where(where, '==', targetUserId)
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