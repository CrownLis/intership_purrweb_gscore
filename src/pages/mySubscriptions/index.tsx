import Domain from "@/components/Domain";
import LicenseCard from "@/components/LicenseCard/LicenseCard";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/UIComponents/Button";
import { FC } from "react";
import styled from "styled-components";

const MySubscription: FC = () => {
    return (
        <MainLayout>
            <Container>
                <TitleContainer>
                    <StyledTitle>My subscriptions</StyledTitle>
                    <StyledButton isUnusual>Upgrade</StyledButton>
                </TitleContainer>
                <SliderContainer>
                    <LicenseCard />
                    <LicenseCard />
                    <LicenseCard />
                </SliderContainer>
                <DomainsContainer>
                    <Domain />
                    <Domain />
                    <Domain />
                </DomainsContainer>
                <ConfirmContainer>
                    <ConfirmDescription>Select the domains you want to keep</ConfirmDescription>
                    <ConfirmButton isUnusual>Confirm</ConfirmButton>
                </ConfirmContainer>
            </Container>
        </MainLayout>
    )
}

export default MySubscription;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    color:white;
    width:100%;
    margin:0 86px;
    padding-bottom:120px;
`

const TitleContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:44px;
`

const StyledTitle = styled.h3`
    font-family: 'THICCCBOI';
    font-style: normal;
    font-weight: 700;
    font-size: 54px;
    line-height: 64px;
`

const StyledButton = styled(Button)`
    padding:26px 38px;
`

const SliderContainer = styled.div`
    display:flex;
    gap:28px;
    overflow:hidden;
`

const DomainsContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:32px;
    margin-top:100px;
`

const ConfirmContainer = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-top:48px;
`

const ConfirmDescription = styled.p`
    font-family: 'THICCCBOI';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
`

const ConfirmButton = styled(Button)`
    max-width:148px;
    padding:26px 38px;
`