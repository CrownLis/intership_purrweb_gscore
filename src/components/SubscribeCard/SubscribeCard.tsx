import Button from "@/UIComponents/Button";
import { FC } from "react";
import styled, { css } from "styled-components";

import Check from './../../assets/images/Check.svg';

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
                    <CapabilityContainer><Check /><CardCapability>{capability}</CardCapability></CapabilityContainer>
                    <CapabilityContainer><Check /><CardCapability>Special introductory pricing</CardCapability></CapabilityContainer>
                    <CapabilityContainer><Check /><CardCapability>Unlimited Pages and Keywords</CardCapability></CapabilityContainer>
                    <CapabilityContainer><Check /><CardCapability>Billed annually</CardCapability></CapabilityContainer>
                </BottomContainerCard>
                <StyledButton isPrimary={isCenter? true : false}>Get Gscore</StyledButton>
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
            background-color:#FC5842;
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
const TopContainerCard = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center;
    padding-bottom:40px;
    border-bottom:1px solid #969696;
    margin-bottom:38px;
`

const CardPrice = styled.h3`
font-family: 'DM Sans';
font-style: normal;
font-weight: 700;
font-size: 54px;
line-height: 66px;
margin-bottom:4px;
`

const CardTitle = styled.p`
font-family: 'THICCCBOI';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 26px;
margin-bottom:8px;
`

const CardDescription = styled.p`
font-family: 'THICCCBOI';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 30px;
color:#C7C7C7;
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
font-family: 'THICCCBOI';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
`

const StyledButton = styled(Button)`
padding:24px 106px;
margin-top:32px;
`