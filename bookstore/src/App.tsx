import Layout from "./components/layout/Layout";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

function App() {
  return (
    <Layout children={<Home />} />
    // <Detail />
  );
}

export default App;
