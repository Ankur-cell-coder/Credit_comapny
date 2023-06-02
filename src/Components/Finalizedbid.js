import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Await, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function Finalizebid() {
  const [details, setDetails] = useState([]);

  const getDetails = async () => {
    const res = await axios.get("http://localhost:3005/finalized_bids");
    setDetails(res.data.finalizebids);
    console.log(details);
  };
  useEffect(() => {
    getDetails();
  }, [details.length]);

  let [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = details.slice(firstIndex, lastIndex);
  const npage = Math.ceil(details.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  function prePage(){
        if(currentPage!==1)
        {
          setCurrentPage(currentPage-1);
        }
  }
   
  function changeCPage(id){
        setCurrentPage(id);
  }

  function nextPage(){
      
        if(currentPage!==npage)
        {
          setCurrentPage(currentPage+1);
        }
      
  }

  return (
    <Active1>
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

      <table>
        <tr>
          <th>Seller Name</th>
          <th>Amount</th>
          <th>No.of Days</th>
          <th>Current Day Number</th>
          <th>Financier Details</th>
          <th>Buyer details</th>
          <th>Status</th>
          <th>Select</th>
        </tr>

        {records?.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.company_name}</td>
              <td>{val.amount}</td>
              <td>{val.no_of_days}</td>
              <td>{val.current_day_number}</td>
              <td>{val.financier_detail}</td>
              <td>{val.buyers_detail}</td>
              <td>Passed</td>
              <td>
                <Link
                  to={"/finalizedbids/details"}
                  className="linkoption"
                  style={{ textDecoration: "none" }}
                >
                  Select
                </Link>
              </td>
            </tr>
          );
        })}
      </table>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a href="#" className="page-link" onClick={prePage}>
              Prev
            </a>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <a href="#" className="page-link" onClick={()=>changeCPage(n)}>
                {n}
              </a>
            </li>
          ))}

          <li className="page-item">
            <a href="#" className="page-link" onClick={nextPage}>
              Next
            </a>
          </li>
        </ul>
      </nav>
    </Active1>
  );
}

export default Finalizebid;

const Active1 = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  height: 910px;
  margin-left:-110px;
 

  @media only screen and (min-width: 1800px) {
    border:2px solid red;
    width:1800px;
    height: 910px;
    margin-left:-100px;
     
  }

  table {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    width: 1550px;
    height: 450px;
    margin-top: 20px;
    @media only screen and (min-width: 1800px) {
      height: 810px;
      width: 1870px;
      margin-top: 20px;
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
    text-align: center;
    border-bottom: 1px solid gray;
  }
  td {
    text-align: center;
    border-bottom: 1px solid gray;
    width:5px;
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
  .linkoption {
    border: 1px solid black;
    width: 80px;
    height: 30px;
    background-color: #f5f5f5;
    color: black;
  }
`;
