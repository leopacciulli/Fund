import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  padding: 0 20px;
  background-color: ${colors.white};
`;

export const Header = styled.View`
  padding: 0 20px;
  padding-bottom: 40px;
  margin-bottom: 40px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.lightGray};
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-size: 22px;
  font-family: 'Sora-SemiBold';
  text-align: center;
`;

export const Content = styled.View`
  margin-top: 32px;
`;

export const SignUp = styled.Text`
  color: ${colors.darkGray};
  font-size: 14px;
  font-family: 'Sora-Medium';
  text-align: center;
  margin-top: 12px;
`;

export const Link = styled.TouchableOpacity``;

export const LinkText = styled.Text`
  text-decoration: underline;
  font-size: 14px;
`;
