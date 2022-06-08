import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import React, { useState } from 'react';
import TextInput from '../../general/forms/textInput.form';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import {
  Box,
  Center,
  NativeBaseProvider,
  Pressable,
  Text,
  VStack
} from 'native-base';
import { MapViewComponent } from '../../general/map/mapViewComponent.map';
import { View } from 'react-native';
import userStore from '../../../model/UserStore/UserStore';

export function EditAddressScreen() {
  const [value, setValue] = useState('');

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
            <TextInput
              placeholder="Full Name"
              onChangeHandler={(val) => (userStore.fullName = val)}
            />
            <TextInput
              placeholder="Mobile Number"
              onChangeHandler={(val) => (userStore.contactNumber = val)}
            />
            <TextInput
              placeholder="Email"
              onChangeHandler={(val) => (userStore.email = val)}
            />
            <TextInput
              placeholder="Brgy/ House Number"
              onChangeHandler={(val) => (userStore.brgy = val)}
            />
            <TextInput
              placeholder="Town"
              onChangeHandler={(val) => (userStore.town = val)}
            />
            <TextInput
              placeholder="City"
              onChangeHandler={(val) => (userStore.city = val)}
            />
            <TextInput
              placeholder="Zip Code"
              onChangeHandler={(val) => (userStore.zipCode = val)}
            />
          </VStack>

          {/* map placeholder */}
          <Center height={'200'} width={'75%'} alignSelf={'center'}></Center>

          {/* cancel and save button */}
          <Center marginY={'3'}>
            <HollowAndSolidButton
              onPressSaveHandler={() => {
                userStore.addToServer();
                userStore.clear();
              }}
            />
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
