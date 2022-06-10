import React from 'react';
import {
  Box,
  Center,
  Checkbox,
  Container,
  HStack,
  Icon,
  Image,
  Pressable,
  Text,
  VStack
} from 'native-base';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { PlusIcon, MinusIcon } from '../general/icons/localprice.icons';
import { uuid } from '../../api/uuid/index.uuid';

class Item {
  constructor(
    public uri: string,
    public name: string,
    public description: string,
    public price: number,
    public location: string,
    public qty: number,
    public id: string
  ) {}
}

const uri = 'https://etech.com.pk/wp-content/uploads/2020/07/ROG.jpg';
const name = 'Apple Magic Mouse adwiowdhahwdoadhoahdhoaiwdhoad';
const price = 6500;
const loc = 'iloilo';
const description =
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, molestias. Odit non accusamus quam, sit porro illo nemo optio est excepturi. Veniam sapiente, aliquid nobis sit ipsa eligendi laudantium odio?';

const items: Item[] = [];

for (let i = 0; i < 10; i++) {
  items.push(new Item(uri, name, description, price, loc, 1, uuid.v4()));
}

export function ShoppingBagItems() {
  return (
    <>
      {items.map((item) => {
        return (
          <Box key={item.id} paddingY={1}>
            <VStack space={5}>
              <HStack space={2}>
                {/* items that one shop owns  */}
                <Center>
                  <Checkbox
                    accessibilityLabel="all"
                    color={'#9B69DD'}
                    borderRadius={'full'}
                    borderColor={'#9B69DD'}
                    style={{
                      width: 15,
                      height: 15
                    }}
                  />
                </Center>

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
                        {/* buttons */}
                        <HStack space={2} alignItems={'center'}>
                          <Pressable
                            rounded={'full'}
                            bg={Colors.HeartColor}
                            width={'20px'}
                            height={'20px'}
                            justifyContent={'center'}
                            alignItems={'center'}
                          >
                            <Icon
                              as={MinusIcon}
                              color={Colors.White}
                              size={'20px'}
                            />
                          </Pressable>
                          <Center paddingX={2}>
                            <Text fontSize={18}>{item.qty}</Text>
                          </Center>
                          <Pressable
                            rounded={'full'}
                            bg={Colors.HeartColor}
                            width={'20px'}
                            height={'20px'}
                            justifyContent={'center'}
                            alignItems={'center'}
                          >
                            <Icon
                              as={PlusIcon}
                              color={Colors.White}
                              size={'20px'}
                            />
                          </Pressable>
                        </HStack>
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
