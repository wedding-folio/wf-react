import React from "react"
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route
} from "react-router-dom"
// application pages
import Navbar from "@components/Navbar"
import Home from "@screens/posts"
import PostDetails from "@screens/posts/PostDetails";
import NotFound from "@screens/404NotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/post/:user/:id">
            <PostDetails />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
