import { FC } from 'react';
import styled from 'styled-components';

import StatusLine from '@/components/ProgressBar/Progress';
import MainLayout from '@/layouts/MainLayout';
import Button from '@/UIComponents/Button';

import Cart from '@/assets/images/Cart.svg';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectProducts } from '@/store/ducks/products/selectors';
import { buyProduct } from '@/store/ducks/user/asyncAction';

const Checkout: FC = () => {
  const router = useRouter();
  const { query } = router;
  const buyingCard = useAppSelector(selectProducts)?.find((product) => product.prices[0].id === Number(query.id));
  const dispatch = useAppDispatch();

  const confirmPurchase = async (priceId: number) => {
    router.push(`/start/${query.id}`);
    await dispatch(buyProduct({ priceId })).unwrap();
  };

  return (
    <MainLayout>
      <Container>
        <StatusContainer>
          <StatusLine text="Create account" isActive />
          <StatusLine text="Log in" isActive />
          <StatusLine text="Checkout" isActive />
        </StatusContainer>
        <StyledTitle>Checkout</StyledTitle>
        <CartContainer>
          <CartTitleContainer>
            <CartTitle>Package name</CartTitle>
            <CartTitle>Price</CartTitle>
          </CartTitleContainer>
          <CartProductsContainer>
            <ProductsTitle>{buyingCard?.name} license</ProductsTitle>
            <CartPriceContainer>
              <ProductsTitle>{buyingCard?.prices[0].price}$</ProductsTitle>
              <Cart />
            </CartPriceContainer>
          </CartProductsContainer>
        </CartContainer>
        <PriceContainer>
          <StyledPrice>Total:</StyledPrice>
          <StyledPrice>{buyingCard?.prices[0].price}$</StyledPrice>
        </PriceContainer>
        <StyledButton
          variant="primary"
          onClick={buyingCard ? () => confirmPurchase(buyingCard?.prices[0].id) : () => {}}
        >
          Purchase
        </StyledButton>
      </Container>
    </MainLayout>
  );
};

export default Checkout;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 410px 290px;
  color: ${(props) => props.theme.color.color100};
`;

const StatusContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const StyledTitle = styled.h2`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  margin-top: 64px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.color.neutral700};
  border: 0;
  border-radius: 12px;
  margin: 32px 0 24px;
`;

const CartTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 72px 32px 32px;
  border-bottom: 1px solid ${(props) => props.theme.color.color500};
`;

const CartProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 50px 48px 32px;
`;

const CartTitle = styled.h3`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 34px;
  color: ${(props) => props.theme.color.color100};
`;

const ProductsTitle = styled.span`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 38px;
`;

const CartPriceContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 24px 0 48px;
`;

const StyledPrice = styled.h3`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
`;

const StyledButton = styled(Button)`
  max-width: 200px;
  text-align: center;
  padding: 20px 0;
`;
