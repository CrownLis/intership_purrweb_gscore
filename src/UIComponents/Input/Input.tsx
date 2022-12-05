import React, { FC, ForwardRefRenderFunction, InputHTMLAttributes, PropsWithChildren } from "react";
import styled from "styled-components";

import Close from '@/assets/images/Close.svg'
import Accept from '@/assets/images/Accept.svg'

type InputProps = PropsWithChildren<{
    isError?:boolean;
    isDirty?:boolean;
}> & InputHTMLAttributes<HTMLInputElement>;

const Input:ForwardRefRenderFunction<HTMLInputElement,InputProps> = ({isError,isDirty, children, ...props },ref) => {
   const statusIcon = isError? <StyledClose/> : <StyledAccept/> 
    return (
        <InputContainer>
        <StyledInput $isError={isError} $isDirty={isDirty} {...props} ref={ref}/>
        {isDirty? statusIcon : null}
        </InputContainer>
    )
}

export default Input

const InputContainer = styled.div`
    position:relative;
`

const StyledInput = styled.input<{$isError?:boolean,$isDirty?:boolean}>`
    width:100%;
    background-color:${sv.color.color100};
    border-radius:6px;
    outline:none;
    padding:25px 23px;
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    border:${props => props.$isError? `1px solid ${sv.color.red300}` : `1px solid ${sv.color.green300}`};
    ${props => props.$isDirty? null : `border-color:${sv.color.color100}`};
     color:${sv.color.color600};
    &::placeholder{
        color:${sv.color.color500};
    };
    &:disabled {
        background-color:${sv.color.color300}
    };
`

const StyledAccept = styled(Accept)`
    position:absolute;
    right:25px;
    top:22px;
`

const StyledClose = styled(Close)`
    position:absolute;
    right:25px;
    top:22px;
    fill:red;
    path{
        stroke:red
    }
`