import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {View} from 'react-native';
import {InfoStats} from '../../components/InfoStats';
import {BreakdownBanner} from '../../components/BreakdownBanner';
import {Button} from '../../components/shared/Button';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RootRouteProps} from '../../routes/types';

import positiveGraph from '../../images/positive-graph.png';
import negativeGraph from '../../images/negative-graph.png';
import aspiraBackground from '../../images/aspira-background.png';
import aspiraLogo from '../../images/aspira-logo.png';
import climeBackground from '../../images/clime-background.png';
import climeLogo from '../../images/clime-logo.png';

import {
  BlockSection,
  BlockTitle,
  ButtonContainer,
  Container,
  Content,
  ContentHeader,
  FundData,
  Graph,
  GraphImg,
  Header,
  HeaderContainer,
  HeaderSigla,
  HeaderTitle,
  Highlighteds,
  Info,
  Note,
  Percentage,
  PriceValue,
  TabText,
  TabView,
  Tabs,
  TextNote,
  YearValue,
} from './styles';

export const FundDetails = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute<RootRouteProps<'Trade'>>();
  const fund = params.fund;
  const isFundPositive = fund.type === 'positive';
  const iconName = isFundPositive ? 'arrow-up-right' : 'arrow-down-right';
  const graphImg = isFundPositive ? positiveGraph : negativeGraph;
  return (
    <Container>
      <HeaderContainer>
        <Header>
          <Icon onPress={() => goBack()} name={'arrow-left'} size={24} />
          <ContentHeader>
            <HeaderTitle>{fund.title}</HeaderTitle>
            <HeaderSigla>{fund.sigla}</HeaderSigla>
          </ContentHeader>
          <View />
        </Header>
      </HeaderContainer>

      <Content showsVerticalScrollIndicator={false}>
        <FundData>
          <View>
            <PriceValue>${fund.value}</PriceValue>
            <Percentage isPositive={isFundPositive}>
              <Icon name={iconName} size={14} /> {fund.percentage}% ($
              {fund.percentageValue})
            </Percentage>
          </View>
          <YearValue>{fund.year}</YearValue>
        </FundData>

        <Graph>
          <GraphImg source={graphImg} resizeMode="stretch" />
        </Graph>

        <BlockSection>
          <BlockTitle>Info & Stats</BlockTitle>

          <Info>
            <InfoStats title="AUM" description={`$${fund.info.aum}`} />
            <InfoStats title="Issue Date" description={fund.info.issueDate} />
            <InfoStats
              title="Vintage Range"
              description={fund.info.vintageRange}
            />
            <InfoStats title="TER" description={`${fund.info.ter}%`} />
            <InfoStats
              title="Price at Close"
              description={`$${fund.info.priceAtClose}`}
            />
            <InfoStats
              title="Price at Open"
              description={`$${fund.info.priceAtOpen}`}
            />
          </Info>
        </BlockSection>

        <BlockSection>
          <BlockTitle>Fund Breakdown</BlockTitle>

          <Tabs>
            <TabView selected>
              <TabText selected>Highlighted</TabText>
            </TabView>
            <TabView>
              <TabText>Value</TabText>
            </TabView>
            <TabView>
              <TabText>Vintage</TabText>
            </TabView>
            <TabView>
              <TabText>Registry</TabText>
            </TabView>
          </Tabs>

          <Highlighteds horizontal showsHorizontalScrollIndicator={false}>
            <BreakdownBanner
              backgroundImage={aspiraBackground}
              logo={aspiraLogo}
              description="Aspira is building a modular, direct air capture system with the energy supply integrated into the modules."
            />
            <BreakdownBanner
              backgroundImage={climeBackground}
              logo={climeLogo}
              description="Uses renewable geothermal energy and waste heat to capture CO₂ directly from the air."
            />
          </Highlighteds>
        </BlockSection>

        <Note>
          <TextNote>
            Please note that prices are for reference only and may vary at the
            time of excecuting a buy or sell order. {'\n'} {'\n'}The information
            information provided is not investment advice, and should not be
            used as a recommendation to buy or sell assets.
          </TextNote>
        </Note>

        <ButtonContainer>
          <Button onPress={() => {}} label="Buy" />
        </ButtonContainer>
      </Content>
    </Container>
  );
};
