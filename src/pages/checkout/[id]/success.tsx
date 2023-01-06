import { NextPage } from 'next';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { useAppSelector } from '@/store/hooks';
import { rootSelectors } from '@/store/ducks';
import Button from '@/UIComponents/Button';
import Container from '@/components/Container';

const CheckoutSuccess: NextPage = () => {
  const router = useRouter();
  const { query } = router;
  const product = useAppSelector((state) => rootSelectors.products.selectProductById(state, Number(query.id)));

  if (!product) {
    return null;
  }

  return (
    <PageContainer variant="small">
      <StyledTitle>Start your subscription</StyledTitle>
      <StyledDescription>
        We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.
      </StyledDescription>
      <CartContainer>
        <CartTitleContainer>
          <CartTitle>Package name</CartTitle>
          <CartTitle>Price</CartTitle>
        </CartTitleContainer>
        <CartProductsContainer>
          <ProductsTitle>{product.name} license</ProductsTitle>
          <CartPriceContainer>
            <ProductsTitle>${product.prices[0].price}</ProductsTitle>
          </CartPriceContainer>
        </CartProductsContainer>
      </CartContainer>
      <StyledButton onClick={() => router.push(`/mySubscriptions`)} size="small" variant="primary">
        Go to my subscriptions
      </StyledButton>
    </PageContainer>
  );
};

export default CheckoutSuccess;

const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  margin: 16px 0;
`;

const StyledDescription = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
`;

const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 620px;
  background-color: ${(props) => props.theme.color.neutral700};
  border: 0;
  border-radius: 12px;
  margin: 48px 0;
`;

const CartTitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 48px 72px 32px 32px;
  border-bottom: 1px solid ${(props) => props.theme.color.color100};
`;

const CartProductsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 32px 81px 48px 32px;
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

const StyledButton = styled(Button)``;
