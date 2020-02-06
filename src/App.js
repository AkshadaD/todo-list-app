import React, { Component } from 'react';
import Login from './components/Login/LoginPage';
import Todo from './components/ToDo/Todo';
import {Register} from './components/Login/RegisterPage';
import Aux from './hoc/Aux';
import NavbarComp from './components/NavbarComp';
import {history} from './_helpers/history';
import {alertActions} from './actions/alert_action';
import {Router, Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';

//import uuid from 'uuid';


class App extends Component {
  constructor(props){
    super(props);

    history.listen((location, action) =>{
      
      //clear alert on location change
      this.props.clearAlerts();
    })

  }

  render() {
    const {alert} = this.props;
    return (
      <Aux>
        <Router history={history}>
          <div>
            <NavbarComp />
          </div>
            
          <div>
          {/* {alert.message &&
                            <div className={`alert ${alert.type}`}>{alert.message}</div>
          } */}
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
}

function mapState(state){
    const {alert} = state;
    return {alert};
}

const actionCreater = {
  clearAlerts: alertActions.clear
}

const connectedApp = connect(mapState, actionCreater)(App);

export {connectedApp as App};
