import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.white};
`;

export const Label = styled.Text`
  color: ${colors.black};
  font-size: 24px;
  font-family: 'Sora-SemiBold';
  text-align: center;
`;
