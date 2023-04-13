import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-radius: 8px;
  background-color: ${colors.primary};
  width: 100%;
  height: 105px;
  padding: 16px;
  justify-content: space-between;
`;

export const Content = styled.View`
  width: 60%;
`;

export const Heading = styled.Text`
  color: ${colors.white};
  font-size: 16px;
  font-family: 'Sora-SemiBold';
`;

export const SubHeading = styled.Text`
  color: ${colors.white};
  font-size: 12px;
  font-family: 'Sora-Medium';
  margin-top: 10px;
`;

export const BusinessImage = styled.View``;

export const Img = styled.Image`
  width: 97px;
  height: 84px;
`;
