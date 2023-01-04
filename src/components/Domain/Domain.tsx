import { FC, useState } from 'react';
import styled from 'styled-components';
import { useClipboard } from 'use-clipboard-copy';

import Checkbox from '@/UIComponents/Checkbox/Checkbox';
import Button from '@/UIComponents/Button';
import Status from '@/components/Status';

import Copy from '@/assets/images/Copy.svg';

type DomainProps = {
  name: string;
  isActive?: boolean;
};

const Domain: FC<DomainProps> = ({ name, isActive }) => {
  const [read, setRead] = useState(Boolean);
  const clipboard = useClipboard();

  return (
    <Container>
      <Checkbox name={name} />
      <LicenseCodeContainer>
        <TitleContainer>License code</TitleContainer>
        <InputContainer1
          ref={clipboard.target}
          readOnly={read}
          onBlur={() => setRead(true)}
          onClick={() => setRead(false)}
        />
        <CopyIcon onClick={clipboard.copy} />
      </LicenseCodeContainer>
      <DomainContainer $isActive={isActive}>
        <TitleContainer>Domain</TitleContainer>
        <InputContainer2 onBlur={() => setRead(true)} readOnly={read} onClick={() => setRead(false)} />
      </DomainContainer>
      {isActive ? null : <StyledButton variant="secondary">Activate</StyledButton>}
      <StatusContainer>
        <TitleContainer>{isActive ? '' : 'Status'}</TitleContainer>
        <StatusWrapper>
          <Status status="active" />
        </StatusWrapper>
      </StatusContainer>
    </Container>
  );
};

export default Domain;

const Container = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  max-height: 153px;
  border: 0;
  background-color: ${(props) => props.theme.color.neutral700};
`;

const LicenseCodeContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 296px;
  width: 100%;
  margin: 24px 0 31px;
`;

const TitleContainer = styled.p`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 18px;
  color: ${(props) => props.theme.color.color500};
  margin-bottom: 12px;
  min-height: 18px;
`;

const InputContainer1 = styled.input`
  padding: 25px 90px 25px 24px;
  background: ${(props) => props.theme.color.color700};
  border: 0;
  border-radius: 6px;
  width: 100%;
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const InputContainer2 = styled.input`
  padding: 25px 24px;
  background: ${(props) => props.theme.color.color700};
  border: 0;
  border-radius: 6px;
  width: 100%;
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 18px;
  outline: none;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const CopyIcon = styled(Copy)`
  position: absolute;
  background-color: ${(props) => props.theme.color.color700};
  border: 0;
  right: 3px;
  top: 30px;
  padding: 18px 24px 18px 34px;
  cursor: pointer;
  z-index: 1;
  box-sizing: content-box;
`;

const DomainContainer = styled.div<{ $isActive?: boolean }>`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${(props) => (props.$isActive ? '620px' : '453px')};
  margin: 24px 56px 31px 28px;
`;

const StyledButton = styled(Button)`
  margin-top: 20px;
  margin-right: 28px;
`;

const StatusContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 56px 31px 28px;
`;

const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 68px;
`;
