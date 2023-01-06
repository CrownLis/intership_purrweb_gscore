import { NextPage } from 'next';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { rootActions, rootSelectors } from '@/store/ducks';
import { UpdatePersonalDataAttributes } from '@/store/ducks/user/asyncAction';
import { validateEmail } from '@/utils/validation';
import Button from '@/UIComponents/Button';
import Input from '@/UIComponents/Input';
import PageNavigation from '@/components/PageNavigation';
import Container from '@/components/Container';

const PersonalInfo: NextPage = () => {
  const dispatch = useAppDispatch();

  const isLoadingUser = useAppSelector(rootSelectors.user.selectIsLoadingUser);

  const { register, handleSubmit, reset, getFieldState, formState } = useForm<UpdatePersonalDataAttributes>({
    mode: 'onChange',
  });

  const { error: userNameError, isDirty: userNameDirty } = getFieldState('username', formState);
  const { error: emailError, isDirty: emailDirty } = getFieldState('email', formState);

  const onSubmit = async (data: UpdatePersonalDataAttributes) => {
    await dispatch(rootActions.user.updatePersonalDataUser(data)).unwrap();
    reset();
  };

  return (
    <PageContainer>
      <StyledTitle>Settings</StyledTitle>
      <PageNavigation
        items={[
          { key: 0, text: 'Personal info', reference: '/personalInfo', isActive: true },
          { key: 1, text: 'Change password', reference: '/changePassword' },
        ]}
      />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormInfo>
          <FormTitle>Personal Info</FormTitle>
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
          <StyledButton type="submit" variant="primary" size="small" isLoading={isLoadingUser} disabled={isLoadingUser}>
            Save
          </StyledButton>
        </FormInfo>
      </FormContainer>
    </PageContainer>
  );
};

export default PersonalInfo;

const PageContainer = styled(Container)`
  display: flex;
  flex-direction: column;
`;

const StyledTitle = styled.h3`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 54px;
  line-height: 64px;
`;

const FormContainer = styled.form`
  display: flex;
  gap: 60px;
  max-width: 512px;
`;

const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const FormTitle = styled.h3`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
`;

const StyledInput = styled(Input)``;

const StyledButton = styled(Button)`
  margin-top: 24px;
`;
