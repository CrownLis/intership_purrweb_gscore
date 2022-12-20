import React, { FC, forwardRef, ForwardRefRenderFunction, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import hex2rgba from '@/utils/hex2rgba';

type CheckboxProps = {
  name: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: ForwardRefRenderFunction<HTMLInputElement, CheckboxProps> = ({ name, children, ...props }, ref) => (
  <CheckboxContainer>
    <StyledCheckbox {...props} type="checkbox" name={name} ref={ref} />
    <CheckboxLabel htmlFor={name} />
  </CheckboxContainer>
);

export default forwardRef<HTMLInputElement, CheckboxProps>(Checkbox);

const CheckboxContainer = styled.div`
  position: relative;
`;

const StyledCheckbox = styled.input`
  position: absolute;
  cursor: pointer;
  opacity: 0;
  width: 28px;
  height: 28px;
  margin: 0 48px 0 32px;
  background-color: transparent;

  &:disabled + label {
    opacity: 0.5;
  }
  &:hover + label {
    background-color: ${(props) => props.theme.color.color400};
  }

  &:focus + label {
    outline: ${(props) => `4px solid ${hex2rgba(props.theme.color.color100, 0.3)}`};
  }

  &:checked + label {
    background-color: ${(props) => props.theme.color.primary};
    background-position: center;
    background-size: 100%;
    background-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2.15979 13.4058L7.78275 19.0287L21.8402 4.97131' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A");
    border-color: ${(props) => props.theme.color.primary};
  }

  &:checked:hover + label {
    background-color: ${(props) => props.theme.color.red400};
  }
  &:checked:focus + label {
    outline: ${(props) => `4px solid ${hex2rgba(props.theme.color.primary, 0.3)}`};
  }
`;

const CheckboxLabel = styled.label`
  display: flex;
  border: 1px solid ${(props) => props.theme.color.color400};
  border-radius: 7px;
  height: 28px;
  width: 28px;
  background-size: 24px;
  background-color: ${(props) => props.theme.color.color100};
  cursor: pointer;
  margin: 0 48px 0 32px;
`;
