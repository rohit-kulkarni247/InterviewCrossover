import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Landing from "./components/Landing";
import GetPosts from "./components/GetPosts";
import GetIndivisualPost from "./components/GetIndivisualPost";
import Profile from "./components/auth/Profile";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/getallposts" component={GetPosts} />
        <Route path="/post/:id" component={GetIndivisualPost} />
        <Route path="/profile" component={Profile} />
      </Switch>
    </Router>
  );
}

export default App;
