import React from "react";
import styled from "styled-components";

function Insights() {
  return (
    <Insights1>
      <div className="heading">Inignts</div>
      <div className="content">
        <div style={{marginLeft:'10px',marginRight:'10px',marginTop:'10px'}}>
        •Now is the winter of our discontent Made glorious summer by this sun
          of York; And all the clouds that lour'd upon our house In the deep
          bosom of the ocean buried. Now are our brows bound with victorious
          wreaths; Our bruised arms hung up for monuments;Now is the winter 
          of our discontent Made glorious summer by this sun
        </div>
        <div style={{marginLeft:'10px',marginRight:'10px',marginTop:'10px',marginBottom:'10px'}}>
        •Now is the winter of our discontent Made glorious summer by this sun
          bosom of the ocean buried. Now are our brows bound with victorious
          wreaths; Our bruised arms hung up for monuments;Now is the winter 
          of our discontent Made glorious summer by this sun
          of York; And all the clouds that lour'd upon our house In the deep
        </div>
      </div>
    </Insights1>
  );
}

export default Insights;

const Insights1 = styled.div`
  border: 2px solid black;
  margin-left: 933px;
  margin-top: -390px;
  height: 308.9px;

  @media only screen and (min-width: 1800px){
    height:385px;
  }

  .heading {
    margin-left: 5px;
  }
  .content {
    border:2px solid black;
    display:flex;
    flex-direction:column;
    margin-left:10px;
    margin-right:10px;
   height:260px;
   background:#C5C5C5;
   font-size:20px;
   @media only screen and (min-width: 1800px){
    height:320px;
  }

  }
`;
