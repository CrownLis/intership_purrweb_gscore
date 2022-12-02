import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

type InputProps = InputHTMLAttributes<HTMLInputElement>;

const Input: FC<InputProps> = ({ children, ...props }) => {
    return (
        <StyledInput {...props}>
        </StyledInput>
    )
}

export default Input

const StyledInput = styled.input`
    background-color:white;
    border:1px solid #D7D7D7;
    border-radius:6px;
    outline:none;
    padding:25px 23px;
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
`