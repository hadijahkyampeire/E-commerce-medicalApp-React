import React, { Component } from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import Notifications from 'react-notify-toast';
import {Provider} from 'react-redux';
import './App.css';
import store from './redux/reducers/index';
import Landing from './components/Landing';
import Dashboard from './components/Dashboard/dashboard';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className="App">
      <Notifications/>
      <Switch>
       <Route exact path="/" component={Landing}/>
       <Route exact path="/dashboard" component={Dashboard}/>
       </Switch>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
