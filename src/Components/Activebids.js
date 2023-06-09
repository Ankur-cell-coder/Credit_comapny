import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const data = [
  {
   name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
  },
  {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },
   {
    name:'Loreum ipsum',amount:'5000',days:'10', currentday:'12', select:'Select'
   },

];

function Activebird() {
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

    
        <table >
          <tr>
            <th>Seller Name</th>
            <th>Amount</th>
            <th>No.of Days</th>
            <th>Current Day Number</th>
            <th>Select</th>
          </tr>

          {data.map((val, key) => {
            return (
              <tr key={key}>
               
                <td>{val.name}</td>
                 <td>{val.amount}</td>
                <td>{val.days}</td>
                <td>{val.currentday}</td>
                <td>{val.select}</td>
               
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

   </Active1>
  )
}

export default Activebird

const Active1=styled.div`


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
  
  margin-top: 20px;
  height:450px;
  width:1550px;
  @media only screen and (min-width: 1800px){
    height:810px;
    width:1880px;
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