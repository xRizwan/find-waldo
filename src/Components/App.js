// main
import React from 'react';
// components
import Header from './Header';
import Main from './Main';
import Leaderboard from './Leaderboard';
// firebase
//import firebase from '../config/config'
//const db = firebase.firestore();
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


function App(){

  return (
    <React.Fragment>
      <Router>
        <div>
          <Header />
          <Switch>
            <Route exact path="/">
              <Main />
            </Route>
            <Route path="/leaderboards">
              <Leaderboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  )
}

export default App;
