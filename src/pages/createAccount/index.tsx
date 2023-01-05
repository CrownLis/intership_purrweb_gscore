import { NextPage } from 'next';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import { validateEmail } from '@/utils/validation';
import { rootActions, rootSelectors } from '@/store/ducks';
import { RegisterAttributes } from '@/store/ducks/user/asyncAction';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import Container from '@/components/Container';
import Progress from '@/components/Progress';
import Button from '@/UIComponents/Button';
import Input from '@/UIComponents/Input';

const CreateAccount: NextPage = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const isLoadingUser = useAppSelector(rootSelectors.user.selectIsLoadingUser);

  const { register, handleSubmit, reset, getFieldState, formState } = useForm<RegisterAttributes>({
    mode: 'onChange',
  });

  const { error: userNameError, isDirty: userNameDirty } = getFieldState('username', formState);
  const { error: emailError, isDirty: emailDirty } = getFieldState('email', formState);
  const { error: passwordError, isDirty: passwordDirty } = getFieldState('password', formState);

  const onSubmit = async (data: RegisterAttributes) => {
    await dispatch(rootActions.user.registerUser(data)).unwrap();
    reset();
    router.push('/logIn', {
      query: router.query,
    });
  };

  return (
    <PageContainer variant="small">
      <StatusContainer>
        <Progress text="Create account" isActive />
        <Progress text="Log in" />
        <Progress text="Checkout" />
      </StatusContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Create account</FormTitle>
        <FormInfo>You need to enter your name and email. We will send you a temporary password by email</FormInfo>
        <StyledInput
          placeholder="Username"
          isError={Boolean(userNameError)}
          isDirty={userNameDirty}
          {...register('username', {
            required: 'Please enter the user name',
            minLength: {
              value: 3,
              message: 'User name must be more than 3 symbols',
            },
          })}
        />
        <StyledInput
          type="email"
          placeholder="Email"
          isError={Boolean(emailError)}
          isDirty={emailDirty}
          {...register('email', {
            required: 'Please enter the email',
            validate: validateEmail,
            minLength: {
              value: 3,
              message: 'Please enter the correct email',
            },
          })}
        />
        <StyledInput
          placeholder="Password"
          isError={Boolean(passwordError)}
          isDirty={passwordDirty}
          type="password"
          {...register('password', {
            required: 'Please enter the password',
            minLength: {
              value: 8,
              message: 'Password must be more than 8 symbols',
            },
          })}
        />
        <StyledButton type="submit" variant="primary" size="small" isLoading={isLoadingUser} disabled={isLoadingUser}>
          Send password
        </StyledButton>
      </FormContainer>
      <LogInLink>
        Have an account?{' '}
        <StyledLink
          href={{
            pathname: '/logIn',
            query: router.query,
          }}
        >
          Go to the next step
        </StyledLink>
      </LogInLink>
    </PageContainer>
  );
};

export default CreateAccount;

const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const StatusContainer = styled.div`
  display: flex;
  gap: 16px;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  color: ${(props) => props.theme.color.color100};
`;
const FormTitle = styled.h2`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 54px;
  margin-bottom: 16px;
  margin-top: 64px;
`;

const FormInfo = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 32px;
`;

const StyledInput = styled(Input)`
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  min-width: 200px;
  margin-top: 24px;
`;

const LogInLink = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => props.theme.color.color100};
  margin-top: 48px;
`;

const StyledLink = styled(Link)`
  color: ${(props) => props.theme.color.primary};
`;
