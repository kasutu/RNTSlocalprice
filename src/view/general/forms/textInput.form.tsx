import React from 'react';
import { Input, TextArea } from 'native-base';
import { InputProps } from '../../../types/inputProps.type';
import { Colors } from '../colors/localprice.colors';

const TextInputColor = Colors.LightViolet;

export default function TextInput({
  placeholder,
  height,
  VTextAlign,
  value,
  onChangeHandler
}: InputProps) {
  return (
    <>
      <Input
        value={value}
        onChangeText={(val) => (onChangeHandler ? onChangeHandler(val) : null)}
        variant="filled"
        placeholder={placeholder}
        placeholderTextColor={'black'}
        maxWidth={'75%'}
        height={height ? height : '8'}
        bgColor={TextInputColor}
        borderColor={TextInputColor}
        borderRadius={'5'}
        textAlignVertical={VTextAlign}
      />
    </>
  );
}

export function TextInputMultiline({
  placeholder,
  height,
  onChangeHandler
}: InputProps) {
  return (
    <>
      <TextArea
        onChangeText={(val) => (onChangeHandler ? onChangeHandler(val) : null)}
        variant="filled"
        placeholder={placeholder}
        placeholderTextColor={'black'}
        maxWidth={'75%'}
        bgColor={TextInputColor}
        borderColor={TextInputColor}
        borderRadius={'5'}
        h={height ? height : '40%'}
        autoCompleteType={undefined}
      />
    </>
  );
}
