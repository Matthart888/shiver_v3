import React from 'react';
import './App.css';

// import { Layout, Content } from 'react-mdl';
import Header from './components/Header';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
        <div className="page-content">
          <Home /> 
        </div>
      <Footer />
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
