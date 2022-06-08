import React from 'react';
import { Box, Center, Text } from 'native-base';

export function ChatBubbleLeft({ content }: { content: string }) {
  return (
    <>
      <Box alignItems={'flex-start'} paddingY={'1'} paddingX={'3'}>
        {/* chat bubble left */}
        <Center
          maxWidth={'70%'}
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
      <Box alignItems={'flex-end'} paddingY={'1'} paddingX={'3'}>
        {/* chat bubble right */}
        <Center
          maxWidth={'70%'}
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
