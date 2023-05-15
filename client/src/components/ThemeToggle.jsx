import { FaMoon, FaSun } from "react-icons/fa";
import { useContext } from "react";
import ThemeContext from "../context";
import { ToggleStyle } from "./style/ToggleTheme.style";

const ThemeToggle = () => {
  const { setDarkTheme, darkTheme } = useContext(ThemeContext);

  const handleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  return (
    <ToggleStyle onClick={handleTheme}>
      <span className={darkTheme ? "moon" : "moon moon_dark"}>
        <FaMoon />
      </span>
      <span className={darkTheme ? "sun_light sun" : "sun"}>
        <FaSun />
      </span>
    </ToggleStyle>
  );
};

export default ThemeToggle;
