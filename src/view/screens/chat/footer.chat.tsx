import React, { useState } from 'react';
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
import { Colors } from '../../general/colors/localprice.colors';
import convoStore from '../../../model/convoStore/convoStore';
import { sendNewMessageHandler } from '../../../model/common/utils';

export function ChatFooter() {
  const [text, setText] = useState('');
  return (
    <>
      {/* footer */}
      <Box width={'full'} padding={2}>
        <HStack space={2} alignItems={'center'}>
          {/* <Box>
            <Pressable
              // custom icon button

              paddingX={2}
              justifyContent={'center'}
              alignItems={'center'}
              onPress={() => console.log('cam pressed ')}
            >
              <Icon as={CameraIcon} color={'#8244D5'} size={'25px'} />
            </Pressable>
          </Box> */}

          <Box flex={1}>
            <TextArea
              value={text}
              onChangeText={(val) => {
                setText(val);
                convoStore.msg = val;
              }}
              rounded={'full'}
              bg={Colors.LightViolet}
              variant="filled"
              placeholder="Type a message.."
              maxWidth={'full'}
              bgColor={Colors.LightViolet}
              borderColor={Colors.LightViolet}
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
              onPress={() => {
                setText('');
                convoStore.send();
              }}
            >
              <Icon as={SendIcon} color={'black'} size={'25px'} />
            </Pressable>
          </Box>
        </HStack>
      </Box>
    </>
  );
}
