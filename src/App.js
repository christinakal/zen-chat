import React, { Component, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  Redirect,
} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Chat from "./pages/Chat";

import { auth } from "./services/firebase";
import "./App.css";

// STATE
const [isLoading, setIsLoading] = useState(false);

function PrivateRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{ pathname: "/login", state: { from: props.location } }}
          />
        )
      }
    />
  );
}

function PublicRoute({ component: Component, authenticated, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        authenticated === false ? (
          <Component {...props} />
        ) : (
          <Redirect to="/chat" />
        )
      }
    />
  );
}

function App() {
  return isLoading === true ? (
    <h2>Loading...</h2>
  ) : (
    <Router>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <PrivateRoute
          path="/chat"
          authenticated={this.state.authenticated}
          component={Chat}
        ></PrivateRoute>
        <PublicRoute
          path="/signup"
          authenticated={this.state.authenticated}
          component={Signup}
        ></PublicRoute>
        <PublicRoute
          path="/login"
          authenticated={this.state.authenticated}
          component={Login}
        ></PublicRoute>
      </Switch>
    </Router>
  );
}

export default App;
