import StatusLine from "@/components/ProgressBar/Progress";
import MainLayout from "@/layouts/MainLayout";
import Button from "@/UIComponents/Button";
import Input from "@/UIComponents/Input";
import { validateEmail } from "@/utils/validation";
import Link from "next/link";
import { FC } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const CreateAccount: FC = () => {

    const { register, handleSubmit, reset, getFieldState, formState } = useForm({
        mode: 'onChange',
    });

    const { error:userNameError,isDirty:userNameDirty } = getFieldState('username',formState)
    const { error:emailError,isDirty:emailDirty } = getFieldState('email', formState)
    const { error:passwordError,isDirty:passwordDirty} = getFieldState('password', formState)

const onSubmit = (data:any) => {
    reset();
}

    return (
        <MainLayout>
            <Container>
                <StatusContainer>
                    <StatusLine text="Create account" isActive />
                    <StatusLine text="Log in" />
                    <StatusLine text="Checkout" />
                </StatusContainer>
                <FormContainer onSubmit={handleSubmit(onSubmit)}>
                    <FormTitle>Create account</FormTitle>
                    <FormInfo>You need to enter your name and email. We will send you a temporary password by email</FormInfo>
                    <StyledInput placeholder='Username' isError={Boolean(userNameError)} isDirty={userNameDirty} {...register('username',
                        {
                            required: 'Please enter the user name',
                            minLength: {
                                value: 3,
                                message: 'User name must be more than 3 symbols'
                            },
                        }
                    )
                    } />
                    <StyledInput  placeholder='Email' isError={Boolean(emailError)} isDirty={emailDirty} type='email' {...register('email',
                        {
                            required: 'Please enter the email',
                            validate:validateEmail,
                            minLength: {
                                value: 3,
                                message: 'Please enter the correct email'
                            },
                        }
                    )
                    }/>
                    <StyledInput placeholder='Password' isError={Boolean(passwordError)} isDirty={passwordDirty} type='password' {...register('password',
                        {
                            required: 'Please enter the password',
                            minLength: {
                                value: 8,
                                message: 'Password must be more than 8 symbols'
                            },
                        }
                    )
                    }/>
                    <StyledButton variant="primary">Send password</StyledButton>
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
    color:${props => props.theme.color.color100};
`
const FormTitle = styled.h2`
    font-family: ${props => props.theme.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    margin-bottom:16px; 
    margin-top:64px;
`

const FormInfo = styled.p`
    font-family: ${props => props.theme.font.main};
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
    padding:20px 24px;
    max-width:200px;
`

const LogInLink = styled.p`
    font-family: ${props => props.theme.font.main};
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    color:${props => props.theme.color.color100};
    margin-top:24px;
`

const StyledLink = styled(Link)`
    color:${props => props.theme.color.primary};
`