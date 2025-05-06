import { StyledHeader, Logo, Title } from "./styled";
import logo from "../images/AWIconRegular.png";

export const Header = () => (
    <StyledHeader>
        <Logo src={logo} alt="logo" />
        <Title>Diet composer</Title>
    </StyledHeader>
);