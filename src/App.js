import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Test from "./components/test";
import Home from "./components/home";

function App() {
  return (
    <div className="setToCenter">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
