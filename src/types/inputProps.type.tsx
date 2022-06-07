import { IInputProps } from 'native-base';

export type InputProps = {
  placeholder?: string;
  VTextAlign?: 'top' | 'bottom' | 'auto' | 'center' | undefined;
  onChangeHandler?: (val: string) => void;
} & IInputProps;
