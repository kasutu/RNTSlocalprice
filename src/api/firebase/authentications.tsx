import auth from '@react-native-firebase/auth';

export async function login(email: string, password: string) {
  return await auth().signInWithEmailAndPassword(email, password);
}

export async function register(email: string, password: string) {
  return await auth().createUserWithEmailAndPassword(email, password);
}

export async function getUser() {
  return auth().onAuthStateChanged;
}

export async function signOut() {
  return await auth().signOut();
}
