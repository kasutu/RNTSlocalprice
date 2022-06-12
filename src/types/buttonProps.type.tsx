import { IButtonProps } from 'native-base';
import { GestureResponderEvent } from 'react-native';

export type ButtonProps = {
  value?: string;
  toggle?: boolean;
  onPressHandler?: onPressAcceptedValue;
} & IButtonProps;

export type HollowAndSolidButtonProps = {
  hollowButtonValue?: string;
  solidButtonValue?: string;
  onPressCancelHandler?: onPressAcceptedValue;
  onPressSaveHandler?: onPressAcceptedValue;
};

export type onPressAcceptedValue =
  | ((event: GestureResponderEvent) => void)
  | null
  | undefined;
