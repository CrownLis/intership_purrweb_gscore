import { FC } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import StatusLine from '@/components/Progress';
import Button from '@/UIComponents/Button';
import Input from '@/UIComponents/Input';
import { validateEmail } from '@/utils/validation';
import { useAppDispatch } from '@/store/hooks';
import { loginUser } from '@/store/ducks/user/asyncAction';
import Container from '@/components/Container';

const LogIn: FC = () => {
  const dispatch = useAppDispatch();

  const router = useRouter();

  const { register, handleSubmit, reset, getFieldState, formState } = useForm({
    mode: 'onChange',
  });

  const { error: emailError, isDirty: emailDirty } = getFieldState('email', formState);
  const { error: passwordError, isDirty: passwordDirty } = getFieldState('password', formState);

  const onSubmit = async (data: any) => {
    await dispatch(loginUser(data)).unwrap();
    reset();
    router.push('buySubscribe');
  };

  return (
    <PageContainer variant="small">
      <StatusContainer>
        <StatusLine text="Create account" isActive />
        <StatusLine text="Log in" isActive />
        <StatusLine text="Checkout" />
      </StatusContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Log in</FormTitle>
        <StyledInput
          isError={Boolean(emailError)}
          isDirty={emailDirty}
          type="email"
          placeholder="Email"
          {...register('email', {
            validate: {
              email: validateEmail,
            },
            required: 'Please enter the card name',
            minLength: {
              value: 5,
              message: 'Please enter the card name',
            },
          })}
        />
        <StyledInput
          isError={Boolean(passwordError)}
          isDirty={passwordDirty}
          placeholder="Password"
          type="password"
          {...register('password', {
            required: 'Please enter the card name',
            minLength: {
              value: 2,
              message: 'Please enter the card name',
            },
          })}
        />
        <StyledButton variant="primary">Log in</StyledButton>
      </FormContainer>
    </PageContainer>
  );
};

export default LogIn;

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

const StyledInput = styled(Input)`
  margin-bottom: 24px;
`;

const StyledButton = styled(Button)`
  margin: 24px 0;
  padding: 20px 24px;
  max-width: 200px;
`;
