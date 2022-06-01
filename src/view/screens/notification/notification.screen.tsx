import React from 'react';
import { Box } from 'native-base';
import { TitleAndBackButtonHeader } from '../../general/header/headers';

export function NotificationScreen() {
  return (
    <Box safeArea width={'full'} height={'full'} position={'absolute'}>
      <TitleAndBackButtonHeader title="NotificationScreen" />
    </Box>
  );
}
