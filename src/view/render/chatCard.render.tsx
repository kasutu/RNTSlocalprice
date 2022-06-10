import { Box } from 'native-base';
import React from 'react';
import { uuid } from '../../api/uuid/index.uuid';
import { BadgeProps } from '../../types/types';
import { HCardChat } from '../screens/chat/HCard.chat';

class ChatCards {
  constructor(
    public uri: string,
    public name: string,
    public lastMsg: string,
    public badge: BadgeProps,
    public id: string
  ) {}
}

const uri =
  'https://scontent.fceb2-1.fna.fbcdn.net/v/t39.30808-6/277518428_1314603355707574_4111794270522738096_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeG4sK1I_nt4Yz4aj01-pQiBhpMymWToXQSGkzKZZOhdBHFhBlXBLbtfGjojG2lCmXAuCstYq_vxOUdefh6oU61J&_nc_ohc=YUeYAeSHAzAAX9nOuT2&tn=KfI-Rrhe9bPxn7mN&_nc_ht=scontent.fceb2-1.fna&oh=00_AT-DXKqKhYQZ5WQnOwRor-LWYIXk5D6ZqDQrs1cWCxWXIw&oe=62A8F829';
const name = 'Dave Jhaeson Alivio';
const badge: BadgeProps = { status: 'confirmed' };
const lastMsg = 'you: okay foyn';

const cards: ChatCards[] = [];

for (let i = 0; i < 10; i++) {
  cards.push(new ChatCards(uri, name, lastMsg, badge, uuid.v4()));
}

export function ChatCardRenderer() {
  return (
    <>
      {cards.map((card) => {
        return (
          <Box key={card.id}>
            <HCardChat
              ImageUri={card.uri}
              lastMsg={card.lastMsg}
              name={card.name}
              status={card.badge.status}
              onCardPress={() => console.log('needs to return an id')}
            />
          </Box>
        );
      })}
    </>
  );
}
