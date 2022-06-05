import React from 'react';
import { MapViewComponent } from '../view/general/map/mapViewComponent.map';
import Router from '../view/router';
import HomeScreen from '../view/screens/home/homeScreen.home';
import {
  ChatScreen,
  CheckoutScreen,
  ItemScreen,
  MainHomeScreen,
  NotificationScreen,
  OrderDetailsScreen,
  ShoppingBagScreen
} from '../view/screens/index.screens';
import ProductScreen from '../view/screens/itemView/productScreen';

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
      <ProductScreen/>
      {/* <Router/> */}

    </>
  );
}
