import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import "./app.css";
import Profile from "./pages/Profile/Profile";
import LoginRegister from "./pages/LoginRegister/LoginRegister";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  const { user } = useContext(AuthContext);
  const [loggedInUser, setLoggedInUser] = user;
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            {loggedInUser.email ? <Home /> : <LoginRegister />}
          </Route>
          <Route exact path="/profile/username">
            {loggedInUser.email ? <Profile /> : <LoginRegister />}
          </Route>
          <Route exact path="/login">
            {!loggedInUser.email ? <LoginRegister /> : <Redirect to="/" />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
