import styled from "styled-components";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.color.darkGrey};
    color: ${({ theme }) => theme.color.whiteForText};
`;

export const Logo = styled.img`
    border-radius: 50%;
    width: 100%;
    height: 100%;
    max-width: 48px;
    max-height: 48px;
    transition: 0.15s linear;
    
    &:hover {
        transform: scale(1.05);
        cursor: pointer;
    }
`;

export const Title = styled.h1`
    margin: 0 0 0 20px;
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
`;