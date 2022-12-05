import Checkbox from "@/UIComponents/Checkbox/Checkbox";
import Input from "@/UIComponents/Input";
import { FC } from "react";
import { useForm } from "react-hook-form";
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
                <InputContainer readOnly />
            </LicenseCodeContainer>
            <DomainContainer>
                <TitleContainer>Domain</TitleContainer>
                <InputContainer readOnly/>
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

const StyledCheckbox = styled(Input)`
position:absolute;
cursor: pointer;
opacity:0;
width:28px;
height:28px;
margin:0 32px 0 32px;
&:checked{
    &+label::before{
        content:'✓';
        font-size:28px;
        text-align:center;
        color:white;
        background-color:${sv.color.primary};
    }
}
`

const LicenseCodeContainer = styled.div`
    display:flex;
    flex-direction:column;
    margin:24px 0 31px;
`

const TitleContainer = styled.p`
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 18px;
    color: ${sv.color.color500};
    margin-bottom:12px;
`

const InputContainer = styled(Input)`
    padding:25px 24px;
    background: ${sv.color.color700};
    border:0;
    border-radius: 6px;
    width:100%;
    font-family:${sv.font.main};
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
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`