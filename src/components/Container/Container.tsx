import { HTMLAttributes, FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

type ContainerProps = PropsWithChildren<{
  variant?: 'large' | 'small';
}> &
  HTMLAttributes<HTMLDivElement>;

const Container: FC<ContainerProps> = ({ variant = 'large', children, ...props }) => (
  <StyledContainer $variant={variant} {...props}>
    {children}
  </StyledContainer>
);

export default Container;

type ContainerType = {
  $variant: 'large' | 'small';
};

const StyledContainer = styled.div<ContainerType>`
  position: relative;
  box-sizing: content-box;
  margin: 0 auto;
  max-width: ${(props) => (props.$variant === 'large' ? '1266px' : '660px')};
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;

  @media ${(props) => props.theme.breakpoints.xxl} {
    padding-left: 80px;
    padding-right: 80px;
  }

  @media ${(props) => props.theme.breakpoints.xl} {
    padding-left: 70px;
    padding-right: 70px;
  }

  @media ${(props) => props.theme.breakpoints.lg} {
    padding-left: 60px;
    padding-right: 60px;
  }

  @media ${(props) => props.theme.breakpoints.md} {
    padding-left: 40px;
    padding-right: 40px;
  }
`;
