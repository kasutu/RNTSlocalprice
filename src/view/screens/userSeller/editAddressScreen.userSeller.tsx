import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import React from 'react';
import TextInput from '../../general/forms/textInput.form';
import { TitleAndBackButtonHeader } from '../../general/header/headers';
import { Box, Center, NativeBaseProvider, View, VStack } from 'native-base';

import { observer } from 'mobx-react-lite';
import { MapViewComponent } from '../../general/map/mapViewComponent.map';
import { Pressable, StyleSheet } from 'react-native';
import { runInAction } from 'mobx';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types/navigationProps';
import persistedUserData from '../../../model/UserStore/persistedUserData';
import { userState } from '../../../model/localUserDataStore/localUserDataStore';
import { triggerAlert } from '../logIn/logInView.logIn';

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
              value={userState.state.fullName}
              placeholder="Full Name"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userState.state.fullName = val;
                })
              }
            />
            <TextInput
              value={userState.state.contactNumber}
              placeholder="Mobile Number"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userState.state.contactNumber = val;
                })
              }
            />
            <TextInput
              value={userState.state.email}
              placeholder="Email"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userState.state.email = val;
                })
              }
            />
            <TextInput
              value={userState.state.brgy}
              placeholder="Brgy/ House Number"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userState.state.brgy = val;
                })
              }
            />
            <TextInput
              value={userState.state.town}
              placeholder="Town"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userState.state.town = val;
                })
              }
            />
            <TextInput
              value={userState.state.city}
              placeholder="City"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userState.state.city = val;
                })
              }
            />
            <TextInput
              value={userState.state.zipCode.toString()}
              placeholder="Zip Code"
              onChangeHandler={(val) =>
                runInAction(() => {
                  userState.state.zipCode = val;
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
              userState.sync();
              triggerAlert('Hooreeyyy!', 'New Address Added!', [
                {
                  text: "I'll take a look",
                  onPress() {
                    stack.goBack();
                  }
                }
              ]);
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
