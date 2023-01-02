import { FC } from 'react';
import styled from 'styled-components';
import MainLayout from '@/layouts/MainLayout';
import Input from '@/UIComponents/Input';
import PageTitle from '@/components/PageTitle/PageTitle';
import Button from '@/UIComponents/Button';

const ChangePassword: FC = () => (
  <MainLayout>
    <Container>
      <StyledTitle>Settings</StyledTitle>
      <PageTitle
        titleArray={[
          { text: 'Personal info', reference: 'personalInfo' },
          { text: 'Change password', reference: 'changePassword', isActive: true },
        ]}
      />
      <FormContainer>
        <FormPassword>
          <FormTitle>Change password</FormTitle>
          <StyledInput placeholder="Current Password" />
          <StyledInput placeholder="New Password" />
          <StyledButton variant="primary">Save</StyledButton>
        </FormPassword>
      </FormContainer>
    </Container>
  </MainLayout>
);

export default ChangePassword;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0px 86px;
  color: ${(props) => props.theme.color.color100};
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
`;

const FormTitle = styled.h3`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 40px;
`;

const StyledInput = styled(Input)`
  max-width: 512px;
`;

const FormPassword = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 24px;
`;

const StyledButton = styled(Button)`
  max-width: 160px;
  padding: 20px 24px;
  margin-top: 24px;
  margin-bottom: 444px;
`;
