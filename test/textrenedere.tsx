import geoStore from '../src/model/geoQueryStore/geoQuery.store';
import React from 'react';
import { Center, Text, VStack } from 'native-base';
import { observer } from 'mobx-react-lite';
import { uuid } from '../src/api/uuid/index.uuid';

function TextDisplay() {
  return (
    <>
      <Center flex={1}>
        <VStack>
          {geoStore.docs.map((doc) => {
            return <Text key={uuid.v1()}>{doc.name}</Text>;
          })}
        </VStack>
      </Center>
    </>
  );
}

export default observer(TextDisplay);
