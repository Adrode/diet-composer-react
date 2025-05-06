import styled from "styled-components";

export const StyledOptions = styled.nav`
    background-color: ${({ theme }) => theme.color.grey};
    width: 250px;
    height: ${({ height }) => `${height}px`};
`;