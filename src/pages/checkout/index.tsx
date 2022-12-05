import StatusLine from "@/components/Status/StatusLine";
import MainLayout from "@/layouts/MainLayout";
import { FC } from "react";
import styled from "styled-components";

import Cart from '@/assets/images/Cart.svg'
import Button from "@/UIComponents/Button";

const Checkout: FC = () => {
    return (
        <MainLayout>
            <Container>
                <StatusContainer>
                    <StatusLine text="Create account" isActive />
                    <StatusLine text="Log in" isActive />
                    <StatusLine text="Checkout" isActive />
                </StatusContainer>
                <StyledTitle>Checkout</StyledTitle>
                <CartContainer>
                    <CartTitleContainer>
                        <CartTitle>Package name</CartTitle>
                        <CartTitle>Price</CartTitle>
                    </CartTitleContainer>
                    <CartProductsContainer>
                        <ProductsTitle>Single site license</ProductsTitle>
                        <CartPriceContainer>
                            <ProductsTitle>$77</ProductsTitle>
                            <Cart />
                        </CartPriceContainer>
                    </CartProductsContainer>
                </CartContainer>
                <PriceContainer>
                    <StyledPrice>
                        Total:
                    </StyledPrice>
                    <StyledPrice>
                        $77
                    </StyledPrice>
                </PriceContainer>
                <StyledButton variant="primary">Purchase</StyledButton>
            </Container>
        </MainLayout>
    )
};

export default Checkout;

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin:0 410px 290px;
    color:${props => props.theme.color.color100};
`;

const StatusContainer = styled.div`
    display:flex;
    gap:16px;
`;

const StyledTitle = styled.h2`
    font-family: ${props => props.theme.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 54px;
    margin-top:64px;
`

const CartContainer = styled.div`
    display:flex;
    flex-direction:column;
    background-color: #272727;
    border:0;
    border-radius: 12px;
    margin:32px 0 24px;
`

const CartTitleContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding:48px 72px 32px 32px;
    border-bottom: 1px solid ${props => props.theme.color.color500};
`

const CartProductsContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding:32px 50px 48px 32px;
`

const CartTitle = styled.h3`
    font-family: ${props => props.theme.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 34px;
    color:${props => props.theme.color.color100};
`

const ProductsTitle = styled.span`
    font-family: ${props => props.theme.font.main};
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

const PriceContainer = styled.div`
display:flex;
justify-content:space-between;
margin:24px 0 48px;
`

const StyledPrice = styled.h3`
    font-family: ${props => props.theme.font.main};
    font-style: normal;
    font-weight: 700;
    font-size: 28px;
    line-height: 40px;
`

const StyledButton = styled(Button)`
    max-width:200px;
    text-align:center;
    padding:20px 0;
`