import React from 'react';

import type { ReactNode } from 'react';
import AddLocationMap from './src/screens/userSeller/addLocationMap.screen';
import HomeView from './src/screens/home/homeview.home';
import EditAddressScreenUserSeller from './src/screens/userSeller/editAddressScreen.userSeller';

export default function App(): ReactNode {
  return (
    <>
      {/* <HomeView /> */}
      {/* <AddLocationMap /> */}
      <EditAddressScreenUserSeller />
    </>
  );
}
