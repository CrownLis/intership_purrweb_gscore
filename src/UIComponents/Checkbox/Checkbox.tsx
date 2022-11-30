import { FC, InputHTMLAttributes } from "react";
import styled from "styled-components";

type CheckboxProps = {
    name: string
} & InputHTMLAttributes<HTMLInputElement>;

const Checkbox: FC<CheckboxProps> = ({ name, ...props }) => {
    return (
       <CheckboxContainer>
            <StyledCheckbox  {...props} type='checkbox' name={name}/>
            <CheckboxLabel htmlFor={name}>
            </CheckboxLabel>     
        </CheckboxContainer>

    )
}

export default Checkbox

const CheckboxContainer = styled.div`
    position:relative
`

const StyledCheckbox = styled.input`
position:absolute;
cursor: pointer;
opacity:0;
width:28px;
height:28px;
margin:0 48px 0 32px;
&:checked{
    &+label::before{
        content:'✓';
        font-size:28px;
        text-align:center;
        color:white;
        background-color:#FC5842;
    }
}
`

const CheckboxLabel = styled.label`
    display:flex;
    cursor: pointer;
    margin:0 48px 0 32px;
    &::before {
        content:'';
        background-color:#C7C7C7;
        border:0;
        border-radius:7px;
        height:28px;
        width:28px;
    }
`