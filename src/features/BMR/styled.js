import styled from "styled-components";

export const BMRSummary = styled.article`
    margin: 0 0 40px 0;
`;

export const Header = styled.h2`
    margin: 0 0 20px 0;
    font-size: 28px;
    font-weight: normal;
`;

export const Subheader = styled.h3`
    font-size: 22px;
    font-weight: normal;
    opacity: 60%;
`;

export const MacroContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    padding-bottom: 10px;
    border-bottom: 2px solid ${({ theme }) => theme.color.grey};
`;

export const Macro = styled.p`
    margin: 0;
`;

export const BMRCalculator = styled.form`
    border: 2px solid ${({ theme }) => theme.color.grey};
    box-shadow: 5px 5px 15px -2px;
    padding: 20px;
    width: 100%;

    display: grid;
    grid-template-columns: auto 1fr;
    gap: 20px 40px;
`;

export const LabelsContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
`;

export const Label = styled.label``;

export const InputsContainer = styled.div`
    display: grid;
    grid-template-rows: repeat(5, 1fr);
    gap: 20px;
`;

export const Input = styled.input`
    padding: 0;
`;

export const Submit = styled.button`
    grid-column-start: 1;
    grid-column-end: -1;
    width: fit-content;
    justify-self: center;
    padding: 10px 30px;
`;