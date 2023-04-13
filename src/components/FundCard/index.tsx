import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import positiveGraph from '../../images/positive-graph.png';
import negativeGraph from '../../images/negative-graph.png';
import wind from '../../images/wind.png';
import solar from '../../images/solar.png';
import natural from '../../images/natural.png';

import {
  Container,
  Graph,
  GraphImg,
  Img,
  MainValue,
  Percentage,
  Title,
  Values,
} from './styles';

interface FundCardProps {
  title: string;
  typeImage: string;
  type: string;
  percentage: string;
  value: string;
  onPress: () => void;
}

const getIcon = (typeImage: string) => {
  switch (typeImage) {
    case 'wind':
      return wind;
    case 'solar':
      return solar;
    case 'natural':
      return natural;
  }
};

export const FundCard = ({
  title,
  type,
  typeImage,
  percentage,
  value,
  onPress,
}: FundCardProps) => {
  const isFundPositive = type === 'positive';
  const graphImg = isFundPositive ? positiveGraph : negativeGraph;
  const iconName = isFundPositive ? 'arrow-up-right' : 'arrow-down-right';
  const icon = getIcon(typeImage);

  return (
    <Container onPress={onPress}>
      <Img source={icon} />
      <Title>{title}</Title>
      <Graph>
        <GraphImg source={graphImg} />
      </Graph>
      <Values>
        <MainValue>${value}</MainValue>
        <Percentage isPositive={isFundPositive}>
          <Icon name={iconName} size={12} /> {percentage}%
        </Percentage>
      </Values>
    </Container>
  );
};
