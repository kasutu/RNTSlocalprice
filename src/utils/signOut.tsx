import auth from '@react-native-firebase/auth';

auth()
  .signOut()
  .then(() => console.log('User signed out!'));
