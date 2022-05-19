import React from 'react';
import {
    Box,
    Center,
    NativeBaseProvider,
    VStack,
} from 'native-base';

import TitleAndBackButtonHeader from '../../components/header/titleAndBackButton.header';
import { TextInputMultiline } from '../../components/forms/textInput.form';
import { TextInput } from 'react-native';
import HollowAndSolidButton from '../../components/hollowAndSolidButton.component';

export default function LogInView() {
    return (
        <NativeBaseProvider>
            <VStack space={3} maxHeight={'full'} height={'full'}>
                <TitleAndBackButtonHeader
                    title=" "
                    onPressHandler={() => console.log('Sign up back btn')}
                />
                <Center
                    marginX={20}
                    marginY={'3'}
                    width={'200px'}
                    height={'50px'}
                >
                    <Box>
                        <TextInput>
                            Reset Password
                        </TextInput>
                    </Box>
                </Center>
                <VStack
                    maxHeight={'full'}
                    height={'15%'}
                    alignItems={'center'}
                    space={5}
                >
                    <TextInputMultiline placeholder="Email" />
                    <TextInputMultiline placeholder="New Password" />
                    <TextInputMultiline placeholder="Confirm Password" />
                </VStack>
                <Center
                    marginY={'3'}
                    flex={1}
                    bottom={'5'}
                    position={'absolute'}
                    width={'full'}
                    maxWidth={'full'}
                >
                    <HollowAndSolidButton solidButtonValue="Reset" />
                </Center>
            </VStack>
        </NativeBaseProvider >
    );
}