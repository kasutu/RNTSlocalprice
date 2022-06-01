import React from 'react';
import {
  CheckoutScreen,
  NotificationScreen,
  OrderDetailsScreen
} from '../view/screens/index.screens';

export function ScreensInProgress() {
  return (
    <>
      {/* <CheckoutScreen /> */}
      <OrderDetailsScreen />
      {/* <NotificationScreen /> */}
    </>
  );
}
