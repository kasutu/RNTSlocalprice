import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import {
  Box,
  Center,
  HStack,
  IconButton,
  NativeBaseProvider,
  Button,
  StatusBar,
  Text,
  VStack
} from 'native-base';

const arrowBack = <Icon name="arrow-back" size={30} color="black" />;

export default function AddLocationMap() {
  const [selected, setSelected] = React.useState(1);

  return (
    <NativeBaseProvider>
      {/* status bar */}
      <StatusBar barStyle="light-content" />
      <VStack safeArea space={3}>
        <Box>
          <HStack px="1" py="1" alignItems="center" w="100%">
            <HStack alignItems="center">
              <IconButton
                icon={arrowBack}
                onPress={() => console.log('pressed back button')}
              />
              <Text color="black" fontSize="20" fontWeight="bold">
                Add Location
              </Text>
            </HStack>
          </HStack>
        </Box>

        {/* map placeholder */}
        <Center backgroundColor={'indigo.500'} marginY={'1'} height={'80%'}>
          <Text color="black" fontSize="20" fontWeight="bold">
            MAP
          </Text>
        </Center>

        {/* cancel and save btn */}
        <Center safeAreaBottom>
          <HStack alignItems="center" safeAreaBottom maxH={'100%'}>
            <Center mx={'2.5'}>
              <Button
                width={'150'}
                height={'45'}
                variant={'outline'}
                onPress={() => console.log('CANCEL pressed')}
                _text={{ fontSize: '15', fontWeight: 'medium' }}
                borderRadius={'50'}
              >
                Cancel
              </Button>
            </Center>
            <Center mx={'2.5'}>
              <Button
                width={'150'}
                height={'45'}
                variant={'solid'}
                onPress={() => console.log('SAVE pressed')}
                _text={{ fontSize: '15', fontWeight: 'medium' }}
                borderRadius={'50'}
              >
                Save
              </Button>
            </Center>
          </HStack>
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}
