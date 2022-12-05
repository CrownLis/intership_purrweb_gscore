import { FC } from "react";
import styled, { css } from "styled-components";

type StatusType = {
    status: 'active' | 'hold' | 'inactive';
}


const Status: FC<StatusType> = ({ status }) => {

    const getStatusTitle = () => {
        if (status === 'active') {
            return 'Active'
        }
        if (status === 'hold') {
            return 'Hold'
        }
        if (status === 'inactive') {
            return 'Inactive'
        }
        return 'Active'
    }


    return (
        <Title $status={status}>{getStatusTitle()}</Title>
    )
}

export default Status;

const getStylesStatus = (status: string) => {
    switch (status) {
        case 'active': {
            return css`
            color:${props => props.theme.color.green300};
            `
        }
        case 'hold': {
            return css`
            color:${props => props.theme.color.orange300};
            `
        }
        case 'text': {
            return css`
            color:${props => props.theme.color.red300};
            `
        }
    }
}

const Title = styled.span<{ $status: string }>`
    font-family:${props => props.theme.fonts.main};
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 28px;
    ${({ $status }) => getStylesStatus($status)};
`