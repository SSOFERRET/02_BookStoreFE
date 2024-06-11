import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { GlobalStyle } from './style/global';
import { ThemeProvider } from "styled-components";
import { ThemeName, light, dark, getTheme} from './style/theme';
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { ThemeContext } from "./context/themeContext";

function App() {
  const themeName = useContext(ThemeContext);
  return (
    <ThemeProvider theme={getTheme(themeName)}>
      <GlobalStyle themeName={themeName}/>
      <ThemeSwitcher themeName={themeName} setThemeName={() => {}}/>
      <Layout children={<Home />} />
    </ThemeProvider>
  );
}

export default App;
