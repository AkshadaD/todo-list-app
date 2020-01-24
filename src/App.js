import React from 'react';
import Login from './components/Login/Login';
import Todo from './components/ToDo/Todo';
import Register from './components/Login/Register';
import Aux from './hoc/Aux';
import NavbarComp from './components/NavbarComp';

import {BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//import uuid from 'uuid';


function App() {
  return (
    <Aux>
      <Router>
        <div>
          <NavbarComp />
        </div>
          
        <div>
        
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/todo" component={Todo} />
            <Redirect to="/login" />
          </Switch>
       
        </div>
      </Router>
    
    </Aux>
  );
}

export default App;
