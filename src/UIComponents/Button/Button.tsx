import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

import hex2rgba  from "@/utils/hex2rgba";
import Loader from "@/components/Loader";

type ButtonProps = PropsWithChildren<{
    variant: string;
    isLoading?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<ButtonProps> = ({ children, variant, isLoading, ...props }) => {
    return (
        <StyledButton $variant={variant} $isLoading={isLoading} {...props}>
            {isLoading ? <Loader/> : children }
        </StyledButton>
    )
}

export default Button;

type ButtonType = {
    $variant: string;
    $isLoading?: boolean;
}

const getStylesButton = (variant:string) => {
    switch (variant) {
        case 'primary': {
            return css`
                background-color:${props => props.theme.color.primary};
                color:${props => props.theme.color.color100};

                &:hover {
                    background-color:${props => props.theme.color.red400};
                }
                &:focus {
                    border:${props => `4px solid ${hex2rgba(props.theme.color.primary, 0.3)}`};  
                }
                &:disabled {
                    opacity:0.6;
                }
            `
        }
        case 'secondary': {
            return css`
                background-color:${props => props.theme.color.color100};
                color:${props => props.theme.color.primary};
                &:hover {
                    color:${props => props.theme.color.red400};
                }
                &:focus {
                 border:${props => `4px solid ${hex2rgba(props.theme.color.color100, 0.3)}`};
                }
                &:disabled {
                    opacity:0.6;
                }
            `
        }
        case 'text': {
            return css`
                background-color:transparent;
                color:${props => props.theme.color.primary};
                &:hover {
                    color:${props => props.theme.color.red400}
                }
                &:focus {
                    color:transparent;
                }
                &:active {
                    color:transparent;
                }
                &:disabled {
                    opacity:0.6
                }
            `
        }
    }
}


const StyledButton = styled.button<ButtonType>`
display:flex;
justify-content:center;
align-items:center;
font-family: ${props => props.theme.font.main};
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 18px;
border:4px solid transparent;
border-radius:4px;
padding:20px 24px;
cursor: ${({$isLoading}) => ($isLoading ? 'wait' : 'pointer')};
${({ $variant = 'primary'}) => getStylesButton($variant)};
`