// main
import React from 'react';
// components
import Header from './Header';
import Main from './Main';
import Leaderboard from './Leaderboard';
// firebase
//import firebase from '../config/config'
//const db = firebase.firestore();
import {BrowserRouter as Router, Route} from 'react-router-dom'


function App(){

  return (
    <Router>
        <Header />
        <Route path="/" exact >
          <Main />
        </Route>
        <Route path="/leaderboards">
          <Leaderboard />
        </Route>
    </Router>
  )
}

export default App;
