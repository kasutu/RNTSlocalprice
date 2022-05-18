import HollowAndSolidButton from '../../../components/hollowAndSolidButton.component';
import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import TextInput, {
  TextInputMultiline
} from '../../../components/forms/textInput.form';
import TitleAndBackButtonHeader from '../../../components/header/titleAndBackButton.header';
import { addIcon } from '../../../icons/localprice.icons';
import {
  Box,
  Center,
  HStack,
  IconButton,
  NativeBaseProvider,
  ScrollView,
  Text,
  VStack
} from 'native-base';
import AddPhotoButton from '../../../components/buttons/addPhoto.Button';

export default function SellOrEditItem() {
  return (
    <NativeBaseProvider>
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
          <TextInputMultiline
            placeholder="Description"
            VTextAlign={'top'}
            useTextArea={true}
          />
          <TextInput placeholder="Price" VTextAlign={'top'} />
          <TextInput placeholder="Discount in percent" VTextAlign={'top'} />
        </VStack>

        {/* cancel and save button */}
        <Center
          marginY={'3'}
          flex={1}
          bottom={'0'}
          position={'absolute'}
          width={'full'}
          maxWidth={'full'}
        >
          <HollowAndSolidButton solidButtonValue="Sell" />
        </Center>
      </VStack>
    </NativeBaseProvider>
  );
}
