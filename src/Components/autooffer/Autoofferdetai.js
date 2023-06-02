import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Autoofferdetai() {
  const location = useLocation();
  const { orgid } = location.state;


  return (
    <Auto1>
      <div className="button">
        <Link
          to={"/offerrule"}
          style={{ textDecoration: "none", marginTop: "5px", color: "black",fontSize:'20px' }}
        >
          &#8592; Organisation List
        </Link>
      </div>
      <div className="description">
        The following section contains the detailed information about the
        Organisation.
      </div>

      <div className="first">
        <div style={{fontSize:'20px'}}>Organisation ID:</div>
        <input
          style={{ width: "200px", height: "30px", marginLeft: "50px" ,fontSize:'20px'}}
          value={orgid}
        />
      </div>

      <div className="second">
        <div style={{fontSize:'20px'}}>Amount Range of Financing:</div>
        <input
          style={{
            width: "150px",
            height: "30px",
            marginLeft: "50px",
            marginRight: "50px",
            fontSize:'20px'
          }}
        />
        <div>-</div>
        <input style={{ width: "150px", height: "30px", marginLeft: "50px",fontSize:'20px' }} />
      </div>

      <div className="third">
        <div style={{fontSize:'20px'}}>Domain Sector Related Financing:</div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div>Loreum ipsum</div>
          <input
            style={{ marginLeft: "20px", width: "20px", height: "20px" }}
          />
          <div style={{ marginLeft: "30px" }}>Loreum ipsum</div>
          <input
            style={{ marginLeft: "20px", width: "20px", height: "20px" }}
          />
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div>Loreum ipsum</div>
          <input
            style={{ marginLeft: "20px", width: "20px", height: "20px" }}
          />
          <div style={{ marginLeft: "30px" }}>Loreum ipsum</div>
          <input
            style={{ marginLeft: "20px", width: "20px", height: "20px" }}
          />
        </div>
      </div>

      <div className="third">
        <div>Deep tire Financing:</div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div>Loreum ipsum</div>
          <input
            style={{ marginLeft: "20px", width: "20px", height: "20px" }}
          />
          <div style={{ marginLeft: "30px" }}>Loreum ipsum</div>
          <input
            style={{ marginLeft: "20px", width: "20px", height: "20px" }}
          />
        </div>
        <div style={{ display: "flex", marginTop: "30px" }}>
          <div>Loreum ipsum</div>
          <input
            style={{ marginLeft: "20px", width: "20px", height: "20px" }}
          />
          <div style={{ marginLeft: "30px" }}>Loreum ipsum</div>
          <input
            style={{ marginLeft: "20px", width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </Auto1>
  );
}

export default Autoofferdetai;

const Auto1 = styled.div`
  width: 98.7%;
  height: 600px;
  display: flex;
  flex-direction: column;
  margin-left: 20px;

  .button {
    width: 200px;
    height: 35px;
    background: white;
    border: 1px solid gray;
    font-size: 18px;
    display: flex;
    justify-content: center;
    @media only screen and (min-width: 1800px) {
      width: 350px;
      height: 55px;
    }
  }
  .description {
    margin-left: 40px;
    margin-top: 10px;
    font-size:20px;
    @media only screen and (min-width: 1800px){
      margin-top:30px;
      margin-bottom:40px;
    }
    
  }

  .first {
    display: flex;
    margin-top: 40px;
    font-size:20px;
  }

  .second {
    display: flex;
    margin-top: 40px;
    font-size:20px;
  }
  .third {
    margin-top: 40px;
    font-size:20px;
  }
`;
