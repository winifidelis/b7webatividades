import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, CustomButton, CustomButtonText, SingMessageButton, SingMessageButtonText, SingMessageButtonTextBold } from './styles'

import SignInput from '../../components/SignInput'

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';

import Api from '../../Api';


export default () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('winifidelis@gmail.com');
    const [passwordField, setPAsswordField] = useState('123456789');

    const handleSignClick = async () => {
        if (emailField != '' && passwordField != '') {
            let json = await Api.signIn(emailField, passwordField);
            //console.log(json);
            if (json.token) {
                alert('Deu certo');
            } else {
                alert('E-mail e/ou senha errados');
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
                    <CustomButtonText>LOGIN</CustomButtonText>
                </CustomButton>

                <SingMessageButton onPress={handleMessageButtonClick}>
                    <SingMessageButtonText>Ainda não possui uma conta?</SingMessageButtonText>
                    <SingMessageButtonTextBold>Cadastre-se</SingMessageButtonTextBold>
                </SingMessageButton>

            </InputArea>
        </Container>
    )
}