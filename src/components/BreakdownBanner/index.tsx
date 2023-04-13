import React from 'react';
import {ImageSourcePropType} from 'react-native/types';
import {
  BackgroundImage,
  Container,
  Content,
  Description,
  Img,
  LogoImg,
  ReadMore,
} from './styles';

interface BreakdownBannerProps {
  backgroundImage: ImageSourcePropType;
  logo: ImageSourcePropType;
  description: string;
}

export const BreakdownBanner = ({
  backgroundImage,
  logo,
  description,
}: BreakdownBannerProps) => {
  return (
    <Container>
      <BackgroundImage>
        <Img source={backgroundImage} />
      </BackgroundImage>

      <Content>
        <LogoImg source={logo} resizeMode="contain" />

        <Description>{description}</Description>

        <ReadMore>Read more</ReadMore>
      </Content>
    </Container>
  );
};
