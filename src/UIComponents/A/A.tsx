import Link from "next/link"
import React, { FC, PropsWithChildren } from "react"
import styled from "styled-components"

type AProps = PropsWithChildren<{
    href:string,
}>

const A:FC<AProps> = ({href,children}) => {
    return (
        <StyledLink href={href}>
        {children}
        </StyledLink>
    )
}

export default A

const StyledLink = styled(Link)`
    color:white;
`