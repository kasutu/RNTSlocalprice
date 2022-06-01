/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App, { DEV_MODE } from './App';
import AppDevMode from './AppDevMode';
import { name as appName } from './app.json';

if (DEV_MODE) {
  // for building screens temporarily
  AppRegistry.registerComponent(appName, () => AppDevMode);
} else {
  // for production
  AppRegistry.registerComponent(appName, () => App);
}
