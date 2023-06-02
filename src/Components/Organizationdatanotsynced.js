import React from "react";
import styled from "styled-components";
import HorizontalScroll from "react-scroll-horizontal";
import { Link } from "react-router-dom";

const data = [
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
  {
    name: "Acme Corporation",
    id: "ABC123454",
    status: "Loreum ipsum",
    class: "Loreum ipsum",
    category: "Synced",
    subcategory: "Synced",
    date: "Loreum ipsum",
  },
];

function Organizationdatanotsynced() {
  return (
    <Company>
      <div className="uppersection">
        <div>Comapny Name</div>
        <div>Data Type</div>
        
      </div>

      <div className="inputsection">
        <input
          placeholder="  Enter company name"
          className="valuesection"
        ></input>
        <input
          placeholder="  Select data type"
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

      <HorizontalScroll>
        <table style={{width:'1950px'}}>
          <tr>
            <th>Company Name</th>
            <th>Corporate ID Number</th>
            <th>Company Category</th>
            <th>Email Address</th>
            <th>Invoice/Vouchers</th>
            <th>MSME Data</th>
            <th>Data.gov.in</th>
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

        <table style={{width:'150px'}}>
          <tr>
            <th>MCA Data</th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
                <td>{val.name}</td>
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

export default Organizationdatanotsynced;

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
    height:450px;
    margin-top: 20px;
    @media only screen and (min-width: 1800px) {
      height:810px;
    }
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
    width: 420px;
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
