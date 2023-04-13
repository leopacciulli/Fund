/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Input} from '../../components/shared/Input';
import CheckBox from '@react-native-community/checkbox';
import {Button} from '../../components/shared/Button';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useAppDispatch} from '../../app/hooks';
import {RootStackParamList} from '../../routes/types';
import {setUserToRegister} from '../../reducers/register/registerSlice';
import Toast from 'react-native-toast-message';

import {
  Container,
  Content,
  Title,
  Login,
  AcceptContainer,
  AcceptText,
  ServicesText,
  Header,
  ContentPage,
  Link,
  LinkText,
} from './styles';

export const SignUp = () => {
  const dispatch = useAppDispatch();

  const [firstNameValue, setFirstNameValue] = useState('');
  const [lastNameValue, setLastNameValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const {goBack, navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onSignUp = () => {
    setIsLoading(true);
    dispatch(setUserToRegister({email: emailValue, password: passwordValue}));
    Toast.show({
      type: 'success',
      text1: 'Account created with success.',
      visibilityTime: 2300,
    });

    setTimeout(() => {
      setIsLoading(false);
      navigate('Login', {firstNameValue, lastNameValue});
    }, 2700);
  };

  const isButtonDisabled =
    emailValue === '' ||
    lastNameValue === '' ||
    emailValue === '' ||
    passwordValue === '' ||
    passwordValue.length < 8 ||
    !toggleCheckBox;

  return (
    <Container>
      <Header>
        <Icon onPress={() => goBack()} name={'arrow-left'} size={24} />
      </Header>

      <ContentPage>
        <Title>Create your account</Title>

        <Content>
          <Input
            label="First Name"
            placeholder="First Name"
            value={firstNameValue}
            onChangeText={e => setFirstNameValue(e)}
          />

          <Input
            label="Last Name"
            placeholder="Last Name"
            value={lastNameValue}
            onChangeText={e => setLastNameValue(e)}
            style={{marginTop: 24}}
          />

          <Input
            label="E-mail"
            placeholder="E-mail"
            value={emailValue}
            onChangeText={e => setEmailValue(e)}
            style={{marginTop: 24}}
            autoCapitalize="none"
          />

          <Input
            label="Password"
            placeholder="Minimum 8 characters"
            value={passwordValue}
            onChangeText={e => setPasswordValue(e)}
            shouldShowOrHidePassword
            style={{marginTop: 24}}
            autoCapitalize="none"
          />
        </Content>

        <AcceptContainer>
          <CheckBox
            disabled={false}
            value={toggleCheckBox}
            onValueChange={setToggleCheckBox}
            boxType="square"
          />
          <AcceptText>
            I am over 18 years of age and I have read and agree to the{' '}
            <ServicesText>Terms of Service</ServicesText> and{' '}
            <ServicesText>Privacy policy</ServicesText>.
          </AcceptText>
        </AcceptContainer>

        <Button
          isLoading={isLoading}
          disabled={isButtonDisabled || isLoading}
          onPress={onSignUp}
          label="Create account"
        />

        <Login>
          Already have an account?{' '}
          <Link onPress={() => goBack()}>
            <LinkText>Log in Here</LinkText>
          </Link>{' '}
        </Login>
      </ContentPage>
    </Container>
  );
};
