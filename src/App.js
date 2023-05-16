import axios from 'axios';
import { Nav, Container, Row, Col }
  from "react-bootstrap";
import {
  BrowserRouter as Router, Routes,
  Route, Link
} from "react-router-dom";
import './App.css';

import { useState } from 'react';
import SignIn from "./Components/signin/signin.component";
import Companydetails from './Components/Companydetails';
import Autooffer from './Components/Autooffer';
import Organizationdata from './Components/Organizationdata';
import Activebird from './Components/Activebird';
import Finalizedbid from './Components/Finalizedbid';
import Dataadapter from './Components/Dataadapter';
import Dashboard from './Components/Dashboardcontent/Dashboard';
import creditlogo from "./images/Credit bazaar logo.png";


const logout = function () {
  localStorage.removeItem("JWT");
  window.location.reload();
}

function App() {
  var colorvar = "black";
  let loggedIn = false;

  const [option, setOption] = useState("seller");
  (function () {
    let authToken = localStorage.getItem("JWT");
    if (authToken === null) {
      loggedIn = true;
   
      axios.defaults.headers.common.Authorization = null;
    } else {
      loggedIn = true;
     
      axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }
  })();


  const handleChange = (e) => {
    setOption(e.currentTarget.value);
  }

  return (
    <Router>
      <div className="App">
      {loggedIn ? (
          <div className="navcontent">
            <div
              style={{
                marginLeft: "20px",
                marginTop: "4px",
                background: colorvar,
                width: "180px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <img src={creditlogo}></img>
            </div>

            <div className="middle_navbar">
              <div>
                <Link to={"/"} className="navcomp">
                  Dashboard
                </Link>
              </div>

              <div>
                <Link to={"/company"} className="navcomp">
                              Company Details
                </Link>
              </div>

              <div>
                <Link to={"/offerrule"} className="navcomp">
                 Auto Offer Rule
                </Link>
              </div>
              <div>
                <Link to={"/data"} className="navcomp">
                  Organization Data not synced
                </Link>
              </div>
              <div>
                <Link to={"/activebids"} className="navcomp">
                  Active Bids
                </Link>
              </div>
              <div>
                <Link to={"/finalizedbids"} className="navcomp">
                 Finalized Bids
                </Link>
              </div>
              <div>
                <Link to={"/dataadapter"} className="navcomp">
                  Data Adapter Status
                </Link>
              </div>
            </div>

            <Link to={"/"} onClick={logout} className="lgout">
              Logout
            </Link>
          </div>
        ) : (
          <Nav>
            <div
              style={{
                background: colorvar,
                width: "180px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              <img src={creditlogo}></img>
            </div>
          </Nav>
        )}

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Routes>
                  <Route
                    exact
                    path="/"
                    element={loggedIn ? <Dashboard /> : <SignIn />}
                  />
                  <Route
                    exact
                    path="/company"
                    element={loggedIn ? <Companydetails /> : <SignIn />}
                  />
                  <Route
                    exact
                    path="/offerrule"
                    element={loggedIn ? <Autooffer /> : <SignIn />}
                  />
                  <Route
                    exact
                    path="/data"
                    element={loggedIn ? <Organizationdata /> : <SignIn />}
                  />
                  <Route
                    exact
                    path="/activebids"
                    element={loggedIn ? <Activebird /> : <SignIn />}
                  />
                  <Route
                    exact
                    path="/finalizedbids"
                    element={loggedIn ? <Finalizedbid /> : <SignIn />}
                  />
                  <Route
                    exact
                    path="/dataadapter"
                    element={loggedIn ? <Dataadapter /> : <SignIn />}
                  />
                  
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
    
  );
}

export default App;