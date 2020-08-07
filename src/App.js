import React from 'react';
import './App.css';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* header */}
      <Header />
      <Router>
        <Switch>
          <Route path="/chat">
            <h1>I'm chat page.</h1>
          </Route>
          {/* default route page should always be at the bottom */}
          <Route path="/">
            <TinderCards/>
            <SwipeButtons />
          </Route>
        </Switch>
        {/* tinder cards */}
        {/* buttons below tinder cards */}
        {/* chat screen */}
        {/* individual chat screen */}
      </Router>

    </div>
  );
}

export default App;
