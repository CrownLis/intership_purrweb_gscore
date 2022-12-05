import Checkbox from "@/UIComponents/Checkbox/Checkbox";
import Input from "@/UIComponents/Input";
import { FC } from "react";
import styled from "styled-components";

type DomainProps = {
    name:string;
}

const Domain: FC<DomainProps> = ({name}) => {
    return (
        <Container>
            <Checkbox name={name}/>
            <LicenseCodeContainer>
                <TitleContainer>License code</TitleContainer>
                <InputContainer />
            </LicenseCodeContainer>
            <DomainContainer>
                <TitleContainer>Domain</TitleContainer>
                <InputContainer/>
            </DomainContainer>
            <StatusContainer>
                <TitleContainer>Status</TitleContainer>
                <Status>Hold</Status>
            </StatusContainer>
        </Container>
    )
}

export default Domain

const Container = styled.div`
    display:flex;
    background: #272727;
    border:0;
    border-radius: 12px;
    align-items:center;
    max-height:153px;
`

const LicenseCodeContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:24px 0 31px;
`

const TitleContainer = styled.p`
    font-family: ${props => props.theme.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: ${props => props.theme.color.color500};
    margin-bottom:12px;
`

const InputContainer = styled(Input)`
    padding:25px 24px;
    background: ${props => props.theme.color.color700};
    border:0;
    border-radius: 6px;
    width:100%;
    font-family:${props => props.theme.font.main};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
`

const DomainContainer = styled.div`
    display:flex;
    flex-direction:column;
    width:100%;
    max-width:620px;
    margin:24px 56px 31px 28px;
`

const StatusContainer = styled.div`
    display:flex;
    flex-direction:column;
`

const Status = styled.span`
    font-family: ${props => props.theme.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`