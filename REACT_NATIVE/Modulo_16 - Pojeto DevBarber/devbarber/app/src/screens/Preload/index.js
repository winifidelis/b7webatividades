import React, { useEffect, useContext } from 'react';
import { Container, LoadingIcon } from './styles';
import AsyncStorage from '@react-native-community/async-storage';
import { useNavigation } from '@react-navigation/native';

import BarberLogo from '../../assets/barber.svg';

import Api from '../../Api';
import { UserContext } from '../../contexts/UserContext';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('token');
            if (token !== null) {
                //validar o token
                //console.log('Validar');
                let res = await Api.checkToken(token);
                //console.log('fim validação');
                if (res.token) {
                    //console.log('Token ok');
                    await AsyncStorage.setItem('token', res.token);
                    userDispatch({
                        type: 'setAvatar',
                        payload: {
                            avatar: res.data.avatar
                        }
                    });
                    //console.log('ira para MainTab');
                    navigation.reset({
                        routes: [{ name: 'MainTab' }]
                    })
                } else {
                    //console.log('Token errado');
                    navigation.navigate('SignIn');
                }
            } else {
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, []);

    return (
        <Container>
            <BarberLogo width="100%" height="160" />
            <LoadingIcon size="large" color="#FFF" />
        </Container>
    );
}