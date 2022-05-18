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

export default function LogInView() {
    return (
        <NativeBaseProvider>
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
                        Sign Up
                    </TextInput>
                </Box>
            </Center>
            <VStack
                maxHeight={'full'}
                height={'15%'}
                alignItems={'center'}
                space={5}
            >
                <TextInputMultiline placeholder="Full Name" />
                <TextInputMultiline placeholder="Username" />
                <TextInputMultiline placeholder="Email" />
                <TextInputMultiline placeholder="Password" />
                <TextInputMultiline placeholder="Confirm Password" />
            </VStack>
        </NativeBaseProvider>
    );
}