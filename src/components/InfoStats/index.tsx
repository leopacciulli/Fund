import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, Description, Title} from './styles';

interface InfoStatsProps {
  title: string;
  description: string;
}

export const InfoStats = ({title, description}: InfoStatsProps) => {
  return (
    <Container>
      <Title>
        {title} <Icon name={'info'} size={14} />
      </Title>
      <Description>{description}</Description>
    </Container>
  );
};
