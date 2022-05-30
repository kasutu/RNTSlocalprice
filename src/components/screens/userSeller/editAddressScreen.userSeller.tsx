import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import React from 'react';
import TextInput from '../../general/forms/textInput.form';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import { Box, Center, NativeBaseProvider, Text, VStack } from 'native-base';

export function EditAddressScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <VStack space={3} maxHeight={'full'}>
          {/* status bar */}
          <TitleAndBackButtonHeader title="Edit location" />

          {/* text inputs */}
          <VStack
            maxHeight={'60%'}
            justifyContent={'center'}
            alignItems={'center'}
            space={4}
            marginY={'6'}
          >
            <TextInput placeholder="Full Name" />
            <TextInput placeholder="Mobile Number" />
            <TextInput placeholder="Email" />
            <TextInput placeholder="Brgy/ House Number" />
            <TextInput placeholder="Town" />
            <TextInput placeholder="City" />
            <TextInput placeholder="Postal Code" />
          </VStack>

          {/* map placeholder */}
          <Center
            backgroundColor={'indigo.500'}
            height={'200'}
            width={'75%'}
            alignSelf={'center'}
          >
            <Text color="black" fontSize="20" fontWeight="bold">
              MAP
            </Text>
          </Center>

          {/* cancel and save button */}
          <Center marginY={'3'}>
            <HollowAndSolidButton />
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
