import React from 'react';
import { Box } from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';

export function OrderDetailsScreen() {
  return (
    <Box safeArea width={'full'} height={'full'} position={'absolute'}>
      <TitleAndBackButtonHeader title="OrderDetailsScreen" />
    </Box>
  );
}
