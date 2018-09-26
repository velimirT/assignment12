import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { SurveyWrap } from './components/Containers';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';
import { HashRouter, Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Friends Finder</h1>
        </header>

        <HashRouter>
            <Switch>
              <Route exact path = "/" component = {Home}/>
              <Route exact path = "/survey" component = {SurveyWrap}/>
              <Route component = {ErrorPage} />
            </Switch>
        </HashRouter>
      </div>
    );
  }
}

export default App;
