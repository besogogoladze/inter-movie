import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/header';
import Home from './screens/home';
import About from './screens/about';

function App() {
  return (
    <>
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/user" />
        </Switch>
      </Router>
    </>
  );
}

export default App;
