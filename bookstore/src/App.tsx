import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import { GlobalStyle } from './style/global';
import { ThemeProvider } from "styled-components";
import {light, dark} from './style/theme';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle themeName="light"/>
      <Layout children={<Home />} />
    </ThemeProvider>
  );
}

export default App;
