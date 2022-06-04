import {
  distanceBetween,
  geohashForLocation,
  geohashQueryBounds
} from 'geofire-common';
import Db from '../firebase/db.firebase';
import { ObjectWithGeoPoint } from './common/definitions';

export function runGeoQuery() {
  // Compute the GeoHash for a lat/lng point
  const lat = 10.895919;
  const lng = 122.705114;
  const hash = geohashForLocation([lat, lng]);

  const shopGeoPoint: ObjectWithGeoPoint = {
    name: 'jewom',
    geopoint: {
      geohash: hash,
      lat: lat,
      lng: lng
    }
  };

  // Add the hash and the lat/lng to the document. We will use the hash
  // for queries and the lat/lng for distance comparisons.
  const shopsRef = Db.collection('shops');

  // uploads to database
  shopsRef.add(shopGeoPoint).then(() => {
    console.log('added geohash document');
  });

  // Find cities within 2km of barotac nuevo
  const center = [10.894707, 122.704063];
  const radiusInM = 2 * 1000;

  // Each item in 'bounds' represents a startAt/endAt pair. We have to issue
  // a separate query for each pair. There can be up to 9 pairs of bounds
  // depending on overlap, but in most cases there are 4.
  const bounds = geohashQueryBounds(center, radiusInM);
  const promises = [];
  for (const b of bounds) {
    const q = shopsRef.orderBy('geopoint.geohash').startAt(b[0]).endAt(b[1]);

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

      matchingDocs.forEach((doc) => {
        return console.log(doc.data());
      });
    })
    .catch((err) => {
      throw new Error(err);
    });
}
