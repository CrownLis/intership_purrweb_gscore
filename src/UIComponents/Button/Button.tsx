import { ButtonHTMLAttributes, FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";


type ButtonProps = PropsWithChildren<{
    isDefault?: boolean;
    isPrimary?: boolean;
    isUnusual?: boolean;
}& ButtonHTMLAttributes<HTMLButtonElement>>;

const Button: FC<ButtonProps> = ({ children, isDefault, isPrimary, isUnusual,...props }) => {
    return (
        <StyledButton $isDefault={isDefault} $isPrimary={isPrimary} $isUnusual={isUnusual} {...props}>
            {children}
        </StyledButton>
    )
}

export default Button;

type ButtonType = {
    $isDefault?: boolean;
    $isPrimary?: boolean;
    $isUnusual?: boolean;
}

const StyledButton = styled.button<ButtonType>`
font-family: ${sv.font.main};
font-style: normal;
font-weight: 700;
font-size: 18px;
line-height: 20px;
text-align: center;
border:0;
border-radius:6px;
cursor: pointer;
${({ $isDefault }) =>
        $isDefault ? css`
    background-color:white;
    color:#181818;
    ` :
            css`
`
    };
${({ $isPrimary }) =>
        $isPrimary ? css`
    background-color:white;
    color:${sv.color.primary};
    ` :
            css`
`
    };
${({ $isUnusual }) =>
        $isUnusual ? css`
    color:${sv.color.primary};
    color:white;
    ` :
            css`
`
    };
`