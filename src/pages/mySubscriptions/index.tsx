import Domain from "@/components/Domain";
import LicenseCard from "@/components/LicenseCard/LicenseCard";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/UIComponents/Button";
import { FC } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const MySubscription: FC = () => {

    const { register, handleSubmit, reset, getFieldState, formState } = useForm({
        mode: 'onChange',
    });

    return (
        <MainLayout>
            <Container>
                <TitleContainer>
                    <StyledTitle>My subscriptions</StyledTitle>
                    <StyledButton variant="primary">Upgrade</StyledButton>
                </TitleContainer>
                <SliderContainer>
                    <LicenseCard />
                    <LicenseCard />
                    <LicenseCard />
                </SliderContainer>
                <DomainsContainer>
                    <Domain name='1'/>
                    <Domain name='2'/>
                    <Domain name='3'/>
                </DomainsContainer>
                <ConfirmContainer>
                    <ConfirmDescription>Select the domains you want to keep</ConfirmDescription>
                    <ConfirmButton variant="primary">Confirm</ConfirmButton>
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
    font-family: ${sv.font.main};
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

const DomainsContainer = styled.form`
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
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 22px;
`

const ConfirmButton = styled(Button)`
    max-width:152px;
    padding:26px 38px;
`