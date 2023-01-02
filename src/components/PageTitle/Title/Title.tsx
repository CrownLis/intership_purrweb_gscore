import Link from 'next/link';
import { FC } from 'react';
import styled from 'styled-components';

type TitleProps = {
  title: string;
  reference: string;
  isActive?: boolean;
};

const Title: FC<TitleProps> = ({ isActive, title, reference }) => (
  <Root>
    <TitleText href={reference} $isActive={isActive}>
      {title}
    </TitleText>
    <Line $isActive={isActive} />
  </Root>
);

export default Title;

const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

const TitleText = styled(Link)<{ $isActive?: boolean }>`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  color: ${(props) => (props.$isActive ? `${props.theme.color.primary}` : `${props.theme.color.color600}`)};
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  padding: 12px 24px;
`;

const Line = styled.div<{ $isActive?: boolean }>`
  height: 2px;
  width: 100%;
  background-color: ${(props) => (props.$isActive ? `${props.theme.color.primary}` : `${props.theme.color.color600}`)};
  border: 0;
  border-radius: 8px;
  z-index:1;
`;
