import React,{useRef, useState, useEffect} from 'react';
import './App.css';
import MyTable from './MyTable'
import MyInput from './MyInput'
import {
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom'

function App() {
  const [list, setList] = useState([]); // list = []
  const fnameRef = useRef();
  const lnameRef = useRef();
  useEffect( ()=> {
    console.log(JSON.stringify(list))
  }, [list])

  function handleClick() {
    setList( [...list, {fname: fnameRef.current.value, lname: lnameRef.current.value}])
  }
  
  return (
    <div className="App">
      <div><input type="text" ref={fnameRef} placeholder="First Name" />
          <input type="text" ref={lnameRef} placeholder="Last Name" />
          <button onClick={handleClick}>Click Me</button></div>
      <MyTable tableName="Employees" list={list}/>
      
    </div>
  );

}

export default App;
