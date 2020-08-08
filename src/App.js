import React from 'react';
import './App.css';
import Header from './Header';
import Chats from './Chats'
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import ChatScreen from './ChatScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">

      <Router>

        <Switch>
        <Route path="/chat/:crush">
            {/* header */}
            <Header backButton="/chat" />
            <ChatScreen/>
          </Route>
          <Route path="/chat">
            {/* header */}
            <Header backButton="/" />
            <Chats/>
          </Route>
          {/* default route page should always be at the bottom */}
          <Route path="/">
            {/* header */}
            <Header />
             {/* tinder cards */}
            <TinderCards />
             {/* buttons below tinder cards */}
            <SwipeButtons />
          </Route>
        </Switch>
       
       
        {/* chat screen */}
        {/* individual chat screen */}
      </Router>

    </div>
  );
}

export default App;
