import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,Navigate 
} from "react-router-dom";
import Login from './components/Login.js';
import NavBar from './components/navBar.tsx';

function App() {
  const token = localStorage.getItem('token');

  return (
    <Router>
      {/*  */}
     
      <Routes >
      {token ? (
        <>
        <Route path='/' exact element={<NavBar />} />
        </>
      ):(
        <>  
        <Route path="/Login" element={<Login/>} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        </>
      )}
       
      </Routes>
    </Router>
  );
}

export default App;