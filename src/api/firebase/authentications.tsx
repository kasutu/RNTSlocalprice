import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { DeviceEventEmitter } from 'react-native';

export default class Authentication {
  private _user: FirebaseAuthTypes.User | null = null;
  private _initializing: boolean = true;

  async login(email: string, password: string) {
    const result = await auth().signInWithEmailAndPassword(email, password);

    this._user = result.user;
    this._initializing = false;
  }

  async register(email: string, password: string) {
    const result = await auth().createUserWithEmailAndPassword(email, password);

    this._user = result.user;
    this._initializing = false;
  }

  getUser(): FirebaseAuthTypes.User | null {
    if (this._initializing) {
      return null;
    }

    return this._user;
  }

  isReady() {
    return !this._initializing;
  }

  async signOut() {
    if (this._initializing) return;

    await auth().signOut();
    this._initializing = true;
  }
}
