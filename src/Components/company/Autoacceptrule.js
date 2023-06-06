import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link, useNavigate,useLocation } from 'react-router-dom';

function Autoacceptrule() {
    const location = useLocation()
    const { cname,emailid} = location.state
    
    
  return (
    <Auto1>
        <div className='button'>
                <Link to={'/company'} style={{ textDecoration: 'none', marginTop: '5px', color: 'black' }}>&#8592; Company Name</Link>
            </div>
            <div className='description'>
                The following section contains the detailed information about the Comapny.
            </div>

            <div className='orderlink'>
                <Link to={'/company/autoacceptrule'} style={{ textDecoration: 'none',background: 'orange',color:'white',display:'flex',width:'200px',height:'30px',justifyContent:'center',marginTop:'8px'}}>Auto Accept Rule</Link>
                <Link to={'/company/organizationdata'} style={{ textDecoration: 'none', color: 'black',marginTop:'8px' }}>Organization Data</Link>
                <Link to={'/company/revieworganizationdata'} style={{ textDecoration: 'none', color: 'black',marginTop:'8px' }}>Review Organization Data</Link>
                <Link to={'/company/users'} style={{ textDecoration: 'none', background: 'white',color:'black',display:'flex',width:'100px',height:'30px',justifyContent:'center',marginTop:'8px'}}>Users</Link>
            </div>

            <div className='input1section'>
                <div className='cont3'>
                    <div className='des3'>Comapny Name</div>
                    <input className='input1' value={cname}
                    />
                </div>

                 <div className='cont3'>
                    <div className='des3'>Email Address</div>
                    <input className='input1' value={emailid}/>
                </div>
            </div>

           <div className='input2section'>
               <div className='cont3'>
                <div className='des3'>Phone Number </div>
                <input  placeholder='    + 91' style={{width:'100px',height:'30px',marginLeft:'30px'}}/>
                <input className='input1'/>

               </div>
               <div className='cont3'>
                <div className='des3'>Company CIN</div> 
                <input className='input1'/>
               </div>
           </div>

           <div className='input3section'>
             <div className='cont3'>
                <div className='des3'>Trade Partner </div>
                <input className='input3'/>
             </div>
             <div className='cont3'>
                <div className='des3'>Least Amount Of Money Lost</div> 
                <input className='input3'/>
             </div>
             <div className='cont3'>
                <div className='des3'>Ledger Statement</div>
                <input className='input3'/>
             </div>


           </div>

           <div className='input4section'>
             <div className='des4'>Other trade detail</div> 
              <input className='input4'/>
           </div>

    </Auto1>
  )
}

export default Autoacceptrule

const Auto1=styled.div`
width:98.7%;
height:600px;
    display:flex;
    flex-direction:column;
    margin-left:20px;
    .description{
        margin-left:40px;
        margin-top:10px;
        @media only screen and (min-width: 1800px){
            margin-top:30px;
            font-size:20px;
        }
    }
    .orderlink{
        margin-top:30px;
        display:flex;
        width:700px;
        justify-content:space-between;
        margin-left:20px;
        
        .link {
            color: white;
          }
          
         
          .link-active {
            color: black;
            background: orange;
          }

          @media only screen and (min-width: 1800px){
            width:900px;
            margin-top:50px;
            font-size:20px;
          }
      
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
    .input1section{
        margin-top:30px;
        display:flex;
        justify-content:space-between;
        width:1100px;
       
        @media only screen and (min-width: 1800px){
            margin-top:70px;
            margin-left:30px;
            width:1600px;
        }
       

    }
    .input2section{
        margin-top:30px;
        display:flex;
        justify-content:space-between;
        width:1200px;
        @media only screen and (min-width: 1800px){
            margin-top:70px;
            margin-left:30px;
            width:1600px;
        }
    }
    .input3section{
        margin-top:30px;
        display:flex;
        justify-content:space-between;
        width:800px;
        @media only screen and (min-width: 1800px){
            margin-top:70px;
            margin-left:30px;
            width:1750px;
        }
    }
    .input4section{
        margin-top:60px;
        display:flex;
        @media only screen and (min-width: 1800px){
            margin-top:100px;
            margin-left:30px;
        }
        
    }
    
    .input4{
         width:1000px;
         height:80px;
         marginLeft:30px;
         @media only screen and (min-width: 1800px){
            width:1600px;
            height:100px;
            margin-left:50px;
         }
    }
    .des4{
        @media only screen and (min-width:1800px){
        margin-top:30px;
        font-size:20px;
        }
    }
    
    .input3{
        width:30px;
        height:23px;
        margin-left:30px;
        @media only screen and (min-width:1800px){
            margin-left:80px;
        }
    }
    .cont3{
        display:flex;
    }
    .des3{
        font-size:20px;
    }
   
    .input1{
      width:300px;
      height:30px;
      margin-left:30px;
      @media only screen and (min-width:1800px){
        width:400px;
        height:40px;
        margin-top:-8px;
        margin-left:60px;
      }
    }
`;