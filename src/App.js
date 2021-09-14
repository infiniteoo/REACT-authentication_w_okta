import { BrowserRouter as Router, Route } from "react-router-dom";
import React from "react";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";

import "./App.css";
import Navbar from "./components/layout/Navbar";
import Home from "./components/pages/Home";
import Staff from "./components/pages/Staff";
import Login from "./components/auth/Login";

function onAuthRequired({ history }) {
  history.push("/login");
}

function App() {
  return (
    <Router>
      <Security
        issuer="https://dev-39714079.okta.com/oauth2/default"
        client_id="0oa1t7afnnifYsWs15d7"
        redirect_uri={window.location.origin + "/implicit/callback"}
        onAuthRequired={onAuthRequired}
      >
        <div className="App">
          <Navbar />
          <div className="container">
            <Route path="/" exact={true} component={Home} />
            <SecureRoute path="/staff" exact={true} component={Staff} />
            <Route
              path="/login"
              render={() => <Login baseUrl="https://dev-39714079.okta.com" />}
            />
            <Route path="/implicit/callback" component={ImplicitCallback} />
          </div>
        </div>
      </Security>
    </Router>
  );
}

export default App;
