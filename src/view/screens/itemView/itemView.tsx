import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  NativeBaseProvider,
  Pressable,
  ScrollView,
  Text,
  VStack
} from 'native-base';
import React from 'react';
import { SearchHeader } from '../../general/header/headers';
import HollowAndSolidButton from '../../general/buttons/hollowAndSolidButton.component';
import { observer } from 'mobx-react-lite';
import { LoadingScreen } from '../index.screens';
import currentItemStore from '../../../model/itemViewStore/itemViewstore';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../../types/navigationProps';
import { GoToCartButton } from '../../general/buttons/checkOut.button';
import { CheckoutStack } from '../../../controller/router/checkoutStack';

export function ItemScreenMain() {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  if (currentItemStore.item.id === '') {
    return <LoadingScreen />;
  } else {
    return (
      <NativeBaseProvider>
        <Box safeArea width={'full'} height={'full'} position={'absolute'}>
          {/* search header component */}
          <SearchHeader
            onPressHandler={() => {
              stack.goBack();
              currentItemStore.clear();
            }}
          />

          <VStack space={5} flex={1}>
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* main item */}
              <VStack h={'full'}>
                <Box h={'350'}>
                  {/* image placeholder */}
                  <Pressable
                    flex={1}
                    justifyContent={'center'}
                    alignItems={'center'}
                  >
                    <Image
                      resizeMode={'contain'}
                      borderRadius={10}
                      source={{
                        uri: currentItemStore.item.uri
                      }}
                      alt={currentItemStore.item.name}
                      size="90%"
                    />
                  </Pressable>
                </Box>

                <Box padding={'2'}>
                  <Container maxH={'50'}>
                    {/* description */}
                    <Text fontWeight={'medium'} fontSize={'lg'}>
                      {currentItemStore.item.name}
                    </Text>
                  </Container>
                  <HStack>
                    <Box flex={1}>
                      <VStack>
                        <Container>
                          {/* price */}
                          <Box>
                            <Text
                              fontWeight={'medium'}
                              fontSize={'xl'}
                              color={'#8244d5'}
                            >
                              {currentItemStore.item.price}
                            </Text>
                          </Box>
                        </Container>
                        <Box>
                          {/* ratings and location */}
                          <Text> </Text>
                          <Text color={'gray.500'}>
                            {currentItemStore.item.location}
                          </Text>
                        </Box>
                      </VStack>
                    </Box>
                    <Box
                      flex={1}
                      justifyContent={'center'}
                      alignItems={'flex-end'}
                    >
                      {/* buttons */}

                      <Pressable
                        width={'100'}
                        height={'6'}
                        onPress={() =>
                          console.log('show location comming soon')
                        }
                        borderRadius={'50'}
                        borderWidth={'1'}
                        borderColor={'#8244d5'}
                        justifyContent={'center'}
                        alignItems={'center'}
                      >
                        <Text color={'#8244d5'} fontSize={'10'}>
                          Show Location
                        </Text>
                      </Pressable>
                    </Box>
                  </HStack>
                </Box>

                <Box padding={'2'}>
                  {/* details */}

                  <Text fontWeight={'medium'} fontSize={'lg'}>
                    Details
                  </Text>
                  <Text fontWeight={'normal'} fontSize={'sm'}>
                    {'Details comming soon'}
                  </Text>
                </Box>
              </VStack>
            </ScrollView>
          </VStack>

          {/* buttons */}
          <RenderIfAddedToCart condition={currentItemStore.isAdded} />
        </Box>
      </NativeBaseProvider>
    );
  }
}

export const ItemScreen = observer(ItemScreenMain);

function RenderIfAddedToCart({ condition }: { condition: boolean }) {
  const navigation = useNavigation<NativeStackNavigationProp<StackParams>>();

  if (condition) {
    return (
      <>
        <Center paddingY={'3'} backgroundColor={'white'}>
          <GoToCartButton
            onPressHandler={() => {
              navigation.push('CheckoutStack');
              currentItemStore.clear();
            }}
          />
        </Center>
      </>
    );
  } else {
    return (
      <>
        {/* buttons */}
        <Center paddingY={'3'} backgroundColor={'white'}>
          <HollowAndSolidButton
            hollowButtonValue="Buy Now"
            solidButtonValue="Add to Cart"
            onPressSaveHandler={() => currentItemStore.addToCart()}
            onPressCancelHandler={() => currentItemStore.buyNow()}
          />
        </Center>
      </>
    );
  }
}
