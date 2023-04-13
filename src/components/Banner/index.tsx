import React from 'react';
import img from '../../images/business-statistics.png';
import {
  BusinessImage,
  Container,
  Content,
  Heading,
  Img,
  SubHeading,
} from './styles';

export const Banner = () => {
  return (
    <Container>
      <Content>
        <Heading>Learn more about carbon credits</Heading>
        <SubHeading>Check out our top tips!</SubHeading>
      </Content>
      <BusinessImage>
        <Img source={img} />
      </BusinessImage>
    </Container>
  );
};
