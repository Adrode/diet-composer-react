import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledOptions = styled.nav`
    background-color: ${({ theme }) => theme.color.grey};
    min-width: 250px;
    min-height: ${({ height }) => `${height}px`};
    padding: 20px 0 20px 15px;
    color: ${({ theme }) => theme.color.whiteForText};
`;

export const OptionLink = styled(Link)`
    display: block;
    margin: 0 0 20px 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.whiteForText};
    transition: 0.07s linear;
    color: inherit;
    text-decoration: none;

    &:hover {
        color: ${({ theme }) => theme.color.white};
        border-bottom-color: ${({ theme }) => theme.color.white};
        cursor: pointer;
        transform: scale(1.01);
    }

    &:active {
        transform: scale(1);
    }
`;