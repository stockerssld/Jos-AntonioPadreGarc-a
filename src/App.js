import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div style={{flex:1, backgroundColor:"red"}}>
        s
      </div>
      <div style={{flex:1, backgroundColor:'blue'}}>
        w
      </div>
      <div style={{flex:1, backgroundColor: 'yellow'}}>
        sp
      </div>
      <Footer/>
    </div>
  );
}

const Footer=()=>(
  <div style={{flex:1, backgroundColor:'#000'}}>
    <p style={{color:'white'}}>
      © José Antonio Padre García ICP netlify
    </p>
  </div>
)
export default App;
