import styled from "styled-components";

export const StyledOptions = styled.nav`
    background-color: ${({ theme }) => theme.color.grey};
    width: 250px;
    height: ${({ height }) => `${height}px`};
    padding: 20px 0 20px 15px;
    color: ${({ theme }) => theme.color.whiteForText};
`;

export const Option = styled.p`
    display: block;
    margin: 0 0 20px 0;
    border-bottom: 2px solid ${({ theme }) => theme.color.whiteForText};
    transition: 0.07s linear; 

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