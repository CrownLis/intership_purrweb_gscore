import { FC } from "react";
import styled from "styled-components";

type StatusLineProps = {
    text: string;
    isActive?: boolean;
}

const StatusLine: FC<StatusLineProps> = ({ isActive, text }) => {
    return (
        <Status>
            <StatusText>
                {text}
            </StatusText>
            <Line $isActive={isActive}>
            </Line>
        </Status>
    )
}

export default StatusLine;

const Status = styled.div`
    display:flex;
    flex-direction:column;
    height:42px;
    width:195px;
`

const StatusText = styled.span`
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 22px;
    padding-bottom:12px;
    color:white;
`;

const Line = styled.div<{ $isActive?: boolean }>`
height:8px;
width:100%;
background-color:${props => props.$isActive? `${sv.color.primary}` : `${sv.color.color700}`};
border:0;
border-radius:8px;
`