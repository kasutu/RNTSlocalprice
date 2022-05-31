/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import AppTemp from './AppTemp';
import { name as appName } from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// for building screens temporarily
AppRegistry.registerComponent(appName, () => AppTemp);
