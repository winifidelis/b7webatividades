/**
 * @format
 */

 //abaixo o pacote cuida do gestos feitos no app
 //arrastar de um canto para o outro, voltar uma tela
 //esses detalhes básicos
import 'react-native-gesture-handler';

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
