import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Principal from "./pages/Principal";
import Error from "./pages/404";
function App() {
  return (
    <Router>
      <div className="app">
        <Route exact={true} path="/" component={Principal} />
        <Route exact={true} path="/404" component={Error} />
      </div>
    </Router>
  );
}

export default App;
