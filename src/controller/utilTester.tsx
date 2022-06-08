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
import { Message } from '../model/common/classes/messageClass';
import {
  addConversationHandler,
  documentAddHandler,
  documentDeleteHandler,
  documentGetCollectionHandler,
  documentUpdateHandler,
  getAllMessagesHandler,
  sendNewMessageHandler
} from '../model/common/utils';
import convoStore from '../model/convoStore/convoStore';
import temptransactionstore from '../model/transactionStore/tempTransactio';
import TextRender from './textRender';

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
            onPress={() =>
              documentAddHandler('basil', new Message('test', 'hello'))
            }
          >
            {'add doc'}
          </Button>
          <Button
            onPress={() =>
              documentUpdateHandler('basil', {
                targetId: 'd97ae85d-b24a-4dfa-8084-3b12ab2497d4',
                data: { msg: 'ive been updated' }
              })
            }
          >
            {'update doc'}
          </Button>
          <Button
            onPress={() =>
              documentDeleteHandler(
                'basil',
                '3f77c92f-1825-4fa1-bc1e-6f3ca3241b13'
              )
            }
          >
            {'delete doc'}
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
              temptransactionstore.buyerId = 'basilio'
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
