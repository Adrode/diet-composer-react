import styled from "styled-components";

export const StyledMealComposer = styled.section`
    padding: 0 40px;
    width: 100%;
    height: max-content;
`;

export const MacrosSummary = styled.article`
    margin: 20px 0 40px 0;
`;

export const Header = styled.h2`
    width: 100%;
    margin: 0 0 20px 0;
    font-size: 28px;
    font-weight: normal;
`;


export const MacroContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
`;

export const Macro = styled.p`
    margin: 0;
`;

export const ProductPickersContainer = styled.article`
    display: flex;
    flex-wrap: wrap;
    gap: 40px;
`;

export const ProductPicker = styled.form`
    border: 2px solid ${({ theme }) => theme.color.grey};
    box-shadow: 5px 5px 15px -2px;
    padding: 20px;
    width: max-content;

    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(4, auto);
    grid-gap: 20px;
`;

export const ProductsList = styled.select`
    margin: 0;
    padding: 0;
    font-size: 22px;
    text-wrap: wrap;
    max-width: 150px;
    min-height: 75px;
    height: 40px;
    border: 0;
    text-align: center;
    font-weight: bold;
    

    grid-column-start: 1;
    grid-column-end: -1;

    &:focus {
        outline: none;
        border: none;
    }
`;

export const MacroProperties = styled.div`
    
`;

export const Property = styled.p`
    padding-bottom: 5px;
    margin: 0;
`;

export const MacroValues = styled.div`
    
`;

export const Value = styled.p`
    padding-bottom: 5px;
    margin: 0;
`;

export const ChangeValues = styled.div`
    grid-column-start: 1;
    grid-column-end: -1;

    display: flex;
    justify-content: space-around;

    font-size: 26px;
`

export const WeightValue = styled.input`
    border: none;
    max-width: 100px;
    text-align: center;

    &:focus {
        outline: none;
        border: none;
    }
`;

export const WeightButton = styled.button`
    border: none;
    background-color: ${({ theme }) => theme.color.white};
    text-align: center;

    &:hover {
        cursor: pointer;
    }
`;