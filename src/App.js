import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  useAuthenticator,
} from "@aws-amplify/ui-react";

import { Amplify } from "aws-amplify";
import awsconfig from "./amplifyconfiguration.json";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

import Infomation from "./components/Infomation";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom"

Amplify.configure(awsconfig);

const App = ({ signOut }) => {
  const { user, route } = useAuthenticator((context) => [context.user]);
  
  return (
    <div className="App">
      <Header />
      <div className="main">
        
      <Router>
        <Routes>
          <Route path='' Component={Main} />
          <Route path="/Infomation"  Component={Infomation } />
        </Routes>
      </Router>
      </div>
    </div>
  );
};

export default withAuthenticator(App);