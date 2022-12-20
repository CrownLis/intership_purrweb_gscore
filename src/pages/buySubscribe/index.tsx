import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';
import MainLayout from '@/layouts/MainLayout';
import SubscribeCard from '@/components/SubscribeCard';

const BuySubscribe: FC = () => (
  <MainLayout>
    <Container>
      <StyledTitle>Get started with Gscore today!</StyledTitle>
      <CardContainer>
        <SubscribeCard price={77} title="Single site license" capability="Single site license" />
        <SubscribeCard price={117} title="3 Site license" capability="All features for 3 sites" isCenter />
        <SubscribeCard price={167} title="10 Site license" capability="All features for 10 sites" />
      </CardContainer>
      <ContactContainer>
        <ContactQuestion>Have more than 10 sites?</ContactQuestion>
        <StyledLink href="contact">Contact us</StyledLink>
      </ContactContainer>
    </Container>
  </MainLayout>
);

export default BuySubscribe;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledTitle = styled.h2`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  color: ${(props) => props.theme.color.color100};
  margin-bottom: 108px;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  gap: 29px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 32px;
  margin-bottom: 42px;
`;

const ContactQuestion = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 30px;
  color: ${(props) => props.theme.color.color100};
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.primary};
  text-decoration: underline;
`;
