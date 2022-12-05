import { FC } from "react";
import styled from "styled-components";
import StatusLine from "./Progress";

type ProgressBarProps = {
    someArray:[{text:string,isActive:boolean}],
}

const ProgressBar:FC<ProgressBarProps> = ({someArray}) => {
    return (
        <Root>
            {someArray.map((item,index) => <StatusLine key={index} text={item.text} isActive={item.isActive} />)}
        </Root>
    )
}

export default ProgressBar;

const Root = styled.div`
    display:flex;
    gap:16px;
`