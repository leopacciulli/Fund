import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

interface TabProps {
  selected?: boolean;
}

interface GraphProps {
  isPositive: boolean;
}

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const ContentHeader = styled.View`
  align-items: center;
`;

export const HeaderContainer = styled.View`
  padding: 0 20px;
  padding-bottom: 16px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.lightGray};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.black};
  font-size: 17px;
  font-family: 'Sora-SemiBold';
`;

export const HeaderSigla = styled.Text`
  color: ${colors.darkGray};
  font-size: 14px;
  font-family: 'Sora-Medium';
`;

export const FundData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
  padding: 0 20px;
`;

export const PriceValue = styled.Text`
  color: ${colors.black};
  font-size: 24px;
  font-family: 'Sora-SemiBold';
`;

export const Percentage = styled.Text<GraphProps>`
  color: ${props => (props.isPositive ? colors.green : colors.red)};
  font-size: 14px;
  font-family: 'Sora-Medium';
  margin-top: 4px;
`;

export const YearValue = styled.Text`
  color: ${colors.black};
  font-size: 24px;
  font-family: 'Sora-SemiBold';
`;

export const BlockSection = styled.View`
  margin-top: 40px;
  padding: 0 20px;
`;

export const BlockTitle = styled.Text`
  color: ${colors.black};
  font-size: 17px;
  font-family: 'Sora-SemiBold';
`;

export const Info = styled.View`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const Highlighteds = styled.ScrollView`
  margin-top: 16px;
`;

export const Tabs = styled.View`
  flex-direction: row;
  margin-top: 16px;
`;

export const TabView = styled.View<TabProps>`
  margin-right: 16px;
  padding-bottom: 6px;
  border-bottom-width: ${props => (props.selected ? '2px' : '0px')};
  border-bottom-style: solid;
  border-bottom-color: ${colors.primary};
`;

export const TabText = styled.Text<TabProps>`
  color: ${props => (props.selected ? colors.black : colors.darkGray)};
  font-size: 14px;
  font-family: 'Sora-SemiBold';
`;

export const Note = styled.View`
  background-color: ${colors.lightGray};
  border-radius: 4px;
  margin: 0 20px;
  margin-top: 20px;
  padding: 16px;
`;

export const TextNote = styled.Text`
  color: ${colors.darkGray};
  font-size: 12px;
  font-family: 'Sora-Medium';
`;

export const ButtonContainer = styled.View`
  padding: 0 20px;
  margin-bottom: 40px;
`;

export const Graph = styled.View`
  margin-top: 40px;
`;

export const GraphImg = styled.Image`
  width: 100%;
  height: 150px;
`;
