import React from 'react';
import { Box, Button, Center, Heading, Input, VStack } from 'native-base';
import { observer } from 'mobx-react-lite';

//store and MobX imports
import storeInstanceTest from '../store.test';
import { runInAction } from 'mobx';

function ScreenA() {
  return (
    <>
      <Box flex={1} w={'full'} h={'full'} safeArea>
        <Heading padding={5}>{'ScreenA.tsx'}</Heading>
        <VStack space={5}>
          <Center>
            <Input
              placeholder="Input Text"
              value={storeInstanceTest.newObject}
              // sets the value from the input to the store
              onChangeText={(userInput) =>
                /*
                  'runInAction()' is a mobx feature "enforce actions / strict mode",
                  which basically enforces that any modification to the state must
                  happen inside of an action.
                 */
                runInAction(() => (storeInstanceTest.newObject = userInput))
              }
            />
          </Center>
          <Center>
            {/* calls the addNewObject() method from the store */}
            <Button onPress={() => storeInstanceTest.addNewObject()}>
              Cache to store
            </Button>
          </Center>
        </VStack>
      </Box>
    </>
  );
}

export default observer(ScreenA);
