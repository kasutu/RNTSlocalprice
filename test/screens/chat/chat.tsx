import React from 'react';
import { Box, Container, ScrollView, Text, VStack } from 'native-base';
import { TitleHeader } from '../../../src/view/general/header/headers';

export function ChatScreenTest() {
  return (
    <>
      <Box safeArea size={'full'}>
        <TitleHeader title="Chat" />

        <VStack bg={'amber.700'}>
          {/* MAKE A LOOP THAT RETURNS THE CHAT CARD */}

          {
            <Box bg={'blue.300'}>
              <Container bg={'muted.300'}>
                <Text>Hello</Text>
              </Container>
            </Box>
          }
        </VStack>

        <Box height={'60px'} bg={'amber.700'}>
          bottom
        </Box>
      </Box>
    </>
  );
}
