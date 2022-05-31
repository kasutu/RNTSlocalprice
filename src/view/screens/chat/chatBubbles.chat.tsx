import React from 'react';
import { Box, Center, Text } from 'native-base';

export function ChatBubbleLeft({ content }: { content: string }) {
  return (
    <>
      <Box padding={3} alignItems={'flex-start'}>
        {/* chat bubble left */}
        <Center
          maxWidth={'50%'}
          bg={'coolGray.300'}
          paddingX={5}
          paddingY={1}
          rounded={'full'}
        >
          <Text color={'black'}>{content}</Text>
        </Center>
      </Box>
    </>
  );
}

export function ChatBubbleRight({ content }: { content: string }) {
  return (
    <>
      <Box padding={3} alignItems={'flex-end'}>
        {/* chat bubble right */}
        <Center
          maxWidth={'50%'}
          bg={'#8244D5'}
          paddingX={5}
          paddingY={1}
          rounded={'full'}
        >
          <Text color={'white'}>{content}</Text>
        </Center>
      </Box>
    </>
  );
}
