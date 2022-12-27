import styled from 'styled-components';

import Logo from '@/assets/images/logo.svg';
import Title from '@/assets/images/title.svg';

const Header = () => (
  <Root>
    <HeaderContainer>
      <LogoContainer>
        <Logo />
        <Title />
      </LogoContainer>

      <LinkContainer>
        {/* <A href={'Subscriptions'}>My subscription</A>
<StyledSpan>Anton</StyledSpan> */}
      </LinkContainer>
    </HeaderContainer>
  </Root>
);

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
  display: flex;
  align-items: center;
  gap: 32px;
`;

const StyledSpan = styled.span`
  font-family: ${(props) => props.theme.font.subMain};
  font-weight: 500;
  color: ${(props) => props.theme.color.color100};
`;
