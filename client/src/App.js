import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        {/* <Route exact path="/" component={}/> */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  );
}

export default App;
