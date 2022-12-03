import Button from "@/UIComponents/Button";
import { FC } from "react";
import styled, { css } from "styled-components";

import Check from './../../assets/images/Check.svg';
import RedCheck from '@/assets/images/RedCheck.svg'

type SubscribedCardProps = {
    price: number;
    title: string;
    capability: string;
    isCenter?: boolean;

};

const SubscribeCard: FC<SubscribedCardProps> = ({ price, title, capability, isCenter }) => {
    return (
        <Root $isCenter={isCenter}>
            <ContainerCard>
                <TopContainerCard>
                    <CardPrice>${price}</CardPrice>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>Get the advanced WordPress plugin that optimizes content with GSC keywords at one low annual price</CardDescription>
                </TopContainerCard>
                <BottomContainerCard>
                    <CapabilityContainer>{isCenter?<RedCheck/> : <Check/>}<CardCapability>{capability}</CardCapability></CapabilityContainer>
                    <CapabilityContainer>{isCenter?<RedCheck/> : <Check/>}<CardCapability>Special introductory pricing</CardCapability></CapabilityContainer>
                    <CapabilityContainer>{isCenter?<RedCheck/> : <Check/>}<CardCapability>Unlimited Pages and Keywords</CardCapability></CapabilityContainer>
                    <CapabilityContainer>{isCenter?<RedCheck/> : <Check/>}<CardCapability>Billed annually</CardCapability></CapabilityContainer>
                </BottomContainerCard>
                <StyledButton $isCenter={isCenter} variant="secondary">Get Gscore</StyledButton>
            </ContainerCard>
        </Root>
    )
}

export default SubscribeCard

const Root = styled.div<{ $isCenter?: boolean }>`
    width:404px;
    height:612px;
    color:white;
    border:0;
    border-radius:12px;
    ${({ $isCenter }) =>
        $isCenter ?
            css`
            position:relative;
            top:-50px;
            background-color:${sv.color.primary};
` :
            css`
            background-color:#272727
`
    }

`
const ContainerCard = styled.div`
display:flex;
flex-direction:column;
margin: 42px 48px;
`
const TopContainerCard = styled.div<{$isCenter?:boolean}>`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:40px;
    border-bottom:${props => props.$isCenter? `1px solid ${sv.color.color100}`: `1px solid ${sv.color.color500}`};
    opacity:${props => props.$isCenter? '0,7' : '1'};
    margin-bottom:38px;
`

const CardPrice = styled.h3`
font-family: ${sv.font.unusual};
font-style: normal;
font-weight: 700;
font-size: 54px;
line-height: 66px;
margin-bottom:4px;
`

const CardTitle = styled.p`
font-family: ${sv.font.main};
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 26px;
margin-bottom:8px;
`

const CardDescription = styled.p`
font-family: ${sv.font.main};
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
color:${sv.color.color400};
text-align:center;
`

const BottomContainerCard = styled.div`
    display:flex;
    flex-direction:column;
    gap:22px;
`
const CapabilityContainer = styled.div`
    display:flex;
    gap:10px;
    align-items:center;
`

const CardCapability = styled.p`
font-family: ${sv.font.main};
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
`

const StyledButton = styled(Button)<{$isCenter?:boolean}>`
padding:24px 106px;
margin-top:32px;
color: ${props => props.$isCenter? sv.color.primary: sv.color.color800}
`