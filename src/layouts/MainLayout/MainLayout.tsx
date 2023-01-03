import { NextPage } from 'next';
import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Loader from '@/UIComponents/Loader';

type MainLayoutProps = PropsWithChildren<{
  isLoading?: boolean;
}>;

const MainLayout: NextPage<MainLayoutProps> = ({ children, isLoading = false }) => (
  <Root>
    <Header />
    {isLoading ? (
      <LoaderContainer>
        <Loader />
      </LoaderContainer>
    ) : (
      <Main>{children}</Main>
    )}
    <Footer />
  </Root>
);

export default MainLayout;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: ${(props) => props.theme.color.neutral800};
`;

const Main = styled.main`
  display: flex;
  justify-content: center;
  flex-grow: 1;
  color: ${(props) => props.theme.color.color100};
  margin-top: 32px;
  margin-bottom: 60px;
`;

const LoaderContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-color: ${(props) => props.theme.color.neutral800};
`;
