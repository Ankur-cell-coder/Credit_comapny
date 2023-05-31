import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Finalizebiddetail() {
  return (
    <Finalize1>

      <div className="button">
        <Link
          to={"/finalizedbids"}
          style={{ textDecoration: "none", marginTop: "5px", color: "black" }}
        >
          &#8592; Finalizsed Bid
        </Link>
      </div>
      <div className="description">
        The following section contains the detailed of finalizsed bids
        Comapny.
      </div>

      <div className="maincontent">
        
        <div className="leftpart">

            <div className="content1">
            <div>Seller Name:</div> 
            <div>Loreum ipsum Loreum ipsum</div>
            </div>

            <div className="content1">
            <div>Amount:</div> 
            <div>5000 INR</div>
            </div>

            <div className="content1">
            <div>No.of Days:</div> 
            <div>10</div>
            </div>

            <div className="content1">
            <div>Current Day Number:</div> 
            <div>12</div>
            </div>

        </div>

        <div className="rightpart">
            <div className="content1">
            <div>Financier Details:</div> 
            <div>Loreum ipsum </div>
            </div>

            <div className="content1">
            <div>Buyers Details:</div> 
            <div>Loreum ipsum </div>
            </div>

            <div className="content1">
            <div>Status:</div> 
            <div>Loreum ipsum </div>
            </div>

            <div className="content1">
            <div>Bank Account Details:</div> 
            <div>Loreum ipsum </div>
            </div>
        </div>

      </div>

      <div>
        Terms & Conditions:
      </div>

      <div className="tcdetail">
      <div>If you're visiting this page, you're likely here because you're searching for a random sentence.Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play.</div>
      <div>Sometimes a random word just isn't enough, and that is where the random seplay.Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play. </div>
      <div>By inputting the desired number, you can make a list of aentences as you want or needSometimes a random word just isn't enough, and that is where the random sentence generator comes into play.. </div>
      <div>Producing random sentences can be helpful in a number of different ways.Sometimes a random word just isn't enough, and that is where the random sentence generator comes into play.</div>
      </div>




    </Finalize1>
  );
}

export default Finalizebiddetail;

const Finalize1 = styled.div`

    width:98.7%;
    height:600px;
    display:flex;
    flex-direction:column;
    margin-left:20px;
    .description{
        // margin-left:40px;
        margin-top:30px;
        margin-right:20px;
        height:30px;
        border-bottom:2px solid black;
    }

    .button{
    width:200px;
    height:35px;
    background:white;
    border:1px solid gray;
    font-size:18px;
    display:flex;
    justify-content:center;
    }

    .maincontent{
        margin-top:40px;
        display:flex;
        width:1200px;
        justify-content:space-between;
        margin-left:50px;
        
    }

    .content1{
        display:flex;
        justify-content:space-between;
        width:400px;
        height:70px;
       
    }

    .tcdetail{
        margin-top:30px;
    }



`;
