import { FC } from 'react';
import styled, { css } from 'styled-components';
import { useRouter } from 'next/router';

import { useAppSelector } from '@/store/hooks';
import { selectUser } from '@/store/ducks/user/selectors';
import { ProductType } from '@/types/data';
import Button from '@/UIComponents/Button';

import Check from '@/assets/images/Check.svg';

type SubscribedCardProps = {
  product: ProductType;
  isActive?: boolean;
  className?: string;
};

const SubscribeCard: FC<SubscribedCardProps> = ({ product, isActive = false, ...props }) => {
  const router = useRouter();

  const user = useAppSelector(selectUser);

  const buySubscribe = () => {
    if (user) {
      router.push(`/checkout/${product.id}`);
    } else {
      router.push(`/createAccount?productId=${product.id}`);
    }
  };

  return (
    <Root $isActive={isActive} {...props}>
      <ContainerCard>
        <TopContainerCard $isActive={isActive}>
          <CardPrice>${product.prices[0].price}</CardPrice>
          <CardTitle>{product.name} license</CardTitle>
          <CardDescription>
            Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
          </CardDescription>
        </TopContainerCard>
        <BottomContainerCard>
          <CapabilityContainer>
            {isActive ? <ActiveCheck /> : <Check />}
            <CardCapability>
              {product.sitesCount === 1 ? 'Single site license' : `All features for ${product.sitesCount} sites`}
            </CardCapability>
          </CapabilityContainer>
          <CapabilityContainer>
            {isActive ? <ActiveCheck /> : <Check />}
            <CardCapability>Special introductory pricing</CardCapability>
          </CapabilityContainer>
          <CapabilityContainer>
            {isActive ? <ActiveCheck /> : <Check />}
            <CardCapability>Unlimited Pages and Keywords</CardCapability>
          </CapabilityContainer>
          <CapabilityContainer>
            {isActive ? <ActiveCheck /> : <Check />}
            <CardCapability>Billed annually</CardCapability>
          </CapabilityContainer>
        </BottomContainerCard>
        <StyledButton $isActive={isActive} variant="secondary" size="large" onClick={buySubscribe}>
          Get Gscore
        </StyledButton>
      </ContainerCard>
    </Root>
  );
};

export default SubscribeCard;

const Root = styled.div<{ $isActive?: boolean }>`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 12px;
  ${({ $isActive }) =>
    $isActive
      ? css`
          background-color: ${(props) => props.theme.color.primary};
          color: ${(props) => props.theme.color.color100};
        `
      : css`
          background-color: ${(props) => props.theme.color.neutral700};
          color: ${(props) => props.theme.color.color400};
        `}
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 42px 48px;
`;

const TopContainerCard = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: ${(props) =>
    props.$isActive ? `1px solid ${props.theme.color.color100}` : `1px solid ${props.theme.color.color500}`};
  opacity: ${(props) => (props.$isActive ? '0,7' : '1')};
  margin-bottom: 38px;
`;

const CardPrice = styled.h3`
  font-family: ${(props) => props.theme.font.unusual};
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 66px;
  margin-bottom: 4px;
`;

const CardTitle = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 26px;
  margin-bottom: 8px;
`;

const CardDescription = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  text-align: center;
`;

const BottomContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
`;
const CapabilityContainer = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const CardCapability = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 20px;
`;

const StyledButton = styled(Button)<{ $isActive?: boolean }>`
  margin-top: 32px;
  width: 100%;
  color: ${(props) => (props.$isActive ? props.theme.color.primary : props.theme.color.color800)};
`;

const ActiveCheck = styled(Check)`
  & path:last-child {
    stroke: ${(props) => props.theme.color.primary};
  }
`;
