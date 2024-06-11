import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { GlobalStyle } from './style/global';
import { ThemeProvider } from "styled-components";
import { ThemeName, light, dark} from './style/theme';
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useState } from "react";

function App() {
  const [themeName, setThemeName] = useState<ThemeName>('light');
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle themeName="light"/>
      <ThemeSwitcher />
      <Layout children={<Home />} />
    </ThemeProvider>
  );
}

export default App;
