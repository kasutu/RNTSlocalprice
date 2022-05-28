import HollowAndSolidButton from '../../../components/hollowAndSolidButton.component';
import React from 'react';
import TextInput, {
  TextInputMultiline
} from '../../../components/forms/textInput.form';
import TitleAndBackButtonHeader from '../../../components/header/headers';
import {
  Box,
  Center,
  HStack,
  NativeBaseProvider,
  ScrollView,
  VStack
} from 'native-base';
import AddPhotoButton from '../../../components/buttons/addPhoto.Button';

export default function SellOrEditItem() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <VStack space={3} maxHeight={'full'} height={'full'}>
          {/* status bar */}
          <TitleAndBackButtonHeader
            title="Sell Item"
            onPressHandler={() => console.log('Sell item back btn')}
          />

          {/* scrollable mini gallery */}
          <Box marginY={3}>
            <ScrollView
              maxHeight={'100px'}
              maxWidth={'full'}
              horizontal={true}
              contentContainerStyle={{ flexGrow: 1, alignItems: 'center' }}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              alignSelf={'center'}
            >
              <HStack space={1} marginLeft={5}>
                {/* add photo button */}
                <AddPhotoButton />

                {/* photo gallery */}
                <Center
                  width={'80px'}
                  height={'80px'}
                  backgroundColor={'amber.800'}
                >
                  Photo
                </Center>
                <Center
                  width={'80px'}
                  height={'80px'}
                  backgroundColor={'amber.800'}
                >
                  Photo
                </Center>
                <Center
                  width={'80px'}
                  height={'80px'}
                  backgroundColor={'amber.800'}
                >
                  Photo
                </Center>
                <Center
                  width={'80px'}
                  height={'80px'}
                  backgroundColor={'amber.800'}
                >
                  Photo
                </Center>
                <Center
                  width={'80px'}
                  height={'80px'}
                  backgroundColor={'amber.800'}
                >
                  Photo
                </Center>
              </HStack>
            </ScrollView>
          </Box>

          {/* text inputs */}
          <VStack
            maxHeight={'full'}
            height={'65%'}
            alignItems={'center'}
            space={3}
          >
            <TextInput placeholder="Item Name" VTextAlign={'top'} />
            <TextInputMultiline placeholder="Description" />
            <TextInput placeholder="Price" VTextAlign={'top'} />
            <TextInput placeholder="Discount in percent" VTextAlign={'top'} />
          </VStack>

          {/* cancel and save button */}
          <Center marginY={'3'} flex={1} width={'full'} maxWidth={'full'}>
            <HollowAndSolidButton solidButtonValue="Sell" />
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}
