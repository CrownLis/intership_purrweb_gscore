import { NextPage } from 'next';
import { useMemo } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { buyProduct } from '@/store/ducks/products/asyncAction';
import { selectProducts } from '@/store/ducks/products/selectors';
import Progress from '@/components/Progress';
import Container from '@/components/Container';
import Button from '@/UIComponents/Button';

import Cart from '@/assets/images/Cart.svg';

const Checkout: NextPage = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();
  const { query } = router;

  const products = useAppSelector(selectProducts);

  const selectedProduct = useMemo(() => {
    return products?.find((product) => product.id === Number(query.id));
  }, [products, query.id]);

  const confirmPurchase = async (priceId: number) => {
    await dispatch(buyProduct({ priceId })).unwrap();
    router.push(`/checkout/${query.id}/success`);
  };

  if (!selectedProduct) {
    return null;
  }

  return (
    <PageContainer variant="small">
      <StatusContainer>
        <Progress text="Create account" isActive />
        <Progress text="Log in" isActive />
        <Progress text="Checkout" isActive />
      </StatusContainer>
      <StyledTitle>Checkout</StyledTitle>
      <CartContainer>
        <CartTitleContainer>
          <CartTitle>Package name</CartTitle>
          <CartTitle>Price</CartTitle>
        </CartTitleContainer>
        <CartProductsContainer>
          <ProductsTitle>{selectedProduct.name} license</ProductsTitle>
          <CartPriceContainer>
            <ProductsTitle>{selectedProduct.prices[0].price}$</ProductsTitle>
            <Cart />
          </CartPriceContainer>
        </CartProductsContainer>
      </CartContainer>
      <PriceContainer>
        <StyledPrice>Total:</StyledPrice>
        <StyledPrice>{selectedProduct.prices[0].price}$</StyledPrice>
      </PriceContainer>
      <StyledButton variant="primary" size="small" onClick={() => confirmPurchase(selectedProduct.prices[0].id)}>
        Purchase
      </StyledButton>
    </PageContainer>
  );
};

export default Checkout;

const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
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
  min-width: 200px;
`;
