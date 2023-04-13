import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  width: 50%;
  margin-top: 20px;
`;

export const Title = styled.Text`
  color: ${colors.darkGray};
  font-size: 14px;
  font-family: 'Sora-Medium';
`;

export const Description = styled.Text`
  color: ${colors.black};
  font-size: 12px;
  font-family: 'Sora-Medium';
  margin-top: 10px;
`;
