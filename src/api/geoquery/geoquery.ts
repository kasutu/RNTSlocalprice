import Db from '../firebase/db.firebase';
import geopointStore from '../../model/geopointStore/geopointStore';
import geoStore from '../../model/geoQueryStore/geoQuery.store';
import {
  CollectionRef,
  GeoLocationsRef,
  ObjectBasicInfo,
  ObjectWithGeoPoint
} from './common/definitions';
import { distanceBetween, geohashQueryBounds } from 'geofire-common';
import {
  documentAddHandler,
  documentUpdateHandler
} from '../../model/common/utils';
import { GenericObjectType } from '../../types/types';
import { ReactNativeGeoPoint } from './common/util';
import { runInAction } from 'mobx';
import { uuid } from '../uuid/index.uuid';
import userStore from '../../model/UserStore/UserStore';

export class ReactNativeGeofire {
  // Add the hash and the lat/lng to the document. We will use the hash
  // for queries and the lat/lng for distance comparisons.
  protected ref: CollectionRef;
  protected collectionRef: string;

  constructor(CollectionRef: GeoLocationsRef | string) {
    this.ref = Db.collection(CollectionRef);
    this.collectionRef = CollectionRef;
  }

  /**
   * @function add add a custom GeoDocument to firebase
   *
   * @param object accepts any objects
   * @param lat latitude
   * @param lng longitude
   * @param ref collection reference
   */
  public add(object: GenericObjectType, lat: number, lng: number): void {
    const recentGeopoint: ReactNativeGeoPoint = new ReactNativeGeoPoint(
      lat,
      lng
    );
    const id: string = uuid.v4();

    // uploads to database
    let geoObject = { ...object, id, geopoint: recentGeopoint };
    geopointStore.recentGeopoint = geoObject.geopoint;
    userStore.geoPointId = id;
    documentAddHandler(this.collectionRef, geoObject);
  }

  /**
   * @function update update the geohash of the user
   *
   * @param documentId
   * @param geopoint
   * @param ref
   */
  public update(targetGeohash: string, Lat: number, lng: number) {
    documentUpdateHandler('geoPoints', {
      targetId: targetGeohash,
      data: new ReactNativeGeoPoint(Lat, lng)
    });
  }

  /**
   * @function query finds all points of interest nearby
   *
   * @param lat latitude
   * @param lng longitude
   * @param radiusInKm radius in kilometer
   * @param ref collection reference
   */
  public query(lat: number, lng: number, radiusInKm: number) {
    // Find cities within 2km of barotac nuevo
    const center = [lat, lng];
    const radiusInM = radiusInKm * 1000;

    // Each item in 'bounds' represents a startAt/endAt pair. We have to issue
    // a separate query for each pair. There can be up to 9 pairs of bounds
    // depending on overlap, but in most cases there are 4.
    const bounds = geohashQueryBounds(center, radiusInM);
    const promises = [];
    for (const b of bounds) {
      const q = this.ref.orderBy('geopoint.geohash').startAt(b[0]).endAt(b[1]);

      promises.push(q.get());
    }

    // Collect all the query results together into a single list
    Promise.all(promises)
      .then((snapshots) => {
        const matchingDocs = [];

        for (const snap of snapshots) {
          for (const doc of snap.docs) {
            const lat = doc.get('geopoint.lat') as number;
            const lng = doc.get('geopoint.lng') as number;

            // We have to filter out a few false positives due to GeoHash
            // accuracy, but most will match
            const distanceInKm = distanceBetween([lat, lng], center);
            const distanceInM = distanceInKm * 1000;
            if (distanceInM <= radiusInM) {
              matchingDocs.push(doc);
            }
          }
        }

        return matchingDocs;
      })
      .then((matchingDocs) => {
        // Process the matching documents
        // store matching doc data to  persisted client storage

        // empties the array first before rendering
        runInAction(() => geoStore.empty());

        matchingDocs.forEach((doc) => {
          // set array contents
          runInAction(() =>
            geoStore.docs.push(doc.data() as ObjectWithGeoPoint)
          );
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}
