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
import Db from '../src/api/firebase/db.utils';

const ref = Db.collection('users');

let userData = { name: 'cool jun' };

export default function DbTest() {
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
    <>
      <Box safeArea flex={1}>
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
    </>
  );
}
