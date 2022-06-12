import React from 'react';
import { Box, Center, Image, Pressable, Text, VStack } from 'native-base';
import { uuid } from '../../api/uuid/index.uuid';
import { Colors } from '../general/colors/localprice.colors';

class Item {
  constructor(
    public uri: string,
    public name: string,
    public price: number,
    public location: string,
    public id: string
  ) {}
}

const uri = 'https://etech.com.pk/wp-content/uploads/2020/07/ROG.jpg';
const name = 'Apple Magic Mouse adwiowdhahwdoadhoahdhoaiwdhoad';
const price = 6500;
const loc = 'iloilo';

const items: Item[] = [];

for (let i = 0; i < 10; i++) {
  items.push(new Item(uri, name, price, loc, uuid.v4()));
}

export function ItemCardsRenderer() {
  return (
    <>
      {items.map((item) => {
        return (
          <Box key={item.id} padding={2} width={'50%'} height={'250'}>
            <Pressable
              width={'full'}
              height={'full'}
              onPress={() => console.log('item pressed')}
            >
              <VStack flex={1}>
                <Center h={'160px'} w={'full'}>
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
