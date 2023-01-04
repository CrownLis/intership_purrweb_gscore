import { NextPage } from 'next';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import { useAppDispatch } from '@/store/hooks';
import { updatePasswordUser, UpdatePasswordAttributes } from '@/store/ducks/user/asyncAction';
import Input from '@/UIComponents/Input';
import PageNavigation from '@/components/PageNavigation';
import Button from '@/UIComponents/Button';
import Container from '@/components/Container';

const ChangePassword: NextPage = () => {
  const dispatch = useAppDispatch();

  const { register, handleSubmit, reset, getFieldState, formState } = useForm<UpdatePasswordAttributes>({
    mode: 'onChange',
  });

  const { error: currentPasswordError, isDirty: currentPasswordDirty } = getFieldState('currentPassword', formState);
  const { error: newPasswordError, isDirty: newPasswordDirty } = getFieldState('newPassword', formState);

  const onSubmit = async (data: UpdatePasswordAttributes) => {
    await dispatch(updatePasswordUser(data)).unwrap();
    reset();
  };

  return (
    <PageContainer>
      <StyledTitle>Settings</StyledTitle>
      <PageNavigation
        items={[
          { key: 0, text: 'Personal info', reference: '/personalInfo' },
          { key: 1, text: 'Change password', reference: '/changePassword', isActive: true },
        ]}
      />
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormPassword>
          <FormTitle>Change password</FormTitle>
          <StyledInput
            type="password"
            placeholder="Current Password"
            isError={Boolean(currentPasswordError)}
            isDirty={currentPasswordDirty}
            {...register('currentPassword', {
              required: 'Please enter the current password',
              minLength: {
                value: 8,
                message: 'Password must be more than 8 symbols',
              },
            })}
          />
          <StyledInput
            type="password"
            placeholder="New Password"
            isError={Boolean(newPasswordError)}
            isDirty={newPasswordDirty}
            {...register('newPassword', {
              required: 'Please enter the new password',
              minLength: {
                value: 8,
                message: 'Password must be more than 8 symbols',
              },
            })}
          />
          <StyledButton type="submit" size="small" variant="primary">
            Save
          </StyledButton>
        </FormPassword>
      </FormContainer>
    </PageContainer>
  );
};

export default ChangePassword;

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

const FormTitle = styled.h3`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
`;

const StyledInput = styled(Input)``;

const FormPassword = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

const StyledButton = styled(Button)`
  margin-top: 24px;
`;
