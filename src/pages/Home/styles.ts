import styled from 'styled-components/native';
import {colors} from '../../utils/colors';

export const Container = styled.View`
  flex: 1;
  background-color: ${colors.white};
`;

export const Content = styled.ScrollView`
  flex: 1;
`;

export const HeaderContainer = styled.View`
  padding: 0 20px;
  padding-bottom: 24px;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${colors.lightGray};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const PortfolioValues = styled.View``;

export const PortfolioSection = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 16px;
`;

export const PortfolioTitle = styled.Text`
  color: ${colors.black};
  font-size: 12px;
  font-family: 'Sora-Medium';
`;

export const Values = styled.View`
  flex-direction: row;
  align-items: flex-end;
`;

export const MainValue = styled.Text`
  font-size: 24px;
  font-family: 'Sora-SemiBold';
  margin-right: 4px;
`;

export const Percentage = styled.Text`
  color: ${colors.green};
  font-size: 14px;
  font-family: 'Sora-Medium';
  padding-bottom: 3px;
`;

export const EarnRewards = styled.View`
  background-color: ${colors.secondary};
  border-radius: 4px;
  height: 30px;
  flex-direction: row;
  align-items: center;
  padding: 8px;
`;

export const EarnTitle = styled.Text`
  color: ${colors.primary};
  font-size: 11px;
  font-family: 'Sora-SemiBold';
  margin-left: 4px;
`;

export const HeaderTitle = styled.Text`
  color: ${colors.black};
  font-size: 14px;
  font-family: 'Sora-SemiBold';
`;

export const FundsContainer = styled.View`
  padding-top: 24px;
`;

export const Title = styled.Text`
  color: ${colors.black};
  font-size: 18px;
  font-family: 'Sora-SemiBold';
  padding-left: 20px;
`;

export const Funds = styled.ScrollView`
  margin-top: 20px;
  padding-left: 20px;
`;

export const BannerContainer = styled.View`
  margin-top: 16px;
  padding: 0 20px;
`;

export const InvestContainer = styled.View`
  margin-top: 16px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px;
`;
