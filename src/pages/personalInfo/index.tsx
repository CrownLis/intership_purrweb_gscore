import { FC } from 'react';
import styled from 'styled-components';
import MainLayout from '@/layouts/MainLayout';
import Button from '@/UIComponents/Button';
import Input from '@/UIComponents/Input';
import PageTitle from '@/components/PageTitle/PageTitle';

const PersonalInfo: FC = () => (
  <MainLayout>
    <Container>
      <StyledTitle>Settings</StyledTitle>
      <PageTitle
        titleArray={[
          { text: 'Personal info', reference: 'personalInfo', isActive: true },
          { text: 'Change password', reference: 'changePassword' },
        ]}
      />
      <FormContainer>
        <FormInfo>
          <FormTitle>Personal Info</FormTitle>
          <StyledInput placeholder="Username" />
          <StyledInput placeholder="Email" />
          <StyledButton variant="primary">Save</StyledButton>
        </FormInfo>
      </FormContainer>
    </Container>
  </MainLayout>
);

export default PersonalInfo;

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

const FormInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  max-width: 512px;
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

const StyledButton = styled(Button)`
  max-width: 160px;
  padding: 20px 24px;
  margin-top: 24px;
  margin-bottom: 444px;
`;
