import React, {useState} from 'react';
import {
  TextInputProps as RNTextInputProps,
  StyleProp,
  ViewStyle,
} from 'react-native/types';
import {colors} from '../../../utils/colors';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Label,
  HideShowPassword,
  InputContainer,
  Input as RNInput,
} from './styles';

interface InputProps extends RNTextInputProps {
  label: string;
  shouldShowOrHidePassword?: boolean;
  style?: StyleProp<ViewStyle>;
}

export const Input = ({
  label,
  shouldShowOrHidePassword,
  style,
  ...props
}: InputProps) => {
  const [showSecureTextEntry, setShowSecureTextEntry] = useState(
    shouldShowOrHidePassword ? true : false,
  );

  return (
    <Container style={style}>
      <Label>{label}</Label>
      <InputContainer>
        <RNInput {...props} secureTextEntry={showSecureTextEntry} />
        {shouldShowOrHidePassword && (
          <HideShowPassword
            activeOpacity={0.8}
            onPress={() => setShowSecureTextEntry(!showSecureTextEntry)}>
            <Icon
              name={showSecureTextEntry ? 'eye' : 'eye-off'}
              size={20}
              color={colors.darkGray}
            />
          </HideShowPassword>
        )}
      </InputContainer>
    </Container>
  );
};
