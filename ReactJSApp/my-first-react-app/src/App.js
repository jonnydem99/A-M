import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Nav, NavItem, NavLink } from 'reactstrap';



function App() {
  return (
    <div className="App">
      <Nav fill variant="tabs" defaultActiveKey="/home">
        <NavLink href="/home">Active</NavLink>
        <NavItem></NavItem>
      </Nav>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
