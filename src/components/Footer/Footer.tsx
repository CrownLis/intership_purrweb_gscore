import { FC } from "react"
import styled from "styled-components"

import Logo from '@/assets/images/logo.svg'
import Title from '@/assets/images/title.svg'
import Facebook from '@/assets/images/Facebook.svg'
import Twitter from '@/assets/images/Twitter.svg'
import LinkedIn from '@/assets/images/LinkedIn.svg'
import A from "@/UIComponents/A"

const Footer: FC = () => {
    return (
        <Root>
            <FooterContainer>
                <DescriptionContainer>
                    <LogoContainer>
                        <Logo />
                        <Title />
                    </LogoContainer>
                    <StyledDescription>
                        Ut enim ad minim veniam quis<br /> nostrud exercitation  ea commodo
                    </StyledDescription>
                </DescriptionContainer>

                <LinksContainer>
                    <StyledDescription>
                        Copyright © 2022 GScore | All Rights Reserved |<A href={'Cookies'}> Cookies </A>| <A href={'Privacy'}>Privacy Policy</A>
                    </StyledDescription>
                    <SocialNavbar>
                        <Facebook />
                        <Twitter />
                        <LinkedIn />
                    </SocialNavbar>
                </LinksContainer>
            </FooterContainer>
        </Root>
    )
}

export default Footer

const Root = styled.footer`
height:362px;
background-color:#181818;
border-top:1px solid #393939;
`
const FooterContainer = styled.div`
    height:100%;
    width:100%;
    padding:0 86px;
`
const DescriptionContainer = styled.div`
    display:flex;
    flex-direction:column;
    gap:24px;
    height:246px;
    padding:60px 0;
    border-bottom:1px solid #393939;
`
const LogoContainer = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`

const StyledDescription = styled.p`
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
color:white;

`

const LinksContainer = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
height:116px;
width:100%;
`

const SocialNavbar = styled.div`
display:flex;
align-items:center;
gap:30px;
`