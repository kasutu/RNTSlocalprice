import React from 'react';
import { Button } from 'native-base';

export default function OutlineButton() {
  return (
    <>
      <Button
        width={'150'}
        height={'45'}
        variant={'outline'}
        onPress={() => console.log('CANCEL pressed')}
        _text={{ fontSize: '15', fontWeight: 'medium' }}
        borderRadius={'50'}
      >
        Cancel
      </Button>
    </>
  );
}
