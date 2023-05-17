import React from "react";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";

const data = [
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Loreum ipsum",
    subcategory: "Loreum ipsum",
    date: "Loreum ipsum",
  },
];

function Companydetails() {
  return (
    <Company>
      <div className="uppersection">
        <div>Comapny Role</div>
        <div>Order Volume</div>
        <div>Date Range</div>
      </div>

      <div className="inputsection">
        <input
          placeholder="  Enter role of the company"
          className="valuesection"
        ></input>
        <input
          placeholder="  Enter Order volume"
          className="valuesection"
        ></input>
        <input placeholder="  Select Date" className="valuesection"></input>
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

      <HorizontalScroll>
        <table style={{width:'1550px',height:'450px'}}>
          <tr>
            <th>Company Name</th>
            <th>Corporate ID Number</th>
            <th>Company Status</th>
            <th>Company Class</th>
            <th>Company Category</th>
            <th>Comapny Sub Category</th>
            <th>Date of Registration</th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.id}</td>
                <td>{val.status}</td>
                <td>{val.class}</td>
                <td>{val.category}</td>
                <td>{val.subcategory}</td>
                <td>{val.date}</td>
              </tr>
            );
          })}
        </table>
        <table style={{width:'1550px',height:'450px'}}>
          <tr>
            <th>Registered State</th>
            <th>Authorized Cap</th>
            <th>Paidup Capital</th>
            <th>Industrial Class</th>
            <th>Principal Business Activity as per cin</th>
            <th>Registered Office Address</th>
            <th>Registrar of Companies </th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.id}</td>
                <td>{val.status}</td>
                <td>{val.class}</td>
                <td>{val.category}</td>
                <td>{val.subcategory}</td>
                <td>{val.date}</td>
              </tr>
            );
          })}
        </table> 
        <table style={{ width: "1550px",height:'450px' }}>
          <tr>
            <th>Email Address </th>
            <th>Latest Year Annual Return </th>
            <th>Latest Year Financial Statement</th>
            <th>Roc code</th>
            <th>Registration Number</th>
            <th>Number of Members</th>
            <th>Date of Incorporation</th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.id}</td>
                <td>{val.status}</td>
                <td>{val.class}</td>
                <td>{val.category}</td>
                <td>{val.subcategory}</td>
                <td>{val.date}</td>
              </tr>
            );
          })}
        </table>
        
        <table style={{ width: "900px",height:'450px' }}>
          <tr>
            <th>Address Other </th>
            <th>Company Listed Status</th>
            <th>active_compliance</th>
            <th>Suspended at Stock Exchange</th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
                <td>{val.id}</td>
                <td>{val.status}</td>
                <td>{val.class}</td>
              </tr>
            );
          })}
        </table>
      </HorizontalScroll>

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

export default Companydetails;

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
    width: 99.8%;
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
    width: 520px;
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
