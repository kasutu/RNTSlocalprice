import React from 'react';
import { MapViewComponent } from '../view/general/map/mapViewComponent.map';
import Router from '../view/router';
import HomeScreen from '../view/screens/home/homeScreen.home';
import {
  ChatScreen,
  CheckoutScreen,
  NotificationScreen,
  OrderDetailsScreen,
  ShoppingBagScreen
} from '../view/screens/index.screens';

import GeoqueryDebug from './GeoQueryDebug';
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
      <Router/>

      {/* <GeoqueryDebug /> */}
      {/* <UtilTester /> */}
    </>
  );
}
