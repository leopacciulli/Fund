/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Input} from '../../components/shared/Input';
import {Button} from '../../components/shared/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootRouteProps, RootStackParamList} from '../../routes/types';
import {useAppDispatch} from '../../app/hooks';
import {useSelector} from 'react-redux';
import Toast from 'react-native-toast-message';
import {RootState} from '../../app/store';
import {setUser} from '../../reducers/user/userSlice';

import {
  Container,
  Content,
  Title,
  SignUp,
  Header,
  Link,
  LinkText,
} from './styles';

export const Login = () => {
  const dispatch = useAppDispatch();
  const userData = useSelector(
    (state: RootState) => state.register.userToRegister,
  );

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const {params} = useRoute<RootRouteProps<'Login'>>();

  const onLogin = () => {
    if (
      userData &&
      userData.email === emailValue &&
      userData?.password === passwordValue
    ) {
      setIsLoading(true);
      dispatch(
        setUser({
          firstName: params?.firstNameValue || '',
          lastName: params?.lastNameValue || '',
          email: userData.email,
          password: userData.password,
        }),
      );

      setTimeout(() => {
        setIsLoading(false);
        navigate('Home');
      }, 2700);
    } else {
      Toast.show({
        type: 'error',
        text1: 'You need to create an account.',
        visibilityTime: 2300,
      });
    }
  };

  const isButtonDisabled =
    emailValue === '' || passwordValue === '' || passwordValue.length < 8;

  return (
    <Container>
      <Header />

      <Title>Login</Title>
      <Content>
        <Input
          label="E-mail"
          placeholder="E-mail"
          value={emailValue}
          onChangeText={e => setEmailValue(e)}
          autoCapitalize="none"
        />

        <Input
          label="Password"
          placeholder="Minimum 8 characters"
          value={passwordValue}
          onChangeText={e => setPasswordValue(e)}
          shouldShowOrHidePassword
          autoCapitalize="none"
          style={{marginTop: 24}}
        />
      </Content>

      <Button
        isLoading={isLoading}
        onPress={onLogin}
        label="Login"
        disabled={isButtonDisabled || isLoading}
      />

      <SignUp>
        Don't have an account?{' '}
        <Link onPress={() => navigate('SignUp')}>
          <LinkText>Sign up</LinkText>
        </Link>{' '}
        here
      </SignUp>
    </Container>
  );
};
