/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import { I18nManager } from 'react-native';
import {name as appName} from './app.json';
I18nManager.forceRTL(true);
AppRegistry.registerComponent(appName, () => App);
