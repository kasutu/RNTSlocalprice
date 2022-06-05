import React, { useEffect, useState } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { LogInScreen } from '../../view/screens/logIn/logInView.logIn';
import { ProfileScreen } from '../../view/screens/profile/profileView.profile';

export default function Authentication() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>();

  function onAuthStateChanged(user: FirebaseAuthTypes.User | null) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      {LogInScreen}
    );
  }

  return (
    {ProfileScreen}
  );
}
/*
auth()
  .createUserWithEmailAndPassword(
    'jane.doe@example.com',
    'SuperSecretPassword!'
  )
  .then(() => {
    console.log('User account created & signed in!');
  })
  .catch((error) => {
    if (error.code === 'auth/email-already-in-use') {
      console.log('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('That email address is invalid!');
    }

    console.error(error);
  });
*/