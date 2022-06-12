import React, { useEffect, useState } from 'react';
import {
  Box,
  Center,
  Container,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack
} from 'native-base';
import { PlusIcon, MinusIcon } from '../general/icons/localprice.icons';

import shoppingBagStore from '../../model/shoppingBagStrore/shoppingBagStore';

import { Colors } from '../general/colors/localprice.colors';
import { runInAction } from 'mobx';
import { RemoveFromArr } from '../../model/common/utils';
import { observer } from 'mobx-react-lite';

export class ShoppingBagItem {
  constructor(
    public id: string,
    public uri: string,
    public name: string,
    public price: number,
    public location: string,
    public qty: number,
    public description: string
  ) {}

  public plusQty(): void {
    this.qty++;
  }

  public minusQty(): void {
    if (this.qty !== 1) {
      this.qty--;
    }
  }

  public getThis(): this {
    return this;
  }
}

export function ShoppingBag({ override }: { override?: boolean }) {
  return (
    <>
      {shoppingBagStore.data.map((item) => {
        return (
          <Box key={item.id} paddingY={1}>
            <VStack space={5}>
              <HStack space={2}>
                {/* items that one shop owns  */}
                <RadioButton
                  override={override}
                  on={() => {
                    runInAction(() => {
                      shoppingBagStore.selectedItems.push(item);
                      shoppingBagStore.compute();
                    });
                  }}
                  off={() => {
                    runInAction(() => {
                      RemoveFromArr(shoppingBagStore.selectedItems, item);
                      shoppingBagStore.compute();
                    });
                  }}
                />

                <Center
                  width={'20'}
                  height={'20'}
                  backgroundColor={'muted.500'}
                  borderRadius={10}
                >
                  <Image
                    resizeMode={'contain'}
                    borderRadius={10}
                    source={{
                      uri: item.uri
                    }}
                    alt="Alternate Text"
                    size="full"
                  />
                </Center>
                <Box flex={1}>
                  {/* CARD DETAILS AND DESCRIPTION */}
                  <Box maxH={'20'}>
                    {/* description */}
                    <Text fontWeight={'medium'} fontSize={15} numberOfLines={1}>
                      {item.name}
                    </Text>
                  </Box>
                  <HStack>
                    <Box flex={1}>
                      <VStack>
                        <Container>
                          {/* price */}
                          <Box>
                            <Text
                              fontWeight={'normal'}
                              fontSize={15}
                              color={'#8244d5'}
                            >
                              {`P ${item.price}`}
                            </Text>
                          </Box>
                        </Container>

                        <Box>
                          <Text fontSize={12} color={'gray.500'}>
                            {item.location}
                          </Text>
                        </Box>
                      </VStack>
                    </Box>
                    <Box flex={1} justifyContent={'flex-end'}>
                      <Center>
                        {/* button component */}
                        <QtyButtons
                          add={() => {
                            item.plusQty();
                            shoppingBagStore.compute();
                          }}
                          minus={() => {
                            item.minusQty();
                            shoppingBagStore.compute();
                          }}
                          item={item}
                        />
                      </Center>
                    </Box>
                  </HStack>
                </Box>
              </HStack>
            </VStack>
          </Box>
        );
      })}
    </>
  );
}

export const ShoppingBagItems = observer(ShoppingBag);

function RadioButton({
  on,
  off,
  override
}: {
  on: () => void;
  off: () => void;
  override?: boolean;
}) {
  const [selected, setSelected] = useState<boolean>(
    override ? override : false
  );

  return (
    <>
      <Center>
        <Pressable
          onPress={() => {
            if (!selected) {
              on();
              setSelected(true);
            } else {
              off();
              setSelected(false);
            }
          }}
        >
          <Box
            width={'10px'}
            height={'10px'}
            rounded={'full'}
            bg={selected ? Colors.DarkViolet : Colors.LightViolet}
          ></Box>
        </Pressable>
      </Center>
    </>
  );
}

function QtyButtons({
  add,
  minus,
  item
}: {
  add: () => void;
  minus: () => void;
  item: ShoppingBagItem;
}) {
  const [currentQty, setCurrentQty] = useState<number>(item.qty);

  return (
    <>
      <Box bg={'dark.700'} paddingX={1} rounded={'full'}>
        {/* buttons */}
        <HStack space={2} alignItems={'center'}>
          <Pressable
            rounded={'full'}
            bg={Colors.HeartColor}
            width={'20px'}
            height={'20px'}
            justifyContent={'center'}
            alignItems={'center'}
            onPress={() => {
              minus();
              setCurrentQty(item.qty);
            }}
          >
            <Icon as={MinusIcon} color={Colors.White} size={'20px'} />
          </Pressable>
          <Center paddingX={2}>
            <Text fontSize={18}>{currentQty}</Text>
          </Center>
          <Pressable
            rounded={'full'}
            bg={Colors.HeartColor}
            width={'20px'}
            height={'20px'}
            justifyContent={'center'}
            alignItems={'center'}
            onPress={() => {
              add();
              setCurrentQty(item.qty);
            }}
          >
            <Icon as={PlusIcon} color={Colors.White} size={'20px'} />
          </Pressable>
        </HStack>
      </Box>
    </>
  );
}
