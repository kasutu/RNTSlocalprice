import React from 'react';
import { Button } from 'native-base';
import { ButtonProps } from '../../types/buttonProps.type';

<<<<<<< HEAD
export default function ViewLocationButton({
=======
export default function ViewLocation({
>>>>>>> f124cf4ee2e92db1787c35fc383ef4243c81f1f4
  value,
  borderColor,
  onPressHandler
}: ButtonProps) {
  return (
    <>
      <Button
<<<<<<< HEAD
        width={'100px'}
        height={'10'}
        variant={'outline'}
        onPress={
          onPressHandler ? onPressHandler : () => console.log('View location pressed')
        }
        _text={{ fontSize: '12', fontWeight: 'light' }}
        borderRadius={'xxl'}
=======
        width={'87'}
        height={'10'}
        variant={'outline'}
        onPress={
          onPressHandler ? onPressHandler : () => console.log('CANCEL pressed')
        }
        _text={{ fontSize: '15', fontWeight: 'medium' }}
        borderRadius={'50'}
>>>>>>> f124cf4ee2e92db1787c35fc383ef4243c81f1f4
        borderColor={borderColor}
      >
        {value}
      </Button>
    </>
  );
}
