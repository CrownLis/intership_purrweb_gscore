import { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import Container from '@/components/Container';
import SubscribeList from '@/components/SubscribeList';

const HomePage: FC = () => {
  return (
    <PageContainer>
      <StyledTitle>Get started with Gscore today!</StyledTitle>
      <SubscribeList />
      <ContactContainer>
        <ContactQuestion>Have more than 10 sites?</ContactQuestion>
        <StyledLink href="/contact">Contact us</StyledLink>
      </ContactContainer>
    </PageContainer>
  );
};

export default HomePage;

const PageContainer = styled(Container)`
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
  margin-bottom: 58px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    margin-bottom: 108px;
  }
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
