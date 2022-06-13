import React from 'react';
import {
  Box,
  Center,
  Container,
  HStack,
  Image,
  Text,
  VStack
} from 'native-base';
import { observer } from 'mobx-react-lite';
import { Item } from './ItemCards.renderer';
import { ShoppingBagItem } from '../../model/common/classes/item';

function CheckoutItemsMain({ items }: { items: Item[] | ShoppingBagItem[] }) {
  return (
    <>
      {items.map((item) => {
        return (
          <Box key={item.id} paddingY={1}>
            <VStack space={5}>
              <HStack space={2}>
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

export const CheckoutItems = observer(CheckoutItemsMain);
