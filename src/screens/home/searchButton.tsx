import React from 'react';
import { Input, TextArea } from 'native-base';
import { InputProps } from '../../types/inputProps.type';
import { InputColor } from '../../colors/localprice.colors';

const TextInputColor = InputColor;

export default function SearchInput({
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
        maxWidth={'350'}
        height={height ? height : '12'}
        bgColor={TextInputColor}
        borderColor={TextInputColor}
        borderRadius={'20'}
        textAlignVertical={VTextAlign}
      />
    </>
  );
}
