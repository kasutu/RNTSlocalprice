import { Center, HStack } from 'native-base';
import React, { useState } from 'react';
import FilterButton from './filterButton';

export interface ButtonName {
  all: 'all';
  myPost: 'my post';
  nearby: 'nearby';
  map: 'map';
  confirmed: 'confirmed';
  unconfirmed: 'unconfirmed';
  cancelled: 'cancelled';
}

export type ButtonNamesValues =
  | 'all'
  | 'my post'
  | 'nearby'
  | 'map'
  | 'confirmed'
  | 'unconfirmed'
  | 'cancelled';

export const buttonName: ButtonName = {
  all: 'all',
  myPost: 'my post',
  nearby: 'nearby',
  map: 'map',
  confirmed: 'confirmed',
  unconfirmed: 'unconfirmed',
  cancelled: 'cancelled'
};

export function FilterButtons({ cb }: { cb: (selectedBtn: string) => void }) {
  const [pressed, setPressed] = useState('all');

  return (
    <>
      <Center width={'full'} paddingY={'2'}>
        <HStack space={3}>
          {/* displays everything but renders up to 6 items only and loads another when scrolled */}
          <FilterButton
            toggle={pressed === buttonName.all ? true : false}
            value="All"
            onPressHandler={() => {
              cb(buttonName.all);
              setPressed(buttonName.all);
            }}
          />

          {/* filters everything that you posted */}
          <FilterButton
            toggle={pressed === buttonName.myPost ? true : false}
            value="My post"
            onPressHandler={() => {
              cb(buttonName.myPost);
              setPressed(buttonName.myPost);
            }}
          />

          {/* filters item near your geolocation */}
          <FilterButton
            toggle={pressed === buttonName.nearby ? true : false}
            value="Nearby"
            onPressHandler={() => {
              cb(buttonName.nearby);
              setPressed(buttonName.nearby);
            }}
          />

          {/* filters by a price range preset */}
          <FilterButton
            toggle={pressed === buttonName.map ? true : false}
            value="Map"
            onPressHandler={() => {
              cb(buttonName.map);
              setPressed(buttonName.map);
            }}
          />
        </HStack>
      </Center>
    </>
  );
}

export function ChatFilterButtons() {
  const [pressed, setPressed] = useState('all');

  return (
    <>
      <Center width={'full'} paddingY={'2'}>
        <HStack space={3}>
          <FilterButton
            toggle={pressed === buttonName.all ? true : false}
            value="All"
            onPressHandler={() => {
              setPressed(buttonName.all);
            }}
          />

          <FilterButton
            toggle={pressed === buttonName.confirmed ? true : false}
            value="Confirmed"
            onPressHandler={() => {
              setPressed(buttonName.confirmed);
            }}
          />

          <FilterButton
            toggle={pressed === buttonName.unconfirmed ? true : false}
            value="Unconfirmed"
            onPressHandler={() => {
              setPressed(buttonName.unconfirmed);
            }}
          />

          <FilterButton
            toggle={pressed === buttonName.cancelled ? true : false}
            value="Cancelled"
            onPressHandler={() => {
              setPressed(buttonName.cancelled);
            }}
          />
        </HStack>
      </Center>
    </>
  );
}