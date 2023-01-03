import { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

import Container from '@/components/Container';

import Logo from '@/assets/images/Logo.svg';
import Facebook from '@/assets/images/Facebook.svg';
import Twitter from '@/assets/images/Twitter.svg';
import LinkedIn from '@/assets/images/LinkedIn.svg';

const Footer: FC = () => (
  <Root>
    <FooterContainer>
      <DescriptionContainer>
        <LogoLink href="#">
          <Logo />
        </LogoLink>
        <StyledParagraph>
          Ut enim ad minim veniam quis
          <br /> nostrud exercitation ea commodo
        </StyledParagraph>
      </DescriptionContainer>

      <LinksContainer>
        <Copyright>
          Copyright © 2022 GScore | All Rights Reserved | <StyledLink href="cookies">Cookies</StyledLink> |{' '}
          <StyledLink href="privacy">Privacy Policy</StyledLink>
        </Copyright>
        <SocialNavbar>
          <SocialLink href="#">
            <Facebook />
          </SocialLink>
          <SocialLink href="#">
            <Twitter />
          </SocialLink>
          <SocialLink href="#">
            <LinkedIn />
          </SocialLink>
        </SocialNavbar>
      </LinksContainer>
    </FooterContainer>
  </Root>
);

export default Footer;

const Root = styled.footer`
  display: flex;
  width: 100%;
  background-color: ${(props) => props.theme.color.neutral800};
  border-top: 1px solid ${(props) => props.theme.color.color700};
`;

const FooterContainer = styled(Container)`
  height: 100%;
  width: 100%;
  padding: 0 86px;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 60px 0;
  border-bottom: 1px solid ${(props) => props.theme.color.color700};
`;

const LogoLink = styled(Link)``;

const StyledParagraph = styled.p`
  font-family: ${(props) => props.theme.font.subMain};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  color: ${(props) => props.theme.color.color100};
`;

const Copyright = styled(StyledParagraph)`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.color400};
  border-bottom: 1px solid ${(props) => props.theme.color.color400};
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  row-gap: 30px;
  width: 100%;
  padding: 32px 0 24px;

  @media ${(props) => props.theme.breakpoints.md} {
    flex-direction: row;
    padding: 42px 0px;
  }
`;

const SocialNavbar = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 16px;
`;

const SocialLink = styled(Link)`
  &:hover {
    opacity: 0.6;
  }
`;
