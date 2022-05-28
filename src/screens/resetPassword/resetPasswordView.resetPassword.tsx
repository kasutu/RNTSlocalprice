import React from 'react';
import {
  Box,
  Center,
  Icon,
  Input,
  Link,
  NativeBaseProvider,
  Text,
  VStack
} from 'native-base';

import TitleAndBackButtonHeader from '../../components/header/headers';
import HollowAndSolidButton from '../../components/hollowAndSolidButton.component';
import TextInput from '../../components/forms/textInput.form';
import { InputColor } from '../../colors/localprice.colors';
import { eyeIcon } from '../../icons/localprice.icons';

export default function ResetPasswordView() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        {/* HEADER */}
        <TitleAndBackButtonHeader
          onPressHandler={() => console.log(' back btn')}
        />

        {/* INPUTS */}
        <VStack space={5} flex={1} alignItems={'center'}>
          <Box marginBottom={'10'} alignItems={'center'} width={'full'}>
            <Text color={'#9B69DD'} fontSize={24} fontWeight={'medium'}>
              Reset Password
            </Text>
          </Box>

          <TextInput placeholder="Email" />
          <Input
            variant="filled"
            placeholder={'New Password'}
            placeholderTextColor={'black'}
            maxWidth={'75%'}
            height={'8'}
            bgColor={InputColor}
            borderColor={InputColor}
            borderRadius={'5'}
            textAlignVertical={'center'}
            InputRightElement={<Icon mr={2} as={eyeIcon} />}
          />
          <Input
            variant="filled"
            placeholder={'Confirm Password'}
            placeholderTextColor={'black'}
            maxWidth={'75%'}
            height={'8'}
            bgColor={InputColor}
            borderColor={InputColor}
            borderRadius={'5'}
            textAlignVertical={'center'}
            InputRightElement={<Icon mr={2} as={eyeIcon} />}
          />
        </VStack>

        {/* SAVE AND CANCEL BUTTON */}
        <Center marginBottom={'5'}>
          <HollowAndSolidButton solidButtonValue="Reset" />
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}
