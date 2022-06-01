import React from 'react';
import { Box } from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';

export function CheckoutScreen() {
  return (
    <Box safeArea width={'full'} height={'full'} position={'absolute'}>
      <TitleAndBackButtonHeader title="CheckoutScreen" />
    </Box>
  );
}
