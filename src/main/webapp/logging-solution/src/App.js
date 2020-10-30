import React from 'react';

import { BrowserRouter, Route, Switch } from "react-router-dom";

import Register from './Component/views/register';
import Login from './Component/views/login';
import FormP from './Component/views/form';

function App() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/form" component={FormP} />
        
      </Switch>
    </BrowserRouter>

  );
}

export default App;
