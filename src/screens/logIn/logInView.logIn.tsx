import React from 'react';
import {
    Center,
    NativeBaseProvider,
    VStack,
} from 'native-base';

import TitleAndBackButtonHeader from '../../components/header/titleAndBackButton.header';
import HollowAndSolidButton from '../../components/hollowAndSolidButton.component';
import { TextInputMultiline } from '../../components/forms/textInput.form';

export default function LogInView() {
    return (
        <NativeBaseProvider>
            <TitleAndBackButtonHeader
                title=" "
                onPressHandler={() => console.log('Sign in back btn')}
            />
            <Center
                marginX={20}
                marginY={'3'}
                width={'200px'}
                height={'200px'}
                backgroundColor={'violet.300'}
            > Logo </Center>
            <VStack
                maxHeight={'full'}
                height={'15%'}
                alignItems={'center'}
                space={5}
            >
                <TextInputMultiline placeholder="Email" />
                <TextInputMultiline placeholder="Password" />
            </VStack>
            <Center
                marginY={'3'}
                flex={1}
                bottom={'0'}
                position={'absolute'}
                width={'full'}
                maxWidth={'full'}
            >
                <HollowAndSolidButton solidButtonValue="Log In" />
            </Center>
        </NativeBaseProvider>
    );
}