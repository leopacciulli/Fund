import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  background-color: ${colors.lightGray};
  border-radius: 8px;
  width: 47%;
  padding: 16px;
  height: 200px;
`;

export const Label = styled.Text`
  color: ${colors.black};
  font-size: 12px;
  font-family: 'Sora-SemiBold';
`;
