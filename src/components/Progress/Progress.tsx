import { FC } from 'react';
import styled from 'styled-components';

type ProgressProps = {
  text: string;
  isActive?: boolean;
};

const Progress: FC<ProgressProps> = ({ isActive, text }) => (
  <Root>
    <Text>{text}</Text>
    <Line $isActive={isActive} />
  </Root>
);

export default Progress;

const Root = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 195px;
  width: 100%;
`;

const Text = styled.span`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 22px;
  padding-bottom: 12px;
  color: ${(props) => props.theme.color.color100};
`;

const Line = styled.div<{ $isActive?: boolean }>`
  height: 8px;
  width: 100%;
  background-color: ${(props) => (props.$isActive ? `${props.theme.color.primary}` : `${props.theme.color.color700}`)};
  border: 0;
  border-radius: 8px;
`;
