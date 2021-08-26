import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Landing from "./components/Landing";
import Profile from "./components/Profile";
import GetPosts from "./components/GetPosts";
import GetIndivisualPost from "./components/GetIndivisualPost";
import Navbar from "./components/UI/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/profile" component={Profile} />
        <Route path="/getallposts" component={GetPosts} />
        <Route path="/post/:id" component={GetIndivisualPost} />
      </Switch>
    </Router>
  );
}

export default App;
