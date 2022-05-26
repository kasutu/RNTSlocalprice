import { NativeBaseProvider,VStack, Text, HStack, Box, Avatar, ScrollView} from "native-base";
import React from "react";
import { Circle } from "react-native-svg";
import { TitleHeader } from "../../components/header/titleAndBackButton.header";







export default function UserSearchContact() {
    return (
  
      <NativeBaseProvider>
        <Box safeArea width = {"full"} height = {"full"}>

        <VStack w={"full"} height={"16"}>

        <Box height={"10"} width={"64"} bg={"violet.200"}  rounded={"sm"} alignSelf={"center"}>
        <Text alignSelf={"baseline"} px={"4"} marginY={"2"} fontSize={"16"} fontWeight={"bold"} >Search</Text>

        </Box>
        </VStack>
  
            {/* Username and Message */}
        <ScrollView>
        <VStack w={"full"}> 
        <VStack space={"12"} marginY={"6"} alignItems="center" w={"full"}>         
  
          <HStack space={"2"}>
          <Box h={"16"} w={"16"}>
          <Avatar bg="green.500" size={"lg"} source={{
        uri: "https://i.kym-cdn.com/entries/icons/facebook/000/026/152/gigachad.jpg"
      }}>
        </Avatar>
            </Box>
    
       
        <Box w="56" h="20">
          <Text fontWeight={"bold"} marginY={"4"} alignSelf={"center"} fontSize={"22"} noOfLines={1}>Dave Jhaeson Alivio</Text>
        </Box>
        
        <Box w={"16"}></Box>
  

  
        </HStack>
        
        <HStack space={"2"}>
          <Box h={"16"} w={"16"}>
          <Avatar bg="green.500" size={"lg"} source={{
        uri: "https://www.looper.com/img/gallery/famous-people-who-cant-stand-tyler1/intro-1590678357.jpg"
      }}>
        </Avatar>
            </Box>
    
       
        <Box w="56"  px={"4"} h="20">
          <Text fontWeight={"bold"}  marginY={"4"} alignSelf={"baseline"}  fontSize={"22"} noOfLines={1}>Eivoryl</Text>
        </Box>
  
  
        <Box w={"16"}>
  
        </Box>
  
        </HStack>
  
        <HStack space={"2"}>
          <Box h={"16"} w={"16"}>
          <Avatar bg="green.500" size={"lg"} source={{
        uri: "https://i.kym-cdn.com/photos/images/masonry/002/264/093/392.jpg"
      }}>
        </Avatar>
            </Box>
    
       
        <Box w="56" px={"4"} h="20">     
          <Text fontWeight={"bold"} marginY={"4"} alignSelf={"baseline"}  fontSize={"22"} noOfLines={1}>Ocao</Text>

        </Box>
  
  
        <Box h={"16"} w={"16"} alignItems={"center"}> 
        </Box>
  
        </HStack>
  
        <HStack space={"2"}>
          <Box h={"16"} w={"16"}>
          <Avatar bg="green.500" size={"lg"} source={{
        uri: "https://sadanduseless.b-cdn.net/wp-content/uploads/2021/03/kitlers10.jpg"
      }}>
        </Avatar>
            </Box>
    
       
        <Box w="56" px={"4"} h="20">
          
          <Text fontWeight={"bold"}  marginY={"4"} alignSelf={"baseline"}  fontSize={"22"} noOfLines={1}>Kitler</Text>
        </Box>
  
  
        <Box h={"16"} w={"16"} >
  
        </Box>
  
        </HStack>
  
        <HStack space={"2"}>
          <Box h={"16"} w={"16"}>
          <Avatar bg="green.500" size={"lg"} source={{
        uri: "https://scontent.fceb2-2.fna.fbcdn.net/v/t1.18169-9/18838835_1443373942409383_7696589158846492891_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=HjJwnz8BXtgAX_UsJ2O&_nc_ht=scontent.fceb2-2.fna&oh=00_AT9ej0PJ8aPxRDAarZrtqznHwhBR3NQ8h-adebNxJVTZgQ&oe=62B62DBF"
      }}>
        </Avatar>
            </Box>
    
       
        <Box w="56" px={"4"} h="20">
          
          <Text fontWeight={"bold"}   marginY={"4"} alignSelf={"baseline"} fontSize={"22"} noOfLines={1}>Kenn & Ken</Text>
        </Box>
  
  
        <Box h={"16"} w={"16"}>
  
        </Box>
  
        </HStack>
  
        <HStack space={"2"}>
          <Box h={"16"} w={"16"}>
          <Avatar bg="green.500" size={"lg"} source={{
        uri: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Boy_Abunda_%28cropped%29.jpg"
      }}>
        </Avatar>
            </Box>
    
       
        <Box w="56"  px={"4"} h="20">
          <Text fontWeight={"bold"}   marginY={"4"} alignSelf={"baseline"} fontSize={"22"}>Boy Abunda</Text>
        </Box>
  
  
        <Box h={"16"} w={"16"} alignItems={"center"}>
          <HStack space={"2"} alignItems={"center"}>
  
  
          </HStack>
  
        </Box>
  
        </HStack>
         
           
          
          </VStack>
          </VStack> 
  
          </ScrollView>
  
          <HStack w="16" h="20" borderWidth={"1"} borderColor="black" alignItems={"center"} width="full" height={"20"} marginY={"0"}></HStack>
  
        </Box>
      </NativeBaseProvider>
  
  
  
    );
  }
  
  
  
  