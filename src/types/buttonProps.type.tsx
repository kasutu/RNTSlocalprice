import { IButtonProps } from 'native-base';
import { GestureResponderEvent } from 'react-native';

export type ButtonProps = {
  value?: string;
  onPressHandler?: onPressAcceptedValue;
} & IButtonProps;

export type CancelAndSave = {
  onPressCancelHandler?: onPressAcceptedValue;
  onPressSaveHandler?: onPressAcceptedValue;
};

export type onPressAcceptedValue =
  | ((event: GestureResponderEvent) => void)
  | null
  | undefined;
