import React, { useState, useContext } from 'react';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

import { Container, InputArea, CustomButton, CustomButtonText, SingMessageButton, SingMessageButtonText, SingMessageButtonTextBold } from './styles'

import SignInput from '../../components/SignInput'
import { UserContext } from '../../contexts/UserContext';

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';

import Api from '../../Api';

export default () => {
    const { dispatch: userDispatch } = useContext(UserContext);
    const navigation = useNavigation();

    const [nameField, setnameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPAsswordField] = useState('');

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '' && nameField != '') {
            let res = await Api.signUp(nameField, emailField, passwordField);
            console.log(res)
            if (res.token) {

                await AsyncStorage.setItem('token', res.token);
                userDispatch({
                    type: 'setAvatar',
                    payload: {
                        avatar: res.data.avatar
                    }
                });

                navigation.reset({
                    routes: [{ name: 'MainTab' }]
                })

            } else {
                alert('Erro: ' + res.error);
            }
        } else {
            alert('Preencha os campos!');
        }
    }

    const handleMessageButtonClick = () => {
        navigation.reset({
            routes: [{ name: 'SignUp' }]
        });
    }

    return (
        <Container>
            <BarberLogo width="100%" height="160" />
            <InputArea>

                <SignInput
                    IconSvg={PersonIcon}
                    placeholder="Digite seu nome"
                    value={nameField}
                    onChangeText={t => setnameField(t)}
                />
                <SignInput
                    IconSvg={EmailIcon}
                    placeholder="Digite seu e-mail"
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                />
                <SignInput
                    IconSvg={LockIcon}
                    placeholder="Digite sua senha"
                    value={passwordField}
                    onChangeText={t => setPAsswordField(t)}
                    password={true}
                />

                <CustomButton onPress={handleSignClick}>
                    <CustomButtonText>CADASTRAR</CustomButtonText>
                </CustomButton>

                <SingMessageButton onPress={handleMessageButtonClick}>
                    <SingMessageButtonText>Já possui uma conta?</SingMessageButtonText>
                    <SingMessageButtonTextBold>Faça o login</SingMessageButtonTextBold>
                </SingMessageButton>

            </InputArea>
        </Container>
    )
}