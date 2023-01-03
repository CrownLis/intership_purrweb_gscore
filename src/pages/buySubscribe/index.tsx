import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

import { selectProducts } from '@/store/ducks/products/selectors';
import { getProducts } from '@/store/ducks/products/asyncAction';
import { wrapper } from '@/store/store';
import { useAppSelector } from '@/store/hooks';
import SubscribeCard from '@/components/SubscribeCard';
import Container from '@/components/Container';

const BuySubscribe: FC = () => {
  const products = useAppSelector(selectProducts);

  return (
    <PageContainer>
      <StyledTitle>Get started with Gscore today!</StyledTitle>
      <CardContainer>
        {products?.slice(0, 3).map((card, index) => (
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
    </PageContainer>
  );
};

export const getServerSideProps = wrapper.getServerSideProps((store) => async () => {
  let isError = false;
  try {
    await store.dispatch(getProducts()).unwrap();
  } catch (e) {
    isError = true;
  }
  if (isError) {
    return {
      redirect: {
        permanent: false,
        destination: '/logIn',
      },
      props: {},
    };
  }
  return {
    props: {},
  };
});

export default BuySubscribe;

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
