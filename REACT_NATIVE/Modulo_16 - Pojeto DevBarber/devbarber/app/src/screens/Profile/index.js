import React, { useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, Button } from 'react-native';
import Api from '../../Api';
import { Container } from './styles';

export default () =>{

    const navigation = useNavigation();

    const handleLogoutClick = async () =>{
        await Api.logout();
        navigation.reset({
            routes:[{name: 'SignIn'}]
        });
    }

    return(
        <Container>
            <Text>Profile</Text>
            <Button title='Sair' onPress={handleLogoutClick} />
        </Container>
    )
}