import React from 'react';
import { Input } from 'native-base';
import { InputProps } from '../../types/inputProps.type';

export default function TextInput({ placeholder }: InputProps) {
  return (
    <>
      <Input
        variant="filled"
        placeholder={placeholder}
        placeholderTextColor={'black'}
        maxWidth={'75%'}
        maxHeight={'8'}
        bgColor={'#D5C1F1'}
        borderColor={'#D5C1F1'}
        borderRadius={'5'}
      />
    </>
  );
}
