import styled from 'styled-components'

import Logo from '@/assets/images/logo.svg';
import Title from '@/assets/images/title.svg'
import A from '@/UIComponents/A';

const Header = () => {
    return (
        <Root>
            <HeaderContainer>
                <LogoContainer>
                    <Logo />
                    <Title />
                </LogoContainer>

                <LinkContainer>
                    <A href={'Subscriptions'}>My subscription</A>
<StyledSpan>Anton</StyledSpan>
                </LinkContainer>
            </HeaderContainer>
        </Root>

    )
}

export default Header

const Root = styled.header`
height:106px;
width:100%;
background-color:#181818;
display:flex;
align-items:center;
`

const HeaderContainer = styled.div`
display: flex;
width:100%;
height:100%;
justify-content:space-between;
margin:0 90px;
`
const LogoContainer = styled.div`
    display:flex;
    gap:10px;
    align-items: center;
`

const LinkContainer = styled.div`
    display:flex;
    gap:32px;
    align-items:center;
`
const StyledSpan = styled.span`
    font-family:'Inter';
    font-weight:500;
    color:white
`