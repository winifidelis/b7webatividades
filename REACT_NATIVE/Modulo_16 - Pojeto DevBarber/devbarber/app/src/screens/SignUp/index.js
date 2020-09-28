import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Container, InputArea, CustomButton, CustomButtonText, SingMessageButton, SingMessageButtonText, SingMessageButtonTextBold } from './styles'

import SignInput from '../../components/SignInput'

import BarberLogo from '../../assets/barber.svg';
import EmailIcon from '../../assets/email.svg';
import LockIcon from '../../assets/lock.svg';
import PersonIcon from '../../assets/person.svg';


export default () => {

    const navigation = useNavigation();

    const [nameField, setnameField] = useState('');
    const [emailField, setEmailField] = useState('');
    const [passwordField, setPAsswordField] = useState('');

    const handleSignClick = () => {

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