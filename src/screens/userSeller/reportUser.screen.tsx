import React from 'react';
import TitleAndBackButtonHeader from '../../components/header/titleAndBackButton.header';
import { Box, Center, NativeBaseProvider, VStack } from 'native-base';
import TextInput from '../../components/forms/textInput.form';
import SolidButton from '../../components/buttons/solid.button';

export default function ReportUser() {
  return (
    <NativeBaseProvider>
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
          <TextInput
            placeholder="Reason for report"
            height={'50%'}
            VTextAlign={'top'}
          />
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
    </NativeBaseProvider>
  );
}
