import React from 'react';
import './App.css';
import SideNav from './components/SideNav';
import Amplify from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);

function App() {
  return (
    <div className="App">
      <SideNav />    
    </div>
  );
}

export default App;
