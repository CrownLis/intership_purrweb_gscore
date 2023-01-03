import Link from 'next/link';
import React, { FC } from 'react';
import styled from 'styled-components';

type PageNavigationProps = {
  items: { key: React.Key; text: string; reference: string; isActive?: boolean }[];
};

const PageNavigation: FC<PageNavigationProps> = ({ items }) => (
  <Root>
    {items.map(({ key, text, reference, isActive }) => (
      <NavItem key={key}>
        <NavLink href={reference} $isActive={isActive}>
          {text}
        </NavLink>
        <NavLine $isActive={isActive} />
      </NavItem>
    ))}
    <Line />
  </Root>
);

export default PageNavigation;

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

const NavItem = styled.div`
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(Link)<{ $isActive?: boolean }>`
  font-family: ${(props) => props.theme.font.main};
  font-style: normal;
  color: ${(props) => (props.$isActive ? `${props.theme.color.primary}` : `${props.theme.color.color600}`)};
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  padding: 12px 24px;
`;

const NavLine = styled.div<{ $isActive?: boolean }>`
  height: 2px;
  width: 100%;
  background-color: ${(props) => (props.$isActive ? `${props.theme.color.primary}` : `${props.theme.color.color600}`)};
  border: 0;
  border-radius: 8px;
  z-index: 1;
`;
