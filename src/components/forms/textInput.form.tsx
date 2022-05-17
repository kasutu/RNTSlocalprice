import React from 'react';
import { Input } from 'native-base';
import { InputProps } from '../../types/inputProps.type';

export default function TextInput({
  placeholder,
  height,
  VTextAlign
}: InputProps) {
  return (
    <>
      <Input
        variant="filled"
        placeholder={placeholder}
        placeholderTextColor={'black'}
        maxWidth={'75%'}
        height={height ? height : '8'}
        bgColor={'#D5C1F1'}
        borderColor={'#D5C1F1'}
        borderRadius={'5'}
        textAlignVertical={VTextAlign}
      />
    </>
  );
}
