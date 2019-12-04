import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { CreateForm } from './Components/Forms/Creation/CreateForm';
import { DisplayForm } from './Components/Forms/Display/DisplayForm';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/form/:name" component={DisplayForm} />
        <Route path="/form" component={CreateForm} />
      </Switch>
    </Router>
  );
}

export default App;
