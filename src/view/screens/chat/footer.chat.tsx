import React from 'react';
import {
  Box,
  Center,
  HStack,
  Icon,
  IconButton,
  Pressable,
  TextArea
} from 'native-base';
import { CameraIcon, SendIcon } from '../../general/icons/localprice.icons';
import { InputColor } from '../../general/colors/localprice.colors';

export function ChatFooter() {
  return (
    <>
      {/* footer */}
      <Box width={'full'} padding={2}>
        <HStack space={2} alignItems={'center'}>
          <Box>
            <Pressable
              // custom icon button

              paddingX={2}
              justifyContent={'center'}
              alignItems={'center'}
              onPress={() => console.log('cam pressed ')}
            >
              <Icon as={CameraIcon} color={'#8244D5'} size={'25px'} />
            </Pressable>
          </Box>

          <Box flex={1}>
            <TextArea
              rounded={'full'}
              bg={InputColor}
              variant="filled"
              placeholder="Type a message.."
              maxWidth={'full'}
              bgColor={InputColor}
              borderColor={InputColor}
              autoCompleteType={undefined}
              h={35}
            />
          </Box>

          <Box>
            <Pressable
              // custom send icon button

              rounded={'full'}
              h={35}
              paddingX={3}
              justifyContent={'center'}
              alignItems={'center'}
              onPress={() => console.log('send pressed ')}
            >
              <Icon as={SendIcon} color={'black'} size={'25px'} />
            </Pressable>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
