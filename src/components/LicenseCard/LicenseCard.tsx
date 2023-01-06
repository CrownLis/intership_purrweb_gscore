import { FC } from 'react';
import styled from 'styled-components';
import Button from '@/UIComponents/Button';
import Status from '../Status';

const LicenseCard: FC = () => (
  <Container>
    <StatusContainer>
      <StatusTitle>Gscore</StatusTitle>
      <Status status="active" />
    </StatusContainer>
    <LicenseDescription>
      <DescriptionText>Single site license</DescriptionText>
      <DescriptionDate>valid until 21.10.2022</DescriptionDate>
    </LicenseDescription>
    <StyledButton variant="secondary" size="small">
      View
    </StyledButton>
  </Container>
);

export default LicenseCard;

const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 620px;
  max-height: 334px;
  border: 0;
  border-radius: 12px;
  color: ${(props) => props.theme.color.color100};
  background-color: ${(props) => props.theme.color.neutral700};
`;

const StatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${(props) => props.theme.color.color500};
  padding: 48px 64px 32px 32px;
`;

const StatusTitle = styled.span`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 28px;
`;

const LicenseDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 81px 0px 32px;
`;

const DescriptionText = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 26px;
`;

const DescriptionDate = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  margin-top: 12px;
  color: ${(props) => props.theme.color.color500};
`;

const StyledButton = styled(Button)`
  margin: 32px 0 48px 32px;
`;
