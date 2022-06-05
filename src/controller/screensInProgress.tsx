import React from 'react';
import { MapViewComponent } from '../view/general/map/mapViewComponent.map';
import {
  ChatScreen,
  CheckoutScreen,
  NotificationScreen,
  OrderDetailsScreen,
  ShoppingBagScreen
} from '../view/screens/index.screens';

import GeoqueryDebug from './GeoQueryDebug';


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

      <GeoqueryDebug />
    </>
  );
}
