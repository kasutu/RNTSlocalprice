import { Center, Text } from 'native-base';
import React from 'react';

// mobX and store
import { observer } from 'mobx-react-lite';
import storeInstanceTest from '../store.test';

export function CentralObjects() {
  return (
    <>
      {/* 'storeInstanceTest.objects' are loaded into the mapper for rendering */}
      {storeInstanceTest.objects.map((text) => {
        return (
          <Center key={text}>
            {/* You should add a 'key' to each child(<Center>) as well as each element inside children. */}
            {/* This way React can handle the minimal DOM change. */}
            {/* REFERENCE: https://stackoverflow.com/questions/28329382/understanding-unique-keys-for-array-children-in-react-js */}
            <Text>{text}</Text>
          </Center>
        );
      })}
    </>
  );
}

// export the observed state to be used in other screens
// dedicated only for the list maker
export const CentralObjectsObserver = observer(CentralObjects);
