import Button from "@/UIComponents/Button";
import { FC } from "react";
import styled from "styled-components";

const LicenseCard: FC = () => {
    return (
        <Container>
            <StatusContainer>
                <StatusTitle>Gscore</StatusTitle>
                <StatusTitle>Active</StatusTitle>
            </StatusContainer>
            <LicenseDescription>
                <DescriptionText>Single site license</DescriptionText>
                <DescriptionDate>valid until 21.10.2022</DescriptionDate>
            </LicenseDescription>
            <StyledButton isPrimary>View</StyledButton>
        </Container>
    )
}

export default LicenseCard;

const Container = styled.div`
    border:0;
    border-radius: 12px;
    background-color:#272727;
    color:white; 
    width:100%;  
    max-width:620px;
`

const StatusContainer = styled.div`
    display:flex;
    justify-content:space-between;
    border-bottom:1px solid ${sv.color.color500};
    padding:48px 64px 48px 32px;
`

const StatusTitle = styled.span`
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
`

const LicenseDescription = styled.div`
    display:flex;
    flex-direction:column;
    padding:32px 81px 32px 32px;
`

const DescriptionText = styled.p`
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 26px;
    margin-top:32px;
`

const DescriptionDate = styled.p`
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    margin-top:12px;
    color: #969696;
`

const StyledButton = styled(Button)`
    padding:20px 42px;
    margin:32px 0 48px 32px;
`