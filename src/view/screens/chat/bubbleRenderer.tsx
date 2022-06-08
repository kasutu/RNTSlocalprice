import React from 'react';
import { Center, VStack } from 'native-base';
import { observer } from 'mobx-react-lite';
import convoStore from '../../../model/convoStore/convoStore';
import { ChatBubbleLeft, ChatBubbleRight } from './chatBubbles.chat';

function BubbleRenderer() {
  return (
    <>
      {convoStore.data.map((chat) => {
        if (chat.from === convoStore.currentUser) {
          return <ChatBubbleRight key={chat.id} content={chat.msg} />;
        } else {
          return <ChatBubbleLeft key={chat.id} content={chat.msg} />;
        }
      })}
    </>
  );
}

export default observer(BubbleRenderer);
