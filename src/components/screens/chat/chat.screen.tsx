import React from 'react';
import { Box } from 'native-base';
import { TitleHeader } from '../../general/header/headers';

export function ChatScreen() {
  return (
    <>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <TitleHeader title="Chat" />
      </Box>
    </>
  );
}
