import HollowAndSolidButton from '../../../general/buttons/hollowAndSolidButton.component';
import React from 'react';
import TextInput, {
  TextInputMultiline
} from '../../../general/forms/textInput.form';
import { TitleAndBackButtonHeader } from '../../../general/header/headers';
import {
  Box,
  Center,
  HStack,
  NativeBaseProvider,
  ScrollView,
  VStack
} from 'native-base';
import AddPhotoButton from '../../../general/buttons/addPhoto.Button';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../../types/navigationProps';
import serverItemFactoryStore from '../../../../model/itemStore/itemStore';
import { observer } from 'mobx-react-lite';
import { runInAction } from 'mobx';
import { documentUpdateHandler } from '../../../../model/common/utils';
import persistedUserData from '../../../../model/UserStore/persistedUserData';

export function SellOrEditItemMain() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'} position={'absolute'}>
        <VStack space={3} maxHeight={'full'} height={'full'}>
          {/* status bar */}
          <TitleAndBackButtonHeader
            title="Sell Item"
            onPressHandler={() => stack.goBack()}
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
            <TextInput
              VTextAlign={'top'}
              placeholder="Item Name"
              value={serverItemFactoryStore.name}
              onChangeHandler={(val) => {
                runInAction(() => {
                  serverItemFactoryStore.name = val;
                });
              }}
            />
            <TextInputMultiline
              placeholder="Description"
              value={serverItemFactoryStore.description}
              onChangeHandler={(val) => {
                runInAction(() => {
                  serverItemFactoryStore.description = val;
                });
              }}
            />
            <TextInput
              placeholder="Price"
              value={serverItemFactoryStore.price.toString()}
              VTextAlign={'top'}
              onChangeHandler={(val) => {
                runInAction(() => {
                  if (!isNaN(Number(val))) {
                    serverItemFactoryStore.price = Number(val);
                  }
                });
              }}
            />
          </VStack>

          {/* cancel and save button */}
          <Center marginY={'3'} flex={1} width={'full'} maxWidth={'full'}>
            <HollowAndSolidButton
              solidButtonValue="Sell"
              onPressCancelHandler={() => {
                stack.goBack();
              }}
              onPressSaveHandler={() => {
                serverItemFactoryStore.addToServer();
                serverItemFactoryStore.clear();
              }}
            />
          </Center>
        </VStack>
      </Box>
    </NativeBaseProvider>
  );
}

export const SellOrEditItemScreen = observer(SellOrEditItemMain);
