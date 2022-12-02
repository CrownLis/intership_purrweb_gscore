import MainLayout from "@/layouts/MainLayout";
import Button from "@/UIComponents/Button";
import { FC } from "react";
import styled from "styled-components";

const Start: FC = () => {
    return (
        <MainLayout>
            <Container>
                <StyledTitle>
                    Start your subscription
                </StyledTitle>
                <StyledDescription>
                We have sent you a payment receipt by e-mail and a link to download the plugin with a license key.
                </StyledDescription>
                <CartContainer>
                    <CartTitleContainer>
                        <CartTitle>Package name</CartTitle>
                        <CartTitle>Price</CartTitle>
                    </CartTitleContainer>
                    <CartProductsContainer>
                        <ProductsTitle>Single site license</ProductsTitle>
                        <CartPriceContainer>
                            <ProductsTitle>$77</ProductsTitle>
                        </CartPriceContainer>
                    </CartProductsContainer>
                </CartContainer>
                <StyledButton isUnusual>Go to my subscriptions</StyledButton>
            </Container>
        </MainLayout>
    )
}

export default Start;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    color:white;
    padding-bottom:390px;
`

const StyledTitle = styled.h3`
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    margin:16px 0;
`

const StyledDescription = styled.p`
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 24px;
`

const CartContainer = styled.div`
    display:flex;
    flex-direction:column;
    max-width:620px;
    background-color: #272727;
    border:0;
    border-radius: 12px;
    margin:48px 0;
`

const CartTitleContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding:48px 72px 32px 32px;
    border-bottom: 1px solid #969696;
`

const CartProductsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding:32px 81px 48px 32px;
`

const CartTitle = styled.h3`
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color:white;
`

const ProductsTitle = styled.span`
    font-family: ${sv.font.main};
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 38px;
`

const CartPriceContainer = styled.div`
    display:flex;
    align-items:center;
    gap:10px;
`

const StyledButton = styled(Button)`
    max-width:620px;
    text-align:center;
    padding:20px 0;
`