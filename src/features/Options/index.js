import { useEffect, useState } from "react";
import { StyledOptions, OptionLink } from "./styled";

export const Options = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledOptions height={windowHeight}>
      <OptionLink to="/bmr">BMR</OptionLink>
      <OptionLink>Add product</OptionLink>
      <OptionLink to="/composer">Compose a meal</OptionLink>
      <OptionLink>Saved meals</OptionLink>
    </StyledOptions>
  )
}