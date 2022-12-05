import React, { forwardRef, ForwardRefRenderFunction, InputHTMLAttributes, PropsWithChildren } from "react";
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

export default forwardRef<HTMLInputElement,InputProps>(Input);

const InputContainer = styled.div`
    position:relative;
`

const StyledInput = styled.input<{$isError?:boolean,$isDirty?:boolean}>`
    width:100%;
    background-color:${props => props.theme.color.color100};
    border-radius:6px;
    outline:none;
    padding:25px 23px;
    font-family: ${props => props.theme.font.main};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    border:${props => props.$isError? `1px solid ${props.theme.color.red300}` : `1px solid ${props.theme.color.green300}`};
    ${props => props.$isDirty? null : `border-color:${props.theme.color.color100}`};
     color:${props => props.theme.color.color600};
    &::placeholder{
        color:${props => props.theme.color.color500};
    };
    &:disabled {
        background-color:${props => props.theme.color.color300}
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