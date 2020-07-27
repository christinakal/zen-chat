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

function App() {
  return <div>Z Chat</div>;
}

export default App;
