import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
    }

    *, ::before, ::after {
        box-sizing: inherit;
    }

    body {
        font-family: "Roboto", sans-serif;
        font-size: 20px;
        color: ${({ theme }) => theme.color.black};
    }
`;

export default GlobalStyle;