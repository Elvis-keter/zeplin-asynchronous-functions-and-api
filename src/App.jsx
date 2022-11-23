import React from 'react'
//import Login from './context/login/Login';
//import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import HomePage from './context/home/HomePage';
import Backend from './context/home/Backend';
import Fetch from './context/home/Fetch';
import { useNavigate } from 'react-router';

//import FrontEnd from './context/home/FrontEnd';
//import { PDFViewer } from '@react-pdf/renderer';
//import Abstract from './context/home/Abstract';
//import Introduction from './context/introduction/Introduction';

function App() {
  return (
    <main className="App">
      <h1>GRAPH HISTORY OF COVID-19 DATA</h1>
      <Backend/>
      <br></br>
      <h1>TABLE STATISTICS</h1>
      <br/>
      <Fetch />
    </main>
  )
}

export default App


/*import { useState } from 'react';
import ChoreChart from './context/home/ChoreChart';
import ChoreForm from './context/home/ChoreForm'


function App(props) {
  const [choreLogs, setChoreLogs] = useState([]);
  const addChoreLog = (log) => {
    let logs = [...choreLogs, log];
    setChoreLogs(logs);
  }
  return (
    <section>
      <ChoreForm addChoreLog={addChoreLog}/>
      <ChoreChart chores={choreLogs}/>
    </section>
  );
}

export default App;}*/
