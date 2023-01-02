import { FC } from 'react';
import styled from 'styled-components';
import Title from './Title';

type PageTitleProps = {
  titleArray: [{ text: string; reference: string; isActive?: boolean }];
};

const PageTitle: FC<PageTitleProps> = ({ titleArray }) => (
  <Root>
    {titleArray.map((item, index) => (
      <Title key={index} title={item.text} isActive={item.isActive} reference={item.reference} />
    ))}
    <Line />
  </Root>
);

export default PageTitle;

const Root = styled.div`
  display: flex;
  margin: 48px 0;
  position: relative;
`;

const Line = styled.div<{ $isActive?: boolean }>`
  height: 2px;
  width: 100%;
  background-color: ${(props) => (props.$isActive ? `${props.theme.color.primary}` : `${props.theme.color.color600}`)};
  border: 0;
  border-radius: 8px;
  position: absolute;
  bottom: 0px;
`;
