import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import React from 'react';
import Home from './components/pages/Home';
import Signup from "./components/pages/Signup";
import Products from "./components/pages/Products";
import Services from "./components/pages/Services";

function App() {
  return (
    <>
      <Router>
        <Navbar>
        </Navbar>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/services' exact component={Services} />
            <Route path='/products' exact component={Products} />
            <Route path='/sign-up' exact component={Signup} />
          </Switch>
        
      </Router>
    </>
  );
}

export default App;
