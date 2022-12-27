import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

import Header from '@/components/Header';
import Loader from '@/components/Loader';
import Footer from '@/components/Footer';

type MainLayoutProps = PropsWithChildren<{
  isLoading?: boolean;
}>;

const MainLayout: FC<MainLayoutProps> = ({ children, isLoading = false }) => (
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
  margin: 0 86px;
`;

const LoaderContainer = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;
