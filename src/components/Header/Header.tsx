import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectUser } from '@/store/ducks/user/selectors';
import Link from 'next/link';
import { useState } from 'react';

import Down from '@/assets/images/Down.svg';
import Up from '@/assets/images/Up.svg';
import Logo from '@/assets/images/logo.svg';
import Title from '@/assets/images/title.svg';
import Settings from '@/assets/images/Settings.svg';
import Logout from '@/assets/images/Logout.svg';
import { logOut } from '@/store/ducks/user/asyncAction';

const Header = () => {
  const user = useAppSelector(selectUser);
  const [dropdown, setDropdown] = useState(false);
  const dispatch = useAppDispatch();

  const logOutUser = () => {
    dispatch(logOut());
  };
  return (
    <Root>
      <HeaderContainer>
        <LogoContainer>
          <Logo />
          <Title />
        </LogoContainer>

        {user ? (
          <LinkContainer>
            <StyledLink href="mySubscriptions">My subscription</StyledLink>
            <StyledSpan>Anton</StyledSpan>
            {dropdown ? (
              <HiddenButton type="button" onClick={() => setDropdown(false)}>
                <Up />
              </HiddenButton>
            ) : (
              <HiddenButton type="button" onClick={() => setDropdown(true)}>
                <Down />
              </HiddenButton>
            )}
            <DropdownContainer style={{ display: dropdown ? 'flex' : 'none' }}>
              <SVGContainer>
                <Settings />
                <DropdownLink href="/personalInfo">Settings</DropdownLink>
              </SVGContainer>
              <SVGContainer>
                <Logout />
                <DropdownLink href="/logIn" onClick={logOutUser}>
                  Logout
                </DropdownLink>
              </SVGContainer>
            </DropdownContainer>
          </LinkContainer>
        ) : null}
      </HeaderContainer>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 32px 0;
  background-color: ${(props) => props.theme.color.neutral800};
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  margin: 0 90px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LinkContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  margin: 0 12px 0 32px;
  font-family: ${(props) => props.theme.font.main};
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  color: ${(props) => props.theme.color.color100};
`;

const StyledSpan = styled.span`
  margin: 0 12px 0 32px;
  font-family: ${(props) => props.theme.font.main};
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  color: ${(props) => props.theme.color.color100};
`;

const HiddenButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 60px;
  right: 0px;
  z-index: 1;
  gap: 34px;
  background-color: ${(props) => props.theme.color.color700};
  border-radius: 12px;
  padding: 29px 52px 29px 24px;
`;

const SVGContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;

const DropdownLink = styled(Link)`
  font-family: ${(props) => props.theme.font.main};
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  color: ${(props) => props.theme.color.color100};
`;
