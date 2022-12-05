import { FC } from "react";
import styled from "styled-components";
import Title from "./Title";

type StatusProps = {
    someArray:[{text:string,isActive:boolean}],
}

const Status:FC<StatusProps> = ({someArray}) => {
    return (
        <Root>
            {someArray.map((item,index) => <Title key={index} title={item.text} isActive={item.isActive} />)}
        </Root>
    )
}

const Root = styled.div`
    display:flex;
`

export default Status;