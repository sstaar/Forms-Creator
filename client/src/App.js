import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store";

import { ConnectedRoute } from './Components/HelperComponents/ConnectedRoute';
import { NotConnectedRoute } from './Components/HelperComponents/NotConnectedRoute';
import { CreateForm } from './Components/Forms/Creation/CreateForm';
import { DisplayForm } from './Components/Forms/Display/DisplayForm';
import { Register } from './Components/Auth/Register';
import { Login } from './Components/Auth/Login';
import { FormSubs } from './Components/User/FormSubs';
import { Home } from './Components/User/Home';
import { NavBar } from './Components/Nav/NavBar';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/form/:name" component={DisplayForm} />
          <NotConnectedRoute exact path='/register' component={Register} />
          <NotConnectedRoute exact path='/login' component={Login} />
          <ConnectedRoute exact path='/home' component={Home} />
          <ConnectedRoute exact path="/form" component={CreateForm} />
          <ConnectedRoute exact path="/user/form/:name" component={FormSubs} />
          <ConnectedRoute exact path='' component={Home} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
