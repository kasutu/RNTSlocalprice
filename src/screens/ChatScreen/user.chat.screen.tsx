import {
  NativeBaseProvider,
  VStack,
  Text,
  HStack,
  Box,
  Avatar,
  ScrollView
} from 'native-base';
import React from 'react';
import { TitleHeader } from '../../components/header/headers';

export default function UserChatScreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}>
        <TitleHeader title="Chat" />

        {/* Select all order status row */}
        <HStack justifyContent={'center'} space={2}>
          <Box
            mt={6}
            w="20"
            h="4"
            bg="violet.600"
            alignSelf={'center'}
            rounded="full"
          >
            <Text fontSize={'11'} alignSelf={'center'} color={'white'}>
              All
            </Text>
          </Box>

          <Box
            mt={6}
            w="20"
            h="4"
            bg="violet.300"
            alignSelf={'center'}
            rounded="full"
          >
            <Text fontSize={'11'} alignSelf={'center'}>
              Orders
            </Text>
          </Box>

          <Box
            mt={6}
            w="20"
            h="4"
            bg="violet.300"
            alignSelf={'center'}
            rounded="full"
          >
            <Text fontSize={'11'} alignSelf={'center'}>
              Completed
            </Text>
          </Box>

          <Box
            mt={6}
            w="20"
            h="4"
            bg="violet.300"
            alignSelf={'center'}
            rounded="full"
          >
            <Text fontSize={'11'} alignSelf={'center'}>
              Canceled
            </Text>
          </Box>
        </HStack>

        {/* <Box aborderRadius={"full"} bg={"violet.300"} rounded={"full"} size={"2"}></Box>*/}
        {/*<aText color={"gray.300"} left={"10"}fontSize={"2xs"}>now</Text>*/}

        {/* Username and Message */}
        <ScrollView>
          <VStack w={'full'}>
            <VStack space={'12'} marginY={'6'} alignItems="center" w={'full'}>
              <HStack space={'2'}>
                <Box h={'16'} w={'16'}>
                  <Avatar
                    bg="green.500"
                    size={'lg'}
                    source={{
                      uri: 'https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg'
                    }}
                  ></Avatar>
                </Box>

                <Box w="56" h="20">
                  <Text fontWeight={'bold'} fontSize={'22'} noOfLines={1}>
                    Dave Jhaeson Alivio
                  </Text>
                  <Text alignSelf={'baseline'} color={'gray.600'}>
                    You: Sml sir?
                  </Text>
                  <Box
                    mt={3}
                    w="32"
                    h="4"
                    bg="violet.600"
                    alignSelf={'center'}
                    rounded="full"
                  >
                    <Text fontSize={'11'} alignSelf={'center'} color={'white'}>
                      Order/s Confirmed
                    </Text>
                  </Box>
                </Box>

                <Box h={'16'} w={'16'} alignItems={'center'}>
                  <HStack space={'2'} alignItems={'center'}>
                    <Box
                      borderRadius={'full'}
                      bg={'violet.300'}
                      rounded={'full'}
                      size={'2'}
                    ></Box>
                    <Text fontSize={'10'}>Now</Text>
                  </HStack>
                </Box>
              </HStack>

              <HStack space={'2'}>
                <Box h={'16'} w={'16'}>
                  <Avatar
                    bg="green.500"
                    size={'lg'}
                    source={{
                      uri: 'https://www.looper.com/img/gallery/famous-people-who-cant-stand-tyler1/intro-1590678357.jpg'
                    }}
                  ></Avatar>
                </Box>

                <Box w="56" h="20">
                  <Text fontWeight={'bold'} fontSize={'22'} noOfLines={1}>
                    Eivoryl
                  </Text>
                  <Text alignSelf={'baseline'} color={'gray.600'}>
                    I want her back.
                  </Text>
                  <Box
                    mt={3}
                    w="32"
                    h="4"
                    bg="red.600"
                    alignSelf={'center'}
                    rounded="full"
                  >
                    <Text fontSize={'11'} alignSelf={'center'} color={'white'}>
                      Unconfirmed Order/s
                    </Text>
                  </Box>
                </Box>

                <Box h={'16'} w={'16'} alignItems={'center'}>
                  <HStack space={'2'} alignItems={'center'}>
                    <Text fontSize={'10'}>1h</Text>
                  </HStack>
                </Box>
              </HStack>

              <HStack space={'2'}>
                <Box h={'16'} w={'16'}>
                  <Avatar
                    bg="green.500"
                    size={'lg'}
                    source={{
                      uri: 'https://i.kym-cdn.com/photos/images/masonry/002/264/093/392.jpg'
                    }}
                  ></Avatar>
                </Box>

                <Box w="56" h="20">
                  <Text fontWeight={'bold'} fontSize={'22'} noOfLines={1}>
                    Ocao
                  </Text>
                  <Text alignSelf={'baseline'} color={'gray.600'}>
                    are predator laptop still on stock?
                  </Text>
                  <Box
                    mt={3}
                    w="32"
                    h="4"
                    alignSelf={'center'}
                    rounded="full"
                    borderColor={'red.600'}
                    borderWidth={'1'}
                  >
                    <Text
                      fontSize={'11'}
                      alignSelf={'center'}
                      color={'red.600'}
                    >
                      Canceled Order/s
                    </Text>
                  </Box>
                </Box>

                <Box h={'16'} w={'16'} alignItems={'center'}>
                  <HStack space={'2'} alignItems={'center'}>
                    <Box
                      borderRadius={'full'}
                      bg={'violet.300'}
                      rounded={'full'}
                      size={'2'}
                    ></Box>
                    <Text fontSize={'10'}>4h</Text>
                  </HStack>
                </Box>
              </HStack>

              <HStack space={'2'}>
                <Box h={'16'} w={'16'}>
                  <Avatar
                    bg="green.500"
                    size={'lg'}
                    source={{
                      uri: 'https://sadanduseless.b-cdn.net/wp-content/uploads/2021/03/kitlers10.jpg'
                    }}
                  ></Avatar>
                </Box>

                <Box w="56" h="20">
                  <Text fontWeight={'bold'} fontSize={'22'} noOfLines={1}>
                    Kitler
                  </Text>
                  <Text
                    alignSelf={'baseline'}
                    color={'gray.600'}
                    isTruncated
                    maxW={'250'}
                    w={'90%'}
                  >
                    Meow meow meoew? Meow Nyah nyah.
                  </Text>
                  <Box
                    mt={3}
                    w="32"
                    h="4"
                    bg="violet.600"
                    alignSelf={'center'}
                    rounded="full"
                  >
                    <Text fontSize={'11'} alignSelf={'center'} color={'white'}>
                      Order/s Confirmed
                    </Text>
                  </Box>
                </Box>

                <Box h={'16'} w={'16'} alignItems={'center'}>
                  <HStack space={'2'} alignItems={'center'}>
                    <Text fontSize={'10'}>9h</Text>
                  </HStack>
                </Box>
              </HStack>

              <HStack space={'2'}>
                <Box h={'16'} w={'16'}>
                  <Avatar
                    bg="green.500"
                    size={'lg'}
                    source={{
                      uri: 'https://scontent.fceb2-2.fna.fbcdn.net/v/t1.18169-9/18838835_1443373942409383_7696589158846492891_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=HjJwnz8BXtgAX_UsJ2O&_nc_ht=scontent.fceb2-2.fna&oh=00_AT9ej0PJ8aPxRDAarZrtqznHwhBR3NQ8h-adebNxJVTZgQ&oe=62B62DBF'
                    }}
                  ></Avatar>
                </Box>

                <Box w="56" h="20">
                  <Text fontWeight={'bold'} fontSize={'22'} noOfLines={1}>
                    Kenn & Ken
                  </Text>
                  <Text alignSelf={'baseline'} color={'gray.600'}>
                    Milktea in stock rn?
                  </Text>
                  <Box
                    mt={3}
                    w="32"
                    h="4"
                    bg="violet.600"
                    alignSelf={'center'}
                    rounded="full"
                  >
                    <Text fontSize={'11'} alignSelf={'center'} color={'white'}>
                      Order/s Confirmed
                    </Text>
                  </Box>
                </Box>

                <Box h={'16'} w={'16'} alignItems={'center'}>
                  <HStack space={'2'} alignItems={'center'}>
                    <Box
                      borderRadius={'full'}
                      bg={'violet.300'}
                      rounded={'full'}
                      size={'2'}
                    ></Box>
                    <Text fontSize={'10'}>4d</Text>
                  </HStack>
                </Box>
              </HStack>

              <HStack space={'2'}>
                <Box h={'16'} w={'16'}>
                  <Avatar
                    bg="green.500"
                    size={'lg'}
                    source={{
                      uri: 'data:image/jpeg;base64,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'
                    }}
                  ></Avatar>
                </Box>

                <Box w="56" h="20">
                  <Text fontWeight={'bold'} fontSize={'22'} noOfLines={1}>
                    Mark Villar
                  </Text>
                  <Text alignSelf={'baseline'} color={'gray.600'}>
                    Tahimik lng ako.
                  </Text>
                  <Box
                    mt={3}
                    w="32"
                    h="4"
                    bg="violet.600"
                    alignSelf={'center'}
                    rounded="full"
                  >
                    <Text fontSize={'11'} alignSelf={'center'} color={'white'}>
                      Order/s Confirmed
                    </Text>
                  </Box>
                </Box>

                <Box h={'16'} w={'16'} alignItems={'center'}>
                  <HStack space={'2'} alignItems={'center'}>
                    <Text fontSize={'10'}>2w</Text>
                  </HStack>
                </Box>
              </HStack>
            </VStack>
          </VStack>
        </ScrollView>

        <HStack
          w="16"
          h="20"
          borderWidth={'1'}
          borderColor="black"
          alignItems={'center'}
          width="full"
          height={'20'}
          marginY={'0'}
        ></HStack>
      </Box>
    </NativeBaseProvider>
  );
}

/*
   <NativeBaseProvider>
      <Box safeArea width = {"full"} height = {"full"}>
      <TitleHeader  title = "Chat"/>

       
       <HStack justifyContent={"center"} space={2}>
       <Box mt={6} w="20" h="4" bg="violet.600" alignSelf={"center"} rounded="full"> 
         <Text fontSize={"11"} alignSelf={"center"} color={"white"}>All</Text>
         </Box>
         
         <Box mt={6} w="20" h="4" bg="violet.300" alignSelf={"center"} rounded="full"> 
         <Text fontSize={"11"} alignSelf={"center"}>Orders</Text>
         </Box>
         
         <Box mt={6} w="20" h="4" bg="violet.300" alignSelf={"center"} rounded="full"> 
         <Text fontSize={"11"} alignSelf={"center"}>Completed</Text>
         </Box>
         
         <Box mt={6} w="20" h="4" bg="violet.300" alignSelf={"center"} rounded="full"> 
         <Text fontSize={"11"} alignSelf={"center"}>Canceled</Text>
         </Box>
          
 
       </HStack>
             
       <VStack space={"12"} marginY={16} px={"24"} >  
       <Box  w="full" h="20">
         <Text mt={-10} alignSelf={"center"} fontWeight={"bold"} fontSize={"22"}>Dave Jhaeson Alivio</Text>
         <Text alignSelf={"center"}>You: Sml sir?</Text>
 
         <Box mt={6} w="32" h="4" bg="violet.600" alignSelf={"center"} rounded="full"> 
         <Text fontSize={"11"} alignSelf={"center"} color={"white"}>Order/s Confirmed</Text>
         </Box>
         
       </Box>
 
       <Box w="full" h="20" bg="indigo.500">
       <Text mt={-10} alignSelf={"center"} fontWeight={"bold"} fontSize={"22"}>Eivoryl</Text>
         <Text alignSelf={"center"}>I want her back.</Text>
 
         <Box mt={6} w="32" h="4" bg="red.600" alignSelf={"center"} rounded="full"> 
         <Text fontSize={"11"} alignSelf={"center"} color={"white"}>Unconfirmed Order/s</Text>
         </Box>
         
       </Box>
 
       <Box w="full" h="20" bg="indigo.700">
       <Text mt={-10} alignSelf={"center"} fontWeight={"bold"} fontSize={"22"}>Ocao</Text>
         <Text alignSelf={"center"}>is predator laptop on stock?</Text>
         
         <Box mt={6} w="32" h="4" bg="violet.600" alignSelf={"center"} rounded="full"> 
         <Text fontSize={"11"} alignSelf={"center"} color={"white"}>Confirmed Order/s</Text>
         </Box>
         
         </Box>
 
       <Box w="full" h="20">
       <Text mt={-10} alignSelf={"center"} fontWeight={"bold"} fontSize={"22"}>Ken & Kenn</Text>
         <Text alignSelf={"center"}>Milktea in stock rn.</Text>
 
         <Box mt={6} w="32" h="4" borderColor={"red.600"} borderWidth={"1"} rounded="12"> 
         <Text fontSize={"11"} alignSelf={"center"} color={"red.600"}>Canceled Order/s</Text>
         </Box>
         
         </Box>
 
       <Box w="full" h="20" bg="indigo.700">
       <Text mt={-10} alignSelf={"center"} fontWeight={"bold"} fontSize={"22"}>Kitler</Text>
         <Text alignSelf={"center"}>meow meow? Nyah. Meow Meow meow</Text>
 
         <Box  w="32" h="4" bg="violet.600" alignSelf={"center"} rounded="full"> 
         <Text fontSize={"11"} alignSelf={"center"} color={"white"}>Unconfirmed Order/s</Text>
         </Box>
          
         </Box>
            
            
            
         </VStack> 
 
       </Box>
     </NativeBaseProvider>
 
 
 
   );
 }
 


*/
