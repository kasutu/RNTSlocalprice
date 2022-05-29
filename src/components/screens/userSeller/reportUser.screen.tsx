import React from 'react';
import TitleAndBackButtonHeader from '../../general/header/headers';
import { Box, Center, NativeBaseProvider, VStack } from 'native-base';
import { TextInputMultiline } from '../../general/forms/textInput.form';
import SolidButton from '../../general/buttons/solid.button';

export function ReportUserScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <VStack space={3} maxHeight={'full'}>
          {/* status bar */}
          <TitleAndBackButtonHeader
            title="Report User"
            onPressHandler={() => console.log('all good boi')}
          />

          {/* text inputs */}
          <Box
            maxHeight={'70%'}
            height={'full'}
            marginY={'6'}
            alignItems={'center'}
          >
            <TextInputMultiline placeholder="Reason for report" />
          </Box>

          {/* cancel and save button */}
          <Center marginY={'3'}>
            <SolidButton
              value="Submit Report"
              color="#F01717"
              onPressHandler={() => console.log('it worked')}
            />
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
