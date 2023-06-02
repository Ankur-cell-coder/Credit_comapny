import React from "react";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";
import { Link,useNavigate } from "react-router-dom";

const data = [
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  },
  {
    id: "#ABC123454",
    range:"Loreum ipsum",
    sector:"Loreum ipsum",
    tire:"Loreum ipsum"
  }

];

function Autooffer() {
  var navigate=useNavigate;
  return (
    <Company>
      <div className="uppersection">
        <div>Domain</div>
        <div>Organisation ID</div>
      </div>

      <div className="inputsection">
        <input
          placeholder="  Enter role of the company"
          className="valuesection"
        ></input>
        <input
          placeholder="  Enter Order Volume"
          className="valuesection"
        ></input>
      
        <input
          placeholder="       Search"
          style={{
            width: "300px",
            height: "30px",
            marginTop: "10px",
            marginLeft: "400px",
          }}
        ></input>
      </div>

     
        <table >
          <tr>
            <th>Organisation ID</th>
            <th>Amount range of financing</th>
            <th>Domain/Sector Related Financing</th>
            <th>Deep tire Financing</th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
               
                <td>
                <Link to={'/offerrule/offerdetail'}  state={{ orgid:`${val.id}` }} style={{textDecoration:'none'}}>{val.id}</Link>
                  </td>
                <td>{val.range}</td>
                <td>{val.sector}</td>
                <td>{val.tire}</td>
              </tr>
            );
          })}
        </table>

      <div className="lowersection">
        <div>Showing 1 to 12 enteries</div>
        <div
          style={{
            display: "flex",
            width: "200px",
            justifyContent: "space-between",
          }}
        >
          <div>Previous</div>
          <div>Next</div>
        </div>
      </div>
    </Company>
  );
}

export default Autooffer;

const Company = styled.div`
  width: 99.8%;
  height: 580px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 1800px) {
    // border:2px solid red;
    width: 98%;
    height: 810px;
    margin-left: 20px;
  }

  table {
    border-top: 2px solid black;
    border-bottom:2px solid black;
    width: 99%;
    height: 160%;
    margin-top: 20px;
  }
  .lowersection {
    margin-left: 10px;
    width: 1500px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
  }
  th {
    border-bottom: 1px solid gray;
  }
  td {
    text-align: center;
    border-bottom: 1px solid gray;
  }

  .uppersection {
    width: 453px;
    display: flex;
    justify-content: space-between;
    margin-left: 10px;
  }
  .inputsection {
    margin-left: 10px;
    display: flex;
    width: 1400px;
    justify-content: space-between;
  }
  .valuesection {
    margin-top: 10px;
    display: flex;
    width: 190px;
    height: 30px;
    justify-content: center;
  }
`;
