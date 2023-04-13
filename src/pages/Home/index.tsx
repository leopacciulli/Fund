import React from 'react';
import {Banner} from '../../components/Banner';
import Icon from 'react-native-vector-icons/Feather';
import {FundCard} from '../../components/FundCard';
import {InvestBlock} from '../../components/InvestBlock';
import {colors} from '../../utils/colors';
import {useSelector} from 'react-redux';
import {RootState} from '../../app/store';
import {Fund} from '../../models/interfaces/funds.interface';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../routes/types';

import {
  BannerContainer,
  Container,
  Content,
  EarnRewards,
  EarnTitle,
  Funds,
  FundsContainer,
  Header,
  HeaderContainer,
  HeaderTitle,
  InvestContainer,
  MainValue,
  Percentage,
  PortfolioSection,
  PortfolioTitle,
  PortfolioValues,
  Title,
  Values,
} from './styles';

export const Home = () => {
  const funds = useSelector((state: RootState) => state.funds.funds);
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const onOpenFund = (fund: Fund) => {
    navigate('FundDetails', {fund});
  };

  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Icon name={'user'} size={24} />
          <HeaderTitle>Account: $1,457.23</HeaderTitle>
          <Icon name={'bell'} size={24} />
        </Header>
        <PortfolioSection>
          <PortfolioValues>
            <PortfolioTitle>Portfolio</PortfolioTitle>
            <Values>
              <MainValue>$1,245.23</MainValue>
              <Percentage>
                <Icon name={'arrow-up-right'} size={14} /> 31.82%
              </Percentage>
            </Values>
          </PortfolioValues>

          <EarnRewards>
            <Icon name={'database'} size={14} color={colors.primary} />
            <EarnTitle>Earn Rewards</EarnTitle>
          </EarnRewards>
        </PortfolioSection>
      </HeaderContainer>

      <Content>
        <FundsContainer>
          <Title>Funds</Title>

          <Funds horizontal showsHorizontalScrollIndicator={false}>
            {funds.map(fund => (
              <FundCard
                key={fund.id}
                type={fund.type}
                typeImage={fund.imageType}
                title={fund.title}
                value={fund.value}
                percentage={fund.percentage}
                onPress={() => onOpenFund(fund)}
              />
            ))}
          </Funds>
        </FundsContainer>

        <BannerContainer>
          <Banner />
        </BannerContainer>

        <InvestContainer>
          <InvestBlock label="Why should you invest here?" />
          <InvestBlock />
        </InvestContainer>
      </Content>
    </Container>
  );
};
