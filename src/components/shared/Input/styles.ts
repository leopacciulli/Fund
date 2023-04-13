import styled from 'styled-components/native';
import {colors} from '../../../utils/colors';

export const Container = styled.View``;

export const Label = styled.Text`
  color: ${colors.darkGray};
  font-size: 11px;
  font-family: 'Sora-Medium';
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 48px;
  width: 100%;
  background-color: ${colors.lightGray};
  border-radius: 4px;
  margin-top: 4px;
  padding: 8px;
`;

export const Input = styled.TextInput`
  flex: 1;
  border: none;
`;

export const HideShowPassword = styled.TouchableOpacity``;
