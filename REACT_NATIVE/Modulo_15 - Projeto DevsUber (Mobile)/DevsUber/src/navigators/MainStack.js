//import { createAppContainer } from 'react-navigation';
import { createAppContainer } from '@react-navigation/native';
//import { createStackNavigator } from 'react-navigation-stack';
import { createStackNavigator } from '@react-navigation/stack';

import Preload from '../screens/Preload';
import Login from '../screens/Login/index';
//import HomeStack from './HomeStack';
//import HomeDrawer from './HomeDrawer';

export default createAppContainer(createStackNavigator({
    Preload,
    Login,
    //HomeDrawer
    //HomeStack
}, {
    initialRouteName:'Preload',
    defaultNavigationOptions:{
        header:null
    }
}));

//initialRouteName --> garante qu o PReload será o primeiro a iniciar

/*
O CÓDIGO ABAIXO TIRA O HEADER QUE APARECE NO PROGRAMA
defaultNavigationOptions:{
        header:null
    }
*/