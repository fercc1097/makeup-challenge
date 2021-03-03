import { useEffect } from "react";
import { Router, Link } from "@reach/router";
import NotFound from "./pages/404";
import Index from "./pages";
import Results from "./pages/results";
import { useApp } from "./context/globalContext";
import "./styles/index.scss";
import "./styles/index_nigth.scss";

function App() {
  const { theme } = useApp();
  useEffect(() => {
    if (theme == "nigth") {
      document.body.style.backgroundColor = "#333333";
    }
  }, [theme]);
  return (
    <Router>
      <Index path="/" />
      <Results path="/results" />
      <NotFound default />
    </Router>
  );
}

export default App;
