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

Amplify.configure(awsconfig);

const App = ({ signOut }) => {
  const { user, route } = useAuthenticator((context) => [context.user]);
  
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Main />
      </div>
    </div>
  );
};

export default withAuthenticator(App);