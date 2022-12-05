import { FC } from "react";
import styled from "styled-components";

type TitleProps = {
    title:string,
    isActive:boolean
}

const Title: FC<TitleProps> = ({ isActive, title }) => {
    return (
        <Root>
            <TitleText>
                {title}
            </TitleText>
            <Line $isActive={isActive}>
            </Line>
        </Root>
    )
}

export default Title;

const Root = styled.div`
    display:flex;
    flex-direction:column;
`

const TitleText = styled.p`
    font-family:${props => props.theme.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 20px;
    padding:12px 24px;
`

const Line = styled.div<{ $isActive?: boolean }>`
height:2px;
width:100%;
background-color:${props => props.$isActive? `${props.theme.color.primary}` : `${props.theme.color.color600}`};
border:0;
border-radius:8px;
`