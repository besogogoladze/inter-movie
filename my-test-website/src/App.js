import Home from "./Screen/Home/index";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import './App.css';


function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/Home" exact component={Home} />
          <Route path="/" isActive={(match, location) => {
            if (location.pathname === '/' || match) {
              return true
            }
            return false
          }} exact component={Home} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
