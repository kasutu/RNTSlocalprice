import {
  Box,
  Button,
  HStack,
  Input,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';
import React, { useState } from 'react';
import { Keyboard } from 'react-native';
import { getData } from '../api/mmkv';
import { Message } from '../model/common/classes/messageClass';
import { LocalUserDataFactory } from '../model/common/classes/userDataFactory';
import { userDataSync } from '../model/common/classes/userSyncDataFactory';
import { LocalUserData } from '../model/common/userDataTypes';
import {
  addConversationHandler,
  documentAddHandler,
  documentDeleteHandler,
  documentGetCollectionHandler,
  documentUpdateHandler,
  getAllMessagesHandler,
  getDocById,
  sendNewMessageHandler
} from '../model/common/utils';
import convoStore from '../model/convoStore/convoStore';
import { userPersistDataStore } from '../model/localPersistUserDataStore.ts/localPersistDataStore';
import temptransactionstore from '../model/transactionStore/tempTransaction';
import TextRender from './textRender';

let userTest: LocalUserData = {
  role: 'verified seller',
  id: 'dawdawd',
  fullName: 'heheheh',
  email: 'sssssss',
  contactNumber: 'dddddd',
  brgy: 'sss',
  town: 'as',
  city: 'ddddd',
  zipCode: 'dsasasds',
  address: 'dasdadasda',
  geopointId: 'aaaaassadadawd',
  transactionIds: ['dawd'],
  convoIds: ['dawd'],
  itemIds: ['dawd'],
  isLoggedIn: false
};

let newUserTest: LocalUserData = {
  role: 'not logged in',
  id: 'dawdawd',
  fullName: 'NEWWWWW FREESSHHHHH MEAATT',
  email: 'ssssshuhuss',
  contactNumber: 'ddddhuhuhuhudd',
  brgy: 'suuss',
  town: 'ahuhuhs',
  city: 'NEWWWW BOIIII',
  zipCode: 'dsasasds',
  address: 'dasdadasda',
  geopointId: 'aaaaassadadawd',
  transactionIds: ['dawd', 'dawd', 'dawd'],
  convoIds: ['dawd', 'ehhehe', 'ehhehe'],
  itemIds: ['dawd', 'ehhehe', 'woot woot'],
  isLoggedIn: true
};

export default function UtilTester() {
  const convoOwners = {
    buyerName: 'jam',
    sellerName: 'jiv'
  };

  const [from, setFrom] = useState<string>(convoOwners.buyerName);
  const [msg, setMsg] = useState<string>('');

  return (
    <NativeBaseProvider>
      <Box w={'full'} h={'full'}>
        <VStack space={1}>
          <Button
            onPress={() => {
              userDataSync.push(new LocalUserDataFactory(userTest));
              userDataSync.sync();
            }}
          >
            {'test'}
          </Button>
          <Button
            onPress={() => {
              getData('user').then((val) => console.log(val));
            }}
          >
            {'fetch'}
          </Button>
          <Button
            onPress={() => {
              userPersistDataStore.fetch(userTest.id);
              console.log(userPersistDataStore.persist);
            }}
          >
            {'fetch try'}
          </Button>
          <Button
            onPress={() =>
              documentGetCollectionHandler('basil', (e) => console.log(e))
            }
          >
            {'get collection'}
          </Button>
          <Button onPress={() => addConversationHandler('jiv', 'jam')}>
            {'add convo'}
          </Button>

          {/* START CONVERSATION */}
          <HStack justifyContent={'space-around'}>
            {/* TOGGLE SWITCH */}
            <Button
              bg={from === convoOwners.buyerName ? 'orange.900' : 'muted.400'}
              onPress={() => setFrom(convoOwners.buyerName)}
            >{`Buyer: ${convoOwners.buyerName}`}</Button>

            {/* TOGGLE SWITCH */}
            <Button
              bg={from === convoOwners.sellerName ? 'orange.900' : 'muted.400'}
              onPress={() => setFrom(convoOwners.sellerName)}
            >{`Seller: ${convoOwners.sellerName}`}</Button>
          </HStack>
          <Text>conversation id:</Text>
          <Input
            value={convoStore.currentConvoId}
            placeholder="conversation id (if any)"
            onChangeText={(val) => (convoStore.currentConvoId = val)}
          />

          <Input
            value={msg}
            placeholder="message"
            onChangeText={(val) => setMsg(val)}
          />
          <Button
            onPress={() => {
              setMsg('');
              Keyboard.dismiss();
              sendNewMessageHandler(convoOwners, from, msg);
            }}
          >
            {'send'}
          </Button>
          <Button onPress={() => getAllMessagesHandler()}>
            {'init listener (press once)'}
          </Button>
          <Button
            onPress={() => {
              temptransactionstore.buyerId = 'basilio';
              temptransactionstore.addToDatabase();
            }}
          >
            {'tranaction'}
          </Button>
        </VStack>
        <VStack>
          {/* text render here */}
          <TextRender />
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
