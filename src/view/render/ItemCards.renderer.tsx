import React from 'react';
import { Box, Center, Image, Pressable, Text, VStack } from 'native-base';
import { Colors } from '../general/colors/localprice.colors';
import { observer } from 'mobx-react-lite';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { StackParams } from '../../types/navigationProps';
import currentItemStore from '../../model/itemViewStore/itemViewstore';
import { runInAction } from 'mobx';

export class Item {
  constructor(
    public uri: string,
    public name: string,
    public price: number,
    public location: string,
    public id: string
  ) {}
}

export function ItemCards({ items }: { items: Item[] }) {
  const stack = useNavigation<NativeStackNavigationProp<StackParams>>();

  return (
    <>
      {items.map((item) => {
        return (
          <Box key={item.id} padding={2} width={'50%'} height={'250'}>
            <Pressable
              width={'full'}
              height={'full'}
              onPress={() => {
                // navigate to item view

                runInAction(() => {
                  currentItemStore.item = item;
                  stack.navigate('ItemScreen');
                });
              }}
            >
              <VStack flex={1}>
                <Center h={'160px'} w={'full'}>
                  <Image
                    resizeMode={'contain'}
                    borderRadius={10}
                    source={{
                      uri: item.uri
                    }}
                    alt={item.name}
                    size="full"
                  />
                </Center>
                <Box w={'full'} paddingY={1.5}>
                  <Text fontSize={13} numberOfLines={1}>
                    {item.name}
                  </Text>
                </Box>
                <Box w={'full'}>
                  <Text
                    color={Colors.DarkViolet}
                    fontSize={12}
                    fontWeight={'semibold'}
                  >
                    {`P ${item.price}`}
                  </Text>
                </Box>
                <Box w={'full'}>
                  <Text color={'gray.500'} fontSize={10}>
                    {item.location}
                  </Text>
                </Box>
              </VStack>
            </Pressable>
          </Box>
        );
      })}
    </>
  );
}

export const ItemCardsRenderer = observer(ItemCards);
