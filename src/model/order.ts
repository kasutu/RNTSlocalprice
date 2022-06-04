import { Transaction } from './transaction';
import firestore from '@react-native-firebase/firestore';
export abstract class Order extends Transaction {
  public parcel: [];
  public cod: string;
  public orderCompleted: boolean;

  constructor(id: string, sellerId: string, buyerId: string) {
    super(id, buyerId, sellerId);
    this.parcel = [];
    this.cod = '90';
    this.orderCompleted = false;
  }
}
// loogic
// function onResult(QuerySnapshot: any) {
//   console.log('Got Users collection result.');
// }

// function onError(error: any) {
//   console.error(error);
// }

// firestore().collection('Users').onSnapshot(onResult, onError);
