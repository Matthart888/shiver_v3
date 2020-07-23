import React from 'react';
import './App.css';

import { Layout, Content } from 'react-mdl';
import Nav from './components/Nav';
import Home from './components/Home'

function App() {
  return (
    <div style={{height: '100vh', position: 'relative'}}>
      <Layout fixedHeader>
        <Nav />

        <Content>
          <Home />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
