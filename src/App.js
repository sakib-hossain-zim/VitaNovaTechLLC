import React, {Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";

import GigRequest from "./scenes/GigRequest/GigRequest";

import Error from "./scenes/Error/Error";

import Layout from "./components/Layout";


import Register from "./scenes/Register/Register";

import Login from "./scenes/Login/Login";

import { withRouter } from 'react-router';









class App extends React.Component {
  render() {

    return (
     
      <Layout>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Register} exact />
           <Route path="/Login" component={Login} />
          <Route path="/GigRequest" component={GigRequest}/> 
          <Route component={Error}/>
        </Switch>
      </BrowserRouter>
      </Layout>
     

    
    )
  }
    
  }


  export default App
