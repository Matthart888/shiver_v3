import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Header />
          <div className="page-content">
            <Route path="/" exact component={Home} />
            <Route path="/gamerthoughts" component={GamerThoughts} />
            <Route path="/guides" component={Guides} />
            <Route path="/news" component={News} />
            <Route path="/tipsandtricks" component={TipsAndTricks} />
            <Route path="/login" component={LogIn} />
            <Route path="/newpost" component={NewPost} />
          </div>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
