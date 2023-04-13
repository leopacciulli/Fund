import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

interface GraphProps {
  isPositive: boolean;
}

export const Container = styled.TouchableOpacity`
  width: 140px;
  height: 145px;
  border-radius: 4px;
  border: 1px solid ${colors.mediumGray};
  margin-right: 20px;
  padding: 12px;
`;

export const Title = styled.Text`
  font-size: 12px;
  font-family: 'Sora-SemiBold';
  margin-top: 8px;
`;

export const Graph = styled.View`
  margin-top: 12px;
`;

export const Img = styled.Image`
  width: 16px;
  height: 16px;
`;

export const GraphImg = styled.Image`
  width: 80px;
  height: 40px;
`;

export const Values = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 8px;
`;

export const MainValue = styled.Text`
  font-size: 14px;
  font-family: 'Sora-Medium';
`;

export const Percentage = styled.Text<GraphProps>`
  color: ${props => (props.isPositive ? colors.green : colors.red)};
  font-size: 14px;
  font-family: 'Sora-Medium';
`;
