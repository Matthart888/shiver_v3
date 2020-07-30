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
            <Route path="/" component={Home} />
          </div>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
