import { Box, HStack, IconButton, Input } from "native-base";
import React from "react";
import { StatusBar } from "react-native";
import { HeaderProps } from "../../../types/headerProps.type";
import { InputColor } from "../../general/colors/localprice.colors";
import { arrowBack } from "../../general/icons/localprice.icons";

export function HomeSearch({ onPressHandler }: HeaderProps) {
    return (
      <>
        <StatusBar backgroundColor="white" barStyle="dark-content" />
        <Box safeArea>
          
  
              {/* search input */}
              <Input
                variant="filled"
                placeholder={'Search'}
                placeholderTextColor={'black'}
                alignSelf={'center'}
                width={'full'}
                maxWidth={360}
                height={'10'}
                bgColor={InputColor}
                borderColor={InputColor}
                borderRadius={'full'}
              />
        </Box>
      </>
    );
  }