import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const data = [
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
  {
    data: "Lorm ipsum",
    status: "Lorem",
    link: "link",
    count: "Lorem",
    no_files: "5",
    additional: "Loreum ipsum",
  },
];

function Dataadapter() {
  return (
    <Data1>
      <div style={{display:'flex'}}>
        <div className="button1">
      <Link style={{textDecoration:'none',color:'white'}} to={'/dataadapter'}>Organisation Data</Link>
      </div>
      <div className="button2">
        <Link style={{textDecoration:'none',color:'black'}} to={'/peoplesdata'}>Peoples Data</Link>
        </div>
      </div>

      <input
        placeholder="       Search"
        className="searchinput"
      ></input>

      <table>
        <tr>
          <th>Data Source</th>
          <th>Status</th>
          <th>S3 Link</th>
          <th>Record Count</th>
          <th>No.of Files</th>
          <th>Additional Details</th>
        </tr>

        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.data}</td>
              <td>{val.status}</td>
              <td>{val.link}</td>
              <td>{val.count}</td>
              <td>{val.no_files}</td>
              <td>{val.additional}</td>
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
    </Data1>
  );
}

export default Dataadapter;

const Data1 = styled.div`
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
    border-bottom: 2px solid black;
    width: 100%;
    height: 160%;
    margin-top: 20px;
    

  }
  .lowersection {
    margin-left: 10px;
    width: 1500px;
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    @media only screen and (min-width:1800px){
    font-size:20px;
    }
  }
  th {
    border-bottom: 1px solid gray;
    @media only screen and (min-width:1800px){
    font-size:20px;
    }
  }
  td {
    text-align: center;
    border-bottom: 1px solid gray;
    @media only screen and (min-width:1800px){
    font-size:20px;
    }
  }

  .inputsection {
    margin-left: 10px;
    display: flex;
    width: 1400px;
    justify-content: space-between;
    @media only screen and (min-width:1800px){
    font-size:20px;
    }
  }
  .button1 {
    width: 185px;
    height: 35px;
    margin-left: 30px;
    background: orange;
    border: 2px solid orange;
    color: white;
    @media only screen and (min-width:1800px){
    font-size:20px;
    }
  }
  .button2 {
    width: 185px;
    height: 35px;
    margin-left: 30px;
    background: white;
    border: 2px solid white;
    @media only screen and (min-width:1800px){
    font-size:20px;
    }
  }

  .searchinput{
      width:300px;
      height:30px;
      margin-top:30px;
      margin-left:100px;
    
      @media only screen and (min-width:1800px){
        width:500px;
        font-size:20px;
        height:60px;
      }
  }
`;
