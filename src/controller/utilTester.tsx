import { Box, Button, NativeBaseProvider } from 'native-base';
import React from 'react';
import { Message } from '../model/common/classes/messageClass';
import {
  documentAddHandler,
  documentDeleteHandler,
  documentGetCollectionHandler,
  documentUpdateHandler
} from '../model/common/utils';

export default function UtilTester() {
  return (
    <NativeBaseProvider>
      <Box w={'full'} h={'full'}>
        <Button
          onPress={() =>
            documentAddHandler('jiv', new Message('jiv', 'hello world'))
          }
        >
          {'add doc'}
        </Button>
        <Button
          onPress={() =>
            documentUpdateHandler('jiv', 'demo12', { msg: 'ive been updated' })
          }
        >
          {'update doc'}
        </Button>
        <Button onPress={() => documentDeleteHandler('jiv', 'demo12')}>
          {'delete doc'}
        </Button>
        <Button
          onPress={() =>
            documentGetCollectionHandler('jiv', (e) => console.log(e))
          }
        >
          {'get collection'}
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}
