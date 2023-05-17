import { GlobalStyle } from "./components/style/GlobalStyle";
import { ThemeProvider } from "styled-components";
import ThemeContext from "./context";
import { useState } from "react";
import ContactFormPage from "./pages/ContactForm";
import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DataPage from "./pages/Data";

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
    skeletonCardBack: darkTheme ? "#393E46" : "#dddbdd",
    skeletonCardAnimation: darkTheme ? "0, 173, 181" : "255,255,255",
  };

  return (
    <>
      <ThemeContext.Provider value={{ darkTheme, setDarkTheme }}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <Router>
            <Routes>
              <Route path="/" element={<ContactFormPage />} />
              <Route path="/data" element={<DataPage />} />
            </Routes>
          </Router>
          <Toaster />
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
