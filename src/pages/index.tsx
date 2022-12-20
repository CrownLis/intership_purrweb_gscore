import { NextPage } from 'next';
import styled from 'styled-components';
import MainLayout from '../layouts/MainLayout';

const Home: NextPage = () => (
  <MainLayout>
    <Container>HOME PAGE</Container>
  </MainLayout>
);

export default Home;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
