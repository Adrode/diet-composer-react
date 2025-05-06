import { useEffect, useState } from "react";
import { StyledOptions } from "./styled";

export const Options = () => {
    const [windowHeight, setWindowHeight] = useState(window.innerHeight);

    useEffect(() => {
        const handleResize = () => setWindowHeight(window.innerHeight);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <StyledOptions height={windowHeight}>
            Nav
        </StyledOptions>
    )
}