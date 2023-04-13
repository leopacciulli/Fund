import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  width: 220px;
  height: 280px;
  border-radius: 4px;
  border: 1px solid ${colors.mediumGray};
  margin-right: 16px;
`;

export const Description = styled.Text`
  font-size: 14px;
  font-family: 'Sora-Medium';
  margin-top: 12px;
`;

export const BackgroundImage = styled.View`
  width: 100%;
  height: 106px;
`;

export const Img = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  padding: 12px;
`;

export const LogoImg = styled.Image`
  width: 80px;
  height: 18px;
`;

export const ReadMore = styled.Text`
  font-size: 14px;
  font-family: 'Sora-Medium';
  margin-top: 8px;
  text-decoration: underline;
`;
