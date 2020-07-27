import React from 'react';
import './App.css';

// import { Layout, Content } from 'react-mdl';
import Nav from './components/Nav';
import Home from './components/Home';
import Bottom from './components/Footer';

function App() {
  return (
    <div>
      <Nav />
        <div className="page-content">
          <Home /> 
        </div>
      <Bottom/>
    </div>
    // <div className="dislay-big-content" style={{height: '100vh', position: 'relative'}}>
    //   <Layout fixedHeader>
    //     <Content>
        
    //     </Content>
    //   </Layout>
    // </div>
  );
}

export default App;
