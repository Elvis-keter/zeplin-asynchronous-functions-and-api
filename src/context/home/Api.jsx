import React , {useState,useEffect}from 'react'
import './home.css'

function Api () {
  //state to be used for mapping
  const [user, setUser] = useState([]);

  /*asynchronous function and API*/
  const fetchData = () => {
    /*API request using fetch().
    Users from a JSON API below*/
    return fetch("https://jsonplaceholder.typicode.com/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  //making sure it renders only once
  useEffect(() => {
    fetchData();
  },[])

  return (
    <>
      <div className="report__maincontainer">
          <div className="header">
            <div className="form1">
              <form>
                {
                  user && user.length > 0 && user.map((post,index) => 
                    <table>
                      <thead>
                        <th>Details stored</th>
                        <tr>
                          <td>Id</td>
                          <td>{post.id}</td>
                        </tr>
                        <tr>
                          <td>Name</td>
                          <td>{post.name}</td>
                        </tr>
                        <tr>
                          <td>Email</td>
                          <td>{post.email}</td>
                        </tr>
                        <tr>
                          <td>Address</td>
                          <td>{post.address.street}</td>
                        </tr>
                          
                      </thead>
                    </table>
                  )
                }
              </form>
            </div>
          </div>
      </div>         
    </>
  )
}

export default Api