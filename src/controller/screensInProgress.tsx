import React from 'react';
import { MapViewComponent } from '../view/general/map/mapViewComponent.map';
import Router from '../view/router';
import HomeScreen from '../view/screens/home/homeScreen.home';
import {
  ChatScreen,
  CheckoutScreen,
  NotificationScreen,
  OrderDetailsScreen,
  ShoppingBagScreen,
  LogInScreen,
  EditAddressScreen
} from '../view/screens/index.screens';

import GeoqueryDebug from './GeoQueryDebug';
import MapModal from './MapModal';
import UtilTester from './utilTester';

export function ScreensInProgress() {
  return (
    <>
      {/* <CheckoutScreen /> */}
      {/* <OrderDetailsScreen /> */}
      {/* <ChatScreen /> */}
      {/* <NotificationScreen /> */}
      {/* <ShoppingBagScreen navigation={''} /> */}
      {/* <MapViewComponent /> */}
      {/* <MainHomeScreen navigation={undefined}/> */}
      {/* <ItemScreen /> */}
      {/* <HomeScreen/> */}
      {/* <ProductScreen/> */}
      {/* <Router/> */}
      <EditAddressScreen />

      {/* <GeoqueryDebug /> */}
      {/* <UtilTester /> */}
    </>
  );
}
