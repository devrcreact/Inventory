/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { store } from './src/Store'; 
import RootApp from './RootApp';
AppRegistry.registerComponent(appName, () => RootApp);
