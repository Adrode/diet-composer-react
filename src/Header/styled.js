import styled from "styled-components";
import logo from "../images/AWIconRegular.png";

export const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: flex-start;

    width: 100%;
    height: 50px;
    background-color: ${({ theme }) => theme.color.darkGrey};
    color: ${({ theme }) => theme.color.whiteForText};
`;

export const StyledLogo = styled.img`
    background-image: url(${logo});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100%;
    max-width: 50px;
    max-height: 50px;
    transition: 0.15s linear;
    
    &:hover {
        transform: scale(1.1);
    }
`;

export const StyledTitle = styled.h1`
    margin: 0 0 0 20px;
    font-size: 32px;
    text-align: center;
    text-transform: uppercase;
`;