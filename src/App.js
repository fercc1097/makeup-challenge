import { Router, Link } from "@reach/router";
import NotFound from "./pages/404";
import Index from "./pages";
import Results from "./pages/results";

function App() {
  return (
    <div>
      <Router>
        <Index path="/" />
        <Results path="/results" />
        <NotFound default />
      </Router>
      ,
    </div>
  );
}

export default App;
