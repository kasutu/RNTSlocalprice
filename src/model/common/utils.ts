import Db from '../../api/firebase/db.firebase';
import { GenericObjectType } from '../../types/types';

/**
 * @function documentUpdateHandler hadles role update via targeted user id
 */
export function documentUpdateHandler(
  collection: string,
  targetUserId: string,
  newData: GenericObjectType
) {
  const ref = Db.collection(collection);

  // stores the documentId
  let documentIdSnap: string;

  // returns an object when matched
  ref
    .where('role', '==', targetUserId)
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
