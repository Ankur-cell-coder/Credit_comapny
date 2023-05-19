import axios from "axios";
import { Nav, Container, Row, Col } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/signin/signin.component";
import Companydetails from "./Components/company/Companydetails";
import Autooffer from "./Components/Autooffer";
import Organizationdata from "./Components/Organizationdatanotsynced";
import Activebird from "./Components/Activebird";
import Finalizedbid from "./Components/Finalizedbid";
import Dataadapter from "./Components/Dataadapter";
import Dashboard from "./Components/Dashboardcontent/Dashboard";
import creditlogo from "./images/Credit bazaar logo.png";
import Users from "./Components/company/Users";
import Organizationdatacompany from "./Components/company/Organisationdata";
import Revieworganizationdata from "./Components/company/Revieworganizationdata";
import Autoacceptrule from "./Components/company/Autoacceptrule";

const logout = function () {
  localStorage.removeItem("JWT");
  window.location.reload();
};

const App = () => {
  var colorvar = "blue";
  let loggedIn = false;
  (function () {
    let authToken = localStorage.getItem("JWT");
    if (authToken === null) {
      loggedIn = false;
      axios.defaults.headers.common.Authorization = null;
    } else {
      loggedIn = true;
      axios.defaults.headers.common.Authorization = `Bearer ${authToken}`;
    }
  })();

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
                background: "blue",
                width: "180px",
                height: "50px",
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
                marginLeft: "20px",
              }}
            >
              Credit Bazar
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
                  <Route
                    exact
                    path="/company/users"
                    element={loggedIn ? <Users /> : <SignIn />}
                  />
                  <Route
                    exact
                    path="/company/organizationdata"
                    element={
                      loggedIn ? <Organizationdatacompany /> : <SignIn />
                    }
                  />
                  <Route
                    exact
                    path="/company/revieworganizationdata"
                    element={loggedIn ? <Revieworganizationdata /> : <SignIn />}
                  />
                  <Route
                    exact
                    path="/company/autoacceptrule"
                    element={loggedIn ? <Autoacceptrule /> : <SignIn />}
                  />
                </Routes>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
};

export default App;
