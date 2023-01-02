import { FC } from 'react';
import styled, { css } from 'styled-components';
import Button from '@/UIComponents/Button';

import RedCheck from '@/assets/images/RedCheck.svg';
import { useRouter } from 'next/router';
import Check from '../../assets/images/Check.svg';

type SubscribedCardProps = {
  price: string;
  title: string;
  capability: number;
  priceId: number;
  isCenter?: boolean;
};

const SubscribeCard: FC<SubscribedCardProps> = ({ price, title, capability, isCenter, priceId }) => {
  const router = useRouter();

  const buySubscribe = async () => {
    router.push(`checkout/${priceId}`);
  };

  return (
    <Root $isCenter={isCenter}>
      <ContainerCard>
        <TopContainerCard>
          <CardPrice>${price}</CardPrice>
          <CardTitle>{title} license</CardTitle>
          <CardDescription>
            Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price
          </CardDescription>
        </TopContainerCard>
        <BottomContainerCard>
          <CapabilityContainer>
            {isCenter ? <RedCheck /> : <Check />}
            <CardCapability>
              {capability === 1 ? 'Single site license' : `All features for ${capability} sites`}
            </CardCapability>
          </CapabilityContainer>
          <CapabilityContainer>
            {isCenter ? <RedCheck /> : <Check />}
            <CardCapability>Special introductory pricing</CardCapability>
          </CapabilityContainer>
          <CapabilityContainer>
            {isCenter ? <RedCheck /> : <Check />}
            <CardCapability>Unlimited Pages and Keywords</CardCapability>
          </CapabilityContainer>
          <CapabilityContainer>
            {isCenter ? <RedCheck /> : <Check />}
            <CardCapability>Billed annually</CardCapability>
          </CapabilityContainer>
        </BottomContainerCard>
        <StyledButton $isCenter={isCenter} variant="secondary" onClick={() => buySubscribe()}>
          Get Gscore
        </StyledButton>
      </ContainerCard>
    </Root>
  );
};

export default SubscribeCard;

const Root = styled.div<{ $isCenter?: boolean }>`
  width: 404px;
  height: 612px;
  color: ${(props) => props.theme.color.color100};
  border: 0;
  border-radius: 12px;
  ${({ $isCenter }) =>
    $isCenter
      ? css`
          position: relative;
          top: -50px;
          background-color: ${(props) => props.theme.color.primary};
        `
      : css`
          background-color: ${(props) => props.theme.color.neutral700};
        `}
`;

const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  margin: 42px 48px;
`;

const TopContainerCard = styled.div<{ $isCenter?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 40px;
  border-bottom: ${(props) =>
    props.$isCenter ? `1px solid ${props.theme.color.color100}` : `1px solid ${props.theme.color.color500}`};
  opacity: ${(props) => (props.$isCenter ? '0,7' : '1')};
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
  color: ${(props) => props.theme.color.color400};
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

const StyledButton = styled(Button)<{ $isCenter?: boolean }>`
  padding: 24px 106px;
  margin-top: 32px;
  color: ${(props) => (props.$isCenter ? props.theme.color.primary : props.theme.color.color800)};
`;
