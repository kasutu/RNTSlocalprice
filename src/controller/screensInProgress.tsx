import React from 'react';
import {
  ChatScreen,
  CheckoutScreen,
  NotificationScreen,
  OrderDetailsScreen,
  ShoppingBagScreen
} from '../view/screens/index.screens';

export function ScreensInProgress() {
  return (
    <>
      {/* <CheckoutScreen /> */}
      <OrderDetailsScreen />
      {/* <ChatScreen /> */}
      {/* <NotificationScreen /> */}
      {/* <ShoppingBagScreen navigation={''} /> */}
    </>
  );
}
