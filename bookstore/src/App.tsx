import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { GlobalStyle } from './style/global';
import { ThemeProvider } from "styled-components";
import { ThemeName, light, dark, getTheme} from './style/theme';
import ThemeSwitcher from "./components/header/ThemeSwitcher";
import { useContext, useState } from "react";
import { BookStoreThemeProvider, ThemeContext } from "./context/themeContext";

function App() {
  return (
    <BookStoreThemeProvider>
        <ThemeSwitcher />
        <Layout children={<Home />} />
    </BookStoreThemeProvider>
  );
}

export default App;
