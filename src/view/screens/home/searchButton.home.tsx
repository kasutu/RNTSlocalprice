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
          <HStack alignItems="center">
            <HStack alignItems="center" space={2}>
              <IconButton
                icon={arrowBack}
                onPress={
                  onPressHandler
                    ? onPressHandler
                    : () => console.log('BACK Button pressed ')
                }
              />
  
              {/* search input */}
              <Input
                variant="filled"
                placeholder={'Search'}
                placeholderTextColor={'black'}
                width={'full'}
                maxWidth={'300'}
                height={'10'}
                bgColor={InputColor}
                borderColor={InputColor}
                borderRadius={'full'}
              />
            </HStack>
          </HStack>
        </Box>
      </>
    );
  }