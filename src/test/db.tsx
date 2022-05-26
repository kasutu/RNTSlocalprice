import React, { useState } from 'react';
import {
  Box,
  Button,
  Center,
  HStack,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';
import firestore from '@react-native-firebase/firestore';

const ref = firestore().collection('users');

let userData = { name: 'cool jiv' };

export default function Db() {
  const [displayData, setDisplayData] = useState<string[]>([]);

  async function uploadData() {
    // upload test data to db
    await ref.add(userData);
    console.log('Uploading Data', userData);
  }

  async function fetchData() {
    // Download test data to db
    console.log('Downloading Data');
    let usernames: string[] = [];

    await ref.get().then((query) => {
      query.forEach((user) => usernames.push(user.data().name));
    });

    setDisplayData(usernames);
  }

  return (
    <NativeBaseProvider>
      <Box safeArea w={'full'} h={'full'}>
        <VStack space={2}>
          <HStack space={2} justifyContent={'center'}>
            <Button onPress={() => uploadData()}>Upload data</Button>
            <Button onPress={() => fetchData()}>Download data</Button>
          </HStack>
          <Center>
            <Text color={'black'}>{`${displayData}`}</Text>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
