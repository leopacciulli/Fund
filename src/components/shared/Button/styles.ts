import styled from 'styled-components/native';
import {colors} from '../../../utils/colors';
import {ButtonProps} from 'react-native/types';

export const Container = styled.TouchableOpacity<ButtonProps>`
  height: 58px;
  background-color: ${colors.primary};
  opacity: ${props => (props.disabled ? 0.6 : 1)};
  border-radius: 4px;
  justify-content: center;
  margin-top: 40px;
`;

export const ButtonName = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: 'Sora-Medium';
  text-align: center;
`;
