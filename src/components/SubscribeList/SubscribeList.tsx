import React, { FC } from 'react';
import styled, { css } from 'styled-components';

import { useAppSelector } from '@/store/hooks';
import { rootSelectors } from '@/store/ducks';
import SubscribeCard from '@/components/SubscribeCard';

const SubscribeList: FC = () => {
  const products = useAppSelector(rootSelectors.products.selectProducts);

  const productList = products?.slice(0, 3);

  if (!productList || productList?.length < 3) {
    return null;
  }

  return (
    <Root>
      {productList.map((product, index) => {
        const isActive = index === 1;
        return <StyledSubscribeCard key={product.id} product={product} isActive={isActive} $isCenter={isActive} />;
      })}
    </Root>
  );
};

export default SubscribeList;

const Root = styled.div<{ $isActive?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 35px;
  column-gap: 27px;
  width: 100%;
  max-width: 600px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    flex-direction: row;
    max-width: none;
  }
`;

const StyledSubscribeCard = styled(SubscribeCard)<{ $isCenter?: boolean }>`
  flex: 1 1 0px;

  ${({ $isCenter }) =>
    $isCenter &&
    css`
      order: -1;
      @media ${(props) => props.theme.breakpoints.xxl} {
        position: relative;
        top: -50px;
        order: 0;
      }
    `}
`;
