import React, { PropsWithChildren } from 'react'
import { NextPage } from "next";
import styled from "styled-components";
import Header from "@/components/Header";
import Loader from "@/components/Loader";
import Footer from '@/components/Footer';


const MainLayout: NextPage<MainLayoutProps> = ({
    children,
    isLoading = false,
  }) => {
    return (
      <Root>
        <Header />
        {isLoading ? (
          <LoaderContainer>
            <Loader/>
          </LoaderContainer>
        ) : (
          <Main>{children}</Main>
        )}
        <Footer/>
      </Root>
    );
  };
  
  export default MainLayout;

  type MainLayoutProps = PropsWithChildren<{
    isLoading?: boolean;
  }>;

  const Root = styled.div`
    background-color:#181818; 
  `

  const Main = styled.main`
    display:flex;
    justify-content:center;
  `;
  
  const LoaderContainer = styled.div`
    position: absolute;
    display: flex;
    width: 100%;
    height: 100vh;
    justify-content: center;
    align-items: center;
  `;
  