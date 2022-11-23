import React, {useState, useEffect} from 'react'
import Data from './statistics.json'
import './fetch.css'
import axios from 'axios'

function Fetch() {
  
  const [value,setValue] = useState('');
  const [info, setInfo] = useState(Data);
  const [elvis, setElvis] = useState([]);

const contentFilter = e => {
  if(e.target.value !== "") {
    setValue(e.target.value);
    const contentTable = info.filter(o=>Object.keys(o).some(k=>String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())));
    setElvis([...contentFilter])
  }
  else {
    setValue(e.target.value);
    setInfo([...info])
  }
}

  return (
    <div>
      <div className='traverse'>
        <input type='text'
              placeholder='Search country...'
              value={value}
              onChange={contentFilter}
        ></input>
      </div>

      {
        value.length > 0 ? elvis.map((post,index) => 
          <table>
            <thead>
              <th>{post.country}</th>
            </thead>
          </table>
        )
        :
        info.map((post,index) => 
          <table>
            <thead>
              <th>{post.country}</th>
              <tr>
                <td>Population</td>
                <td>{post.population}</td>
              </tr>
              <tr>
                <td>Total Cases</td>
                <td>{post.cases.total}</td>
              </tr>
              <tr>
                <td>Total Deaths</td>
                <td>{post.deaths.total}</td>
              </tr>
              <tr>
                <td>Total Tests</td>
                <td>{post.tests.total}</td>
              </tr>
              <tr>
                <td>Day</td>
                <td>{post.day}</td>
              </tr>
              <tr>
                <td>Time</td>
                <td>{post.time}</td>
              </tr>
            </thead>
          </table>
        )
      }
    </div>
  )
}

export default Fetch