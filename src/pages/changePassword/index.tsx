import { FC } from 'react';
import styled from 'styled-components';

import Input from '@/UIComponents/Input';
import PageNavigation from '@/components/PageNavigation';
import Button from '@/UIComponents/Button';
import Container from '@/components/Container';

const ChangePassword: FC = () => (
  <PageContainer>
    <StyledTitle>Settings</StyledTitle>
    <PageNavigation
      items={[
        { key: 0, text: 'Personal info', reference: 'personalInfo' },
        { key: 1, text: 'Change password', reference: 'changePassword', isActive: true },
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
  </PageContainer>
);

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
`;
