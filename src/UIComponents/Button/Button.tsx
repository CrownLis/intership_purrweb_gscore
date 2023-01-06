import { ButtonHTMLAttributes, FC, PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

import hex2rgba from '@/utils/hex2rgba';

type ButtonVariant = 'primary' | 'secondary' | 'text';

type ButtonSize = 'large' | 'small';

type ButtonProps = PropsWithChildren<
  {
    variant: ButtonVariant;
    size: ButtonSize;
    isLoading?: boolean;
  } & ButtonHTMLAttributes<HTMLButtonElement>
>;

const Button: FC<ButtonProps> = ({ children, variant, size, isLoading, disabled, ...props }) => (
  <StyledButton $variant={variant} $isLoading={isLoading} $size={size} disabled={disabled || isLoading} {...props}>
    {children}
  </StyledButton>
);

export default Button;

type ButtonType = {
  $variant: ButtonVariant;
  $size: ButtonSize;
  $isLoading?: boolean;
};

const getVariantStylesButton = (variant: ButtonVariant) => {
  switch (variant) {
    case 'primary': {
      return css`
        background-color: ${(props) => props.theme.color.primary};
        color: ${(props) => props.theme.color.color100};

        &:hover {
          background-color: ${(props) => props.theme.color.red400};
        }
        &:focus {
          border: ${(props) => `4px solid ${hex2rgba(props.theme.color.primary, 0.3)}`};
        }
        &:disabled {
          opacity: 0.6;
        }
      `;
    }
    case 'secondary': {
      return css`
        background-color: ${(props) => props.theme.color.color100};
        color: ${(props) => props.theme.color.primary};
        &:hover {
          color: ${(props) => props.theme.color.red400};
        }
        &:focus {
          border: ${(props) => `4px solid ${hex2rgba(props.theme.color.color100, 0.3)}`};
        }
        &:disabled {
          opacity: 0.6;
        }
      `;
    }
    case 'text': {
      return css`
        background-color: transparent;
        color: ${(props) => props.theme.color.primary};
        &:hover {
          color: ${(props) => props.theme.color.red400};
        }
        &:focus {
          color: transparent;
        }
        &:active {
          color: transparent;
        }
        &:disabled {
          opacity: 0.6;
        }
      `;
    }
  }
};

const getSizeStylesButton = (size: ButtonSize) => {
  switch (size) {
    case 'large': {
      return css`
        padding: 24px 38px;
        min-width: 160px;
      `;
    }
    case 'small': {
      return css`
        padding: 20px 24px;
        min-width: 120px;
      `;
    }
  }
};

const StyledButton = styled.button<ButtonType>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  border: 4px solid transparent;
  border-radius: 4px;
  padding: 20px 24px;
  cursor: ${({ $isLoading }) => ($isLoading ? 'wait' : 'pointer')};
  ${({ $size = 'small' }) => getSizeStylesButton($size)};
  ${({ $variant = 'primary' }) => getVariantStylesButton($variant)};
  @media ${(props) => props.theme.breakpoints.md} {
    width: max-content;
  }
`;
