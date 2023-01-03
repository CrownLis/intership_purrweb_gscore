import { NextPage } from 'next';
import styled from 'styled-components';

const Home: NextPage = () => <Container>HOME PAGE</Container>;

export default Home;

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
