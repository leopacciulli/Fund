import React from 'react';
import {ButtonProps as RNButtonProps} from 'react-native/types';
import {ActivityIndicator} from 'react-native';

import {Container, ButtonName} from './styles';

interface ButtonProps extends Omit<RNButtonProps, 'title'> {
  label: string;
  onPress: () => void;
  isLoading?: boolean;
}

export const Button = ({label, onPress, isLoading, ...props}: ButtonProps) => {
  return (
    <Container title="" activeOpacity={0.8} onPress={onPress} {...props}>
      {isLoading ? <ActivityIndicator /> : <ButtonName>{label}</ButtonName>}
    </Container>
  );
};
