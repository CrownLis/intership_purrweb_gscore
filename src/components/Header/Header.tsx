import Link from 'next/link';
import styled from 'styled-components';

import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { selectUser } from '@/store/ducks/user/selectors';
import { logOut } from '@/store/ducks/user/asyncAction';
import Dropdown from '@/UIComponents/Dropdown';
import Container from '@/components/Container';

import Logo from '@/assets/images/Logo.svg';
import Settings from '@/assets/images/Settings.svg';
import Logout from '@/assets/images/Logout.svg';

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectUser);

  const logOutUser = () => {
    dispatch(logOut());
  };

  return (
    <Root>
      <HeaderContainer>
        <LogoLink href="/">
          <Logo />
        </LogoLink>
        {user ? (
          <LinkContainer>
            <StyledLink href="mySubscriptions">My subscription</StyledLink>
            <Dropdown
              items={[
                {
                  key: 0,
                  label: (
                    <>
                      <Settings />
                      <DropdownLink href="/personalInfo">Settings</DropdownLink>
                    </>
                  ),
                },
                {
                  key: 1,
                  label: (
                    <>
                      <Logout />
                      <DropdownLink href="/logIn" onClick={logOutUser}>
                        Logout
                      </DropdownLink>
                    </>
                  ),
                },
              ]}
            >
              <StyledSpan>Anton</StyledSpan>
            </Dropdown>
          </LinkContainer>
        ) : null}
      </HeaderContainer>
    </Root>
  );
};

export default Header;

const Root = styled.header`
  display: flex;
  width: 100%;
  padding: 32px 0;
  background-color: ${(props) => props.theme.color.neutral800};
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoLink = styled(Link)``;

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

  &:hover {
    opacity: 0.6;
  }
`;

const StyledSpan = styled.span`
  margin: 0 12px 0 32px;
  font-family: ${(props) => props.theme.font.main};
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  color: ${(props) => props.theme.color.color100};
`;

const DropdownLink = styled(Link)`
  font-family: ${(props) => props.theme.font.main};
  font-weight: 500;
  font-size: 20px;
  line-height: 22px;
  color: ${(props) => props.theme.color.color100};
  margin-left: 16px;
`;
