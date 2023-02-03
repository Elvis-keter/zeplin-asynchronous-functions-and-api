import React , {useState,useEffect}from 'react'
import './home.css'
import Api from '../../context/home/Api';

//import axios from 'axios'

/*functional component rendering */
function Home() {
  /*---Rapid api to analyse covid statistics was invalid, decided to try another api*/

  /*const [value,setValue] = useState('');
  const [info, setInfo] = useState([]);
  const [elvis, setElvis] = useState([]);
  const [cnsl, setCnsl] = useState('');

  useEffect(() => {
    axios.request(options).then(function (response) {
      console.log(response.data);
    setCnsl(response.data.data[0].screen_data.response)
    }).catch(function (error) {
      console.error(error);
    });
  },[])

  const fetchData = () => {
    return fetch("https://covid-193.p.rapidapi.com/statistics")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  */

  // React States
  const [uname, setUname] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessages, setErrorMessages] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  //clear errored inputs
  useEffect(() => {
    setErrorMessages('');
  }, [uname, password])

  // User Login info
  const database = [
    {
      username: "user1",
      password: "X9H7F1"
    }
  ];

  const errors = {
    uname: "Invalid username, try again",
    password: "Invalid password, try again"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, password } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== password.value) {
        // Invalid password
        setErrorMessages({ name: "password", message: errors.password });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

    const renderForm = (
      //styling of the frontend
      <>
        <div className="report__maincontainer">
            <div className="header">
              <div className="form1">
                <form onSubmit={handleSubmit}>
                  {/*added it for the functionality to work*/}
                  <div className="error">
                      {renderErrorMessage("uname")}
                  </div>
                  {/*forgot the first error message*/}  
                  <div className="error">
                    {renderErrorMessage("password")}
                  </div>
                  <div className="report-container">
                    <div className="label__grower">
                        <label>DATABASE RECORDS</label>
                    </div> 
                    <input type="text" 
                          name="uname" 
                          autocomplete="off"
                          placeholder="Enter username: user1..."
                          required 
                    />
                    <input type="password" 
                          name="password"
                          required
                          autoComplete="off"
                          placeholder="Enter passcode: X9H7F1..."
                    />         
                  </div>
                  <div className="btnsports">
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
        </div>        
      </>
    );

    /* Fetching API from Api directory */
    return (
      <div>
        {isSubmitted ? 
          <Api />
        : renderForm}
      </div>
    );


}

export default Home