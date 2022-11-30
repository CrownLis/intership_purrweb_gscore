import StatusLine from "@/components/StatusLine";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/UIComponents/Button";
import Input from "@/UIComponents/Input";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";

const CreateAccount: FC = () => {
    return (
        <MainLayout>
            <Container>
                <StatusContainer>
                    <StatusLine text="Create account" isActive />
                    <StatusLine text="Log in" />
                    <StatusLine text="Checkout" />
                </StatusContainer>
                <FormContainer>
                    <FormTitle>Create account</FormTitle>
                    <FormInfo>You need to enter your name and email. We will send you a temporary password by email</FormInfo>
                    <StyledInput placeholder='Username' />
                    <StyledInput placeholder='Email' />
                    <StyledInput placeholder='Password' />
                    <StyledButton isUnusual>Send password</StyledButton>
                </FormContainer>
                <LogInLink>Have an account? <StyledLink href='login'>Go to the next step</StyledLink></LogInLink>
            </Container>
        </MainLayout>
    )
}

export default CreateAccount

const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding-bottom:224px;
`;

const StatusContainer = styled.div`
    display:flex;
    gap:16px;
`

const FormContainer = styled.form`
    display:flex;
    flex-direction:column;
    color:white;
`
const FormTitle = styled.h2`
    font-family: 'THICCCBOI';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    margin-bottom:16px; 
    margin-top:64px;
`

const FormInfo = styled.p`
    font-family: 'THICCCBOI';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 24px;
    margin-bottom:32px;
`

const StyledInput = styled(Input)`
    margin-bottom:24px;
`

const StyledButton = styled(Button)`
    margin:24px 0;
    padding:20px 42.5px;
    max-width:200px;
`

const LogInLink = styled.p`
    font-family: 'THICCCBOI';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color:white;
    margin-top:24px;
`

const StyledLink = styled(Link)`
    color:#FC5842;
`