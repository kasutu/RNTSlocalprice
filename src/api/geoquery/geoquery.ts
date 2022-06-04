import { distanceBetween, geohashQueryBounds } from 'geofire-common';
import { runInAction } from 'mobx';
import geoStore from '../../model/geoQueryStore/geoQuery.store';
import Db from '../firebase/db.firebase';
import {
  CollectionRef,
  GeoLocationsRef,
  ObjectBasicInfo
} from './common/definitions';
import { ReactNativeGeoPoint } from './common/util';

export class ReactNativeGeofire {
  // Add the hash and the lat/lng to the document. We will use the hash
  // for queries and the lat/lng for distance comparisons.
  public shopsRef: CollectionRef;

  constructor(CollectionRef: GeoLocationsRef | string) {
    this.shopsRef = Db.collection(CollectionRef);
  }

  public add(
    object: ObjectBasicInfo | {},
    lat: number,
    lng: number,
    ref?: string
  ): void {
    if (ref) {
      this.shopsRef = Db.collection(ref);
    }

    // uploads to database
    let geoObject = { ...object, geopoint: new ReactNativeGeoPoint(lat, lng) };
    this.shopsRef.add(geoObject);
  }

  public query(lat: number, lng: number, radiusInKm: number, ref?: string) {
    if (ref) {
      this.shopsRef = Db.collection(ref);
    }

    // Find cities within 2km of barotac nuevo
    const center = [lat, lng];
    const radiusInM = radiusInKm * 1000;

    // Each item in 'bounds' represents a startAt/endAt pair. We have to issue
    // a separate query for each pair. There can be up to 9 pairs of bounds
    // depending on overlap, but in most cases there are 4.
    const bounds = geohashQueryBounds(center, radiusInM);
    const promises = [];
    for (const b of bounds) {
      const q = this.shopsRef
        .orderBy('geopoint.geohash')
        .startAt(b[0])
        .endAt(b[1]);

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

        // empties the array first before reendering
        runInAction(() => geoStore.empty());

        matchingDocs.forEach((doc) => {
          // set array contents
          runInAction(() => geoStore.docs.push(doc.data()));
        });
      })
      .catch((err) => {
        throw new Error(err);
      });
  }
}
