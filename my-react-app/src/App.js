import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Routes, Route , Navigate} from 'react-router-dom';


import Signin from './components/Signin';
import Home from './components/Home';
import Homenew from './components/Homenew';
import Agent from './components/Agent';


function App() {

  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');
  
const [AgentData, setAgentData] = useState([]);
const [ClientData, setClientData] = useState([]);


  useEffect(()=>{
    fetch('http://localhost:3001/client')
    .then(res => res.json())
    .then(data => setClientData(data))
    .catch(err => console.log(err));
  },[])

  useEffect(()=>{
    fetch('http://localhost:3001/agent')
    .then(res => res.json())
    .then(data => setAgentData(data))
    .catch(err => console.log(err));
  },[])
 

  return (
<>      
   <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/signin" element={<Signin  ClientData={ClientData} AgentData={AgentData} />} />
        
        <Route path="agent/:username" element={<Agent />} />
        <Route path="/agent/:username/*" element={<Agent />} />

         <Route path="users/:username" element={<Homenew  />} />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    
    </Router>
</>
  );
}

export default App;


