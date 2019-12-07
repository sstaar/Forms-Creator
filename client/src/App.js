import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";


import store from "./store";

import { NotConnectedRoute } from './Components/HelperComponents/NotConnectedRoute';
import { CreateForm } from './Components/Forms/Creation/CreateForm';
import { DisplayForm } from './Components/Forms/Display/DisplayForm';
import { Register } from './Components/Auth/Register';
import { Login } from './Components/Auth/Login';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/form/:name" component={DisplayForm} />
          <Route path="/form" component={CreateForm} />
          <NotConnectedRoute path='/register' component={Register} />
          <NotConnectedRoute path='/login' component={Login} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
