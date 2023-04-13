import React from 'react';
import {Button} from '../../components/shared/Button';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types';
import {useAppDispatch} from '../../app/hooks';
import {setUser} from '../../reducers/user/userSlice';

import {Container} from './styles';

export const Account = () => {
  const dispatch = useAppDispatch();
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onLogout = () => {
    dispatch(setUser(null));
    navigate('Login');
  };

  return (
    <Container>
      <Button onPress={onLogout} label="Logout" />
    </Container>
  );
};
