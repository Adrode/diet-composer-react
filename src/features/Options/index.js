import { useEffect, useState } from "react";
import { StyledOptions, Option } from "./styled";

export const Options = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledOptions height={windowHeight}>
      <Option>BMR</Option>
      <Option>Add product</Option>
      <Option>Compose a meal</Option>
      <Option>Saved meals</Option>
    </StyledOptions>
  )
}