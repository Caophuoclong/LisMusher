import "./App.scss";
import ListenRoom from "./features/listenRoom";
import Login from "./features/login";
import Register from "./features/register";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import jwt from "jsonwebtoken";
import { useState } from "react";
import { useEffect } from "react";
function App() {
  const token = window.localStorage.getItem("token");
  const [name, setName] = useState(false);
  useEffect(() => {
    jwt.verify(JSON.parse(token), "2603", (error, data) => {
      console.log(error);
      if (error) {
        console.log("error");
      } else {
        setName(data.username);
        console.log(data);
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={ListenRoom} />
          <Route path="/dashboard/:id" exact component={ListenRoom} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
        </Switch>
      </div>
    </Router>
  );
}
export default App;
