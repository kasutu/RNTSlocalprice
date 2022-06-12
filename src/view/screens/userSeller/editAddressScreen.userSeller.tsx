import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import React, { useState } from 'react';
import TextInput from '../../general/forms/textInput.form';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import { Box, Center, NativeBaseProvider, View, VStack } from 'native-base';

import userStore from '../../../model/UserStore/UserStore';
import { observer } from 'mobx-react-lite';
import { MapViewComponent } from '../../general/map/mapViewComponent.map';
import { Pressable, StyleSheet } from 'react-native';
import { Colors } from '../../general/colors/localprice.colors';
import { runInAction } from 'mobx';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types/navigationProps';
import persistedUserData from '../../../model/UserStore/persistedUserData';

export function EditAddress() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <VStack space={3} maxHeight={'full'}>
          {/* status bar */}
          <TitleAndBackButtonHeader
            title="Edit location"
            onPressHandler={() => {
              persistedUserData.cacheData();
              stack.goBack();
            }}
          />

          {/* text inputs */}
          <VStack
            maxHeight={'60%'}
            justifyContent={'center'}
            alignItems={'center'}
            space={4}
            marginY={'6'}
          >
            <TextInput
              value={userStore.fullName}
              placeholder="Full Name"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userStore.fullName = val;
                })
              }
            />
            <TextInput
              value={userStore.contactNumber}
              placeholder="Mobile Number"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userStore.contactNumber = val;
                })
              }
            />
            <TextInput
              value={userStore.email}
              placeholder="Email"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userStore.email = val;
                })
              }
            />
            <TextInput
              value={userStore.brgy}
              placeholder="Brgy/ House Number"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userStore.brgy = val;
                })
              }
            />
            <TextInput
              value={userStore.town}
              placeholder="Town"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userStore.town = val;
                })
              }
            />
            <TextInput
              value={userStore.city}
              placeholder="City"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userStore.city = val;
                })
              }
            />
            <TextInput
              value={userStore.zipCode}
              placeholder="Zip Code"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userStore.zipCode = val;
                })
              }
            />
          </VStack>
        </VStack>
        {/* map placeholder */}
        <View style={styles.container}>
          <Pressable
            style={styles.placeholder}
            onPress={() => stack.navigate('MapScreen')}
          >
            <MapViewComponent />
          </Pressable>
        </View>

        {/* cancel and save button */}
        <Center padding={3}>
          <HollowAndSolidButton
            onPressCancelHandler={() => stack.goBack()}
            onPressSaveHandler={() => {
              persistedUserData.cacheData();
              userStore.addToServer();
              userStore.clear();
            }}
          />
        </Center>
      </Box>
    </NativeBaseProvider>
  );
}

export const EditAddressScreen = observer(EditAddress);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  placeholder: {
    flex: 1,
    width: '90%'
  }
});
