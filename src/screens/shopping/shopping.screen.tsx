import React from "react";
import { Box, Center, Divider, NativeBaseProvider, Text, VStack, Checkbox, HStack,Button,Stack, Heading} from 'native-base';
import TitleAndBackButtonHeader from "../../components/header/titleAndBackButton.header";
import SolidButton from "../../components/buttons/solid.button";

export default function Shoppingscreen() {
  return (
    <NativeBaseProvider>
      <Box safeArea width={'full'} height={'full'}
      >
        <TitleAndBackButtonHeader title='shopping bag' width={213} height={37} />
        <Box px={1}>
        <HStack space={"20"}>
        <Checkbox value="" borderRadius={'full'} accessibilityLabel='all' backgroundColor={'#9B69DD'}>
          Select 
          
          </Checkbox>
            <Stack mb="0" mt="0" direction={{
        base: "column",
        md: "column"
      }} space={'md'} mx={{
        base: "auto",
        md: "12"
      }}>
          <Button size="sm" variant="link" colorScheme={'violet'} c>
            Delete
          </Button>
          </Stack>
          </HStack>
        
          </Box>
          <Box px={1}>
        <Checkbox value="" borderRadius={'full'} accessibilityLabel='all' backgroundColor={'#9B69DD'} fontWeight={"bold"}>
            Gadget Headz
          </Checkbox>
          </Box>
        <VStack space={5} alignItems={'baseline'} mt={5}>
          <HStack>
            <Center px={1}>
              <Checkbox value="" accessibilityLabel="all" borderRadius={'full'} backgroundColor={'#9B69DD'}/>
            </Center>
            <Center width={"16"} height={"16"} backgroundColor={'blue.700'} borderRadius={10}></Center >
            <Box px={4}>
              Apple Macbook pro 16gb ram, 1tb rom
            </Box>
          </HStack>
          <HStack>
            <Center px={1}>
              <Checkbox value="" accessibilityLabel="all" borderRadius={'full'} backgroundColor={'#9B69DD'}/>
            </Center>
            <Center width={"16"} height={"16"} backgroundColor={'blue.700'} borderRadius={10}></Center >
            <Box px={4}>
              Apple Macbook pro 16gb ram, 1tb rom
            </Box>
          </HStack>
          <Box px={1}>
        <Checkbox value="" borderRadius={'full'} accessibilityLabel='all' backgroundColor={'#9B69DD'} fontWeight={"bold"}>
            Gadget Headz
          </Checkbox>
          </Box>
        <HStack>
            <Center px={1}>
              <Checkbox value="" accessibilityLabel="all" borderRadius={'full'} backgroundColor={'#9B69DD'}/>
            </Center>
            <Center width={"16"} height={"16"} backgroundColor={'blue.700'} borderRadius={10}></Center >
            <Box px={4}>
              Apple Macbook pro 16gb ram, 1tb rom
            </Box>
          </HStack>
          <HStack>
            <Center px={1}>
              <Checkbox value="" accessibilityLabel="all" borderRadius={'full'} backgroundColor={'#9B69DD'}/>
            </Center>
            <Center width={"16"} height={"16"} backgroundColor={'blue.700'} borderRadius={10}></Center >
            <Box px={4}>
              Apple Macbook pro 16gb ram, 1tb rom
            </Box>
          </HStack>
          <Box >
            
          </Box>
        </VStack>

          <Center
           marginTop={"16"}
           bottom={'20'}
           position={'absolute'}
           width={'full'}
           maxWidth={'full'}
          >
            <SolidButton value="Proceed_to_checkout" width={'full'}/>
          </Center>
          
          
  
      </Box>





    </NativeBaseProvider>
  )
}