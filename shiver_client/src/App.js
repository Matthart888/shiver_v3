import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import GamerThoughts from './components/GamerThoughts';
import Guides from './components/Guides';
import News from './components/News';
import TipsAndTricks from './components/TipsAndTricks';
import LogIn from './components/LogIn';
import NewPost from './components/NewPost';

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
