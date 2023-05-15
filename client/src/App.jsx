import { GlobalStyle } from "./components/style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./context";
import { useState } from "react";
import ContactForm from "./components/ContactForm";
import { Toaster } from "react-hot-toast";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const theme = {
    bodyBg: darkTheme ? " #393E46" : "#F1F3F8",
    textColor: darkTheme ? "#EEEEEE" : "#1E2022",
    formBg: darkTheme ? "#222831" : " #F0F5F9",
    formShadow: darkTheme ? "#00ADB5" : "#52616B",
    formInput: darkTheme ? "#00ADB5" : "#52616B",
    buttonBg: darkTheme ? "#00ADB5" : "#1E2022",
    buttonTxtColor: !darkTheme ? "#EEEEEE" : "#1E2022",
    formHeading: darkTheme ? "#00ADB5" : "#1E2022",
  };

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <ContactForm />
          <Toaster />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
