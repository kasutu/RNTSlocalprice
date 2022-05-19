import React from 'react';
import {
    Box,
    Button,
    Center,
    HStack,
    Icon,
    Input,
    Link,
    NativeBaseProvider,
    Text,
    VStack,
} from 'native-base';

import TitleAndBackButtonHeader from '../../components/header/titleAndBackButton.header';
import TextInput from '../../components/forms/textInput.form';
import SolidButton from './../../components/buttons/solid.button';
import { InputColor } from './../../colors/localprice.colors';
import { eyeIcon } from '../../icons/localprice.icons';

export default function LogInView() {
    return (
        <NativeBaseProvider>
            <Box
                safeArea
                width={'full'}
                height={'full'}>
                <VStack space={2}
                    width={'full'}
                    height={'full'}>
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
                        alignItems={'center'}
                        space={5}
                    >
                        <TextInput placeholder="Email" />
                        <Input
                            variant="filled"
                            placeholder={'Password'}
                            placeholderTextColor={'black'}
                            maxWidth={'75%'}
                            height={'8'}
                            bgColor={InputColor}
                            borderColor={InputColor}
                            borderRadius={'5'}
                            textAlignVertical={'center'}
                            InputRightElement={eyeIcon}
                        />
                    </VStack>
                    <Box
                        width={'75%'}
                        alignItems={'flex-end'}
                        alignSelf={'center'}
                    >
                        <Link
                            isExternal _text={{ color: 'blue.400' }}
                            onPress={() => console.log('sign up btn click')}>
                            Forgot Password
                        </Link>
                    </Box>
                    <Center
                        marginY={'3'}
                        flex={1}
                        bottom={'0'}
                        position={'absolute'}
                        width={'full'}
                        maxWidth={'full'}>
                        <SolidButton value="Log In" />
                        <Box>
                            <Text>
                                Don't have an account?{" "}
                                <Link
                                    isExternal _text={{ color: 'blue.400' }}
                                    onPress={() => console.log('sign up btn click')}>
                                    Sign up
                                </Link>
                            </Text>
                        </Box>
                    </Center>
                </VStack>
            </Box>
        </NativeBaseProvider >
    );
}