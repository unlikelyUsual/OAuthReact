import React from 'react';
import './App.css';
import Landing from './components/interface/Landing'
import Header from './components/interface/Header'
import Footer from './components/interface/Footer'
import UserAccount from './components/user/UserAccount'
import {BrowserRouter as Router , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
          <Route path="/" exact component={Landing}></Route>
          <Route path="/account" component={UserAccount}></Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
