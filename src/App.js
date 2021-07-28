import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import ApplicationConsole from "./pages/Console/ApplicationConsole";

import Error from "./pages/Error/Error";

import Layout from "./components/Layout";


import Register from "./pages/Register/Register";

import Login from "./pages/Login/Login";

import { withRouter } from 'react-router';









class App extends React.Component {
  render() {

    return (

      <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Register} exact />
           <Route path="/Login" component={Login} />
          <Route path="/SurrogacyApplicationForm" component={ApplicationConsole}/>
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
      </Layout>



    )
  }

  }


  export default App
