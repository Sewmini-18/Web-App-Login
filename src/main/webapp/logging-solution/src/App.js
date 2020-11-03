import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Register from './Component/views/register';
import Login from './Component/views/login';

import Layout from './Component/views/layout/layout'



function App() {

  return (
    <BrowserRouter>
   
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route path='/home' render={(props) => <Layout {...props} /> } /> 
      </Switch>
      
    </BrowserRouter>

  );
}

export default App;
