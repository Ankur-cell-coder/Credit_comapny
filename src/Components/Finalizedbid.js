import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Await, Link } from "react-router-dom";
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

  //code for displaying current page range
  const npage = Math.ceil(details.length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  var till = 10;
  if (npage < 10) {
    till = npage;
  }
  var numbers_series = numbers.slice(0, till);
  if (npage > 10 && currentPage > 5) {
    if (currentPage < npage) {
      numbers_series = numbers.slice(currentPage - 9, currentPage + 1);
    } else if (currentPage == npage) {
      numbers_series = numbers.slice(currentPage - 10, currentPage);
    }
   
  }

  //variable for color variable....
  var color_prev = "red";
  var color_next = "red";

  if (currentPage == 1) {
    color_prev = "gray";
  }
  if (currentPage == npage) {
    color_next = "gray";
  }

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function changeCPage(id) {
    console.log(id.val);
    setCurrentPage(id.val);
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
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
      <div className="lowersection">
        <div>Showing 1 to 10 enteries</div>
        <div
          style={{
            display: "flex",
            width: "1000px",
            justifyContent: "space-between",
          }}
        >
          <div>
            <button
              onClick={prePage}
              style={{
                width: "100px",
                height: "30px",
                background: color_prev,
                color: "white",
              }}
            >
              Previous
            </button>
          </div>
          <div>
            {numbers_series.map((val, key) => {
              return (
                <button
                  onClick={() => changeCPage({ val })}
                  className="toggle_button"
                >
                  {val}
                </button>
              );
            })}
          </div>
          <div>
            <button
              onClick={nextPage}
              style={{
                width: "100px",
                height: "30px",
                background: color_next,
                color: "white",
              }}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </Active1>
  );
}

export default Finalizebid;

const Active1 = styled.div`
  display: flex;
  flex-direction: column;
  width:100%;
  height:100%;

  table {
    border-top: 2px solid black;
    border-bottom: 2px solid black;
    width:100%;
    height: 450px;
    // margin-top: 20px;
    @media only screen and (min-width: 1800px) {
      height: 810px;
      width: 100%;
      margin-top: 20px;
    }
  }

  .toggle_button {
    width: 30px;
    height: 30px;
    margin-left: 2px;
    background: black;
    color: white;
    :hover {
      background: red;
    }
    :active,
    :focus {
      background: red;
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
