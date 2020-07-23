import React from 'react';
import './App.css';

import { Layout, Content } from 'react-mdl';
import Nav from './components/Nav';
import Home from './components/Home'

function App() {
  return (
    <div className="dislay-big-content" style={{height: '100vh', position: 'relative'}}>
      <Layout fixedHeader>
        <Nav />

        <Content>
          <div className="page-content">
            <Home />
          </div>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
