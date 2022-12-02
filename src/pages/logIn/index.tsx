import StatusLine from "@/components/StatusLine";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/UIComponents/Button";
import Input from "@/UIComponents/Input";
import { FC } from "react";
import styled from "styled-components";

const LogIn: FC = () => {
    return (
        <MainLayout>
            <Container>
                <StatusContainer>
                    <StatusLine text="Create account" isActive />
                    <StatusLine text="Log in" isActive/>
                    <StatusLine text="Checkout" />
                </StatusContainer>
                <FormContainer>
                    <FormTitle>Log in</FormTitle>
                    <StyledInput placeholder='Email' />
                    <StyledInput placeholder='Password' />
                    <StyledButton isUnusual>LogIn</StyledButton>
                </FormContainer>
            </Container>
        </MainLayout>
    )
}

export default LogIn;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    padding-bottom:426px;
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
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    margin-bottom:16px; 
    margin-top:64px;
`

const StyledInput = styled(Input)`
    margin-bottom:24px;
`

const StyledButton = styled(Button)`
    margin:24px 0;
    padding:20px 42.5px;
    max-width:200px;
`