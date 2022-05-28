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
      <Box>
        <VStack space={3} maxHeight={'full'} height={'full'}>
          <TitleAndBackButtonHeader
            title=" "
            onPressHandler={() => console.log('Sign up back btn')}
          />
          <Center marginX={20} marginY={'3'} width={'200px'} height={'50px'}>
            <Box>
              <Text color={'#9B69DD'} fontSize={24}>
                Reset Password
              </Text>
            </Box>
          </Center>
          <VStack
            maxHeight={'full'}
            height={'15%'}
            alignItems={'center'}
            space={5}
          >
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
          <Center
            marginY={'3'}
            bottom={'40px'}
            position={'absolute'}
            width={'full'}
            maxWidth={'full'}
          >
            <HollowAndSolidButton solidButtonValue="Reset" />
            <Box>
              <Link
                isExternal
                _text={{ color: 'blue.400' }}
                onPress={() => console.log('sign in btn click')}
              >
                Don't have an account?
              </Link>
            </Box>
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
