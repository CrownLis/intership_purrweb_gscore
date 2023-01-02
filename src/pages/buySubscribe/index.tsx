import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

import MainLayout from '@/layouts/MainLayout';
import { getProducts } from '@/store/ducks/products/asyncAction';
import { wrapper } from '@/store/store';
import { ProductType } from '@/types';
import SubscribeCard from '@/components/SubscribeCard';

type PageProps = {
  products: ProductType[];
};

const BuySubscribe: FC<PageProps> = ({ products }) => {
  return (
    <MainLayout>
      <Container>
        <StyledTitle>Get started with Gscore today!</StyledTitle>
        <CardContainer>
          {products.map((card, index) => (
            <SubscribeCard
              price={card.prices[0].price}
              isCenter={index === 1}
              title={card.name}
              capability={card.sitesCount}
              priceId={card.prices[0].id}
              key={card.id}
            />
          ))}
        </CardContainer>
        <ContactContainer>
          <ContactQuestion>Have more than 10 sites?</ContactQuestion>
          <StyledLink href="contact">Contact us</StyledLink>
        </ContactContainer>
      </Container>
    </MainLayout>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  let isError = false;
  try {
    await store.dispatch(getProducts()).unwrap();
  } catch (e) {
    isError = true;
  }
  const products = store.getState().products.list?.filter((product, index) => index < 3);
  if (isError) {
    return {
      redirect: {
        permanent: false,
        destination: '/logIn',
      },
      props: {
        products,
      },
    };
  }
  return {
    props: {
      products,
    },
  };
});

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
