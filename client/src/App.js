import Signup from "./components/auth/Signup";
import Login from "./components/auth/Login";
import Landing from "./components/Landing";
import GetPosts from "./components/GetPosts";
import GetIndivisualPost from "./components/GetIndivisualPost";
import NextPage from "./components/NextPage";
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
        <Route path="/getallposts" component={GetPosts} />
        <Route path="/post/:id" component={GetIndivisualPost} />
        <Route path="/next" component={NextPage} />
      </Switch>
    </Router>
  );
}

export default App;
