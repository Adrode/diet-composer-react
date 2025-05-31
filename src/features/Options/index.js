import { useEffect, useState } from "react";
import { StyledOptions, Option } from "./styled";
import { Link } from "react-router-dom";

export const Options = () => {
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledOptions height={windowHeight}>
      <Link to="/bmr"><Option>BMR</Option></Link>
      <Option>Add product</Option>
      <Link to="/composer"><Option>Compose a meal</Option></Link>
      <Option>Saved meals</Option>
    </StyledOptions>
  )
}