import React from 'react';
import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import GamerThoughts from './components/GamerThoughts';
import Guides from './components/Guides';
import News from './components/News';
import TipsAndTricks from './components/TipsAndTricks';
// import LogIn from './components/LogIn';
import NewPost from './components/NewPost';
import Post from './components/Post';
import Edit from './components/Edit';

import { BrowserRouter as Router,  Route } from 'react-router-dom'

function App() {
  return (
    <Router>
        <Header />
            <Route path="/" exact component={Home} />
            <Route path="/gamerthoughts" component={GamerThoughts} />
            <Route path="/guides" component={Guides} />
            <Route path="/news" component={News} />
            <Route path="/tipsandtricks" component={TipsAndTricks} />
            {/* <Route path="/login" component={LogIn} /> */}
            <Route path="/newpost" component={NewPost} />
            <Route exact path="/post/:post_id" component={Post}/>
            <Route exact path="/post/:post_id/edit" component={Edit}/>
        <Footer />
    </Router>
    
  );
}

export default App;
