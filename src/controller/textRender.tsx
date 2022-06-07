import { observer } from 'mobx-react-lite';
import { Text } from 'native-base';
import React from 'react';
import messageStore from '../model/messageStore/messageStore';

export function TextRender() {
  return (
    <>
      {messageStore.data.map((msg) => {
        return (
          <Text key={msg.id}>{`${msg.from}: ${msg.msg}`}</Text>
        );
      })}
    </>
  );
}

export default observer(TextRender);
