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
                <div>
                    Comapny Name 
                    <input style={{width:'300px',height:'30px',marginLeft:'30px'}} value={cname}
                    />
                </div>

                 <div>
                    Email Address
                    <input style={{width:'300px',height:'30px',marginLeft:'30px'}} value={emailid}/>
                </div>
            </div>

           <div className='input2section'>
               <div>
                Phone Number 
                <input  placeholder='    + 91' style={{width:'100px',height:'30px',marginLeft:'30px'}}/>
                <input style={{width:'300px',height:'30px',marginLeft:'30px'}}/>

               </div>
               <div>
                Company CIN 
                <input style={{width:'300px',height:'30px',marginLeft:'30px'}}/>
               </div>
           </div>

           <div className='input3section'>
             <div>
                Trade Partner 
                <input style={{width:'30px',height:'23px',marginLeft:'30px'}}/>
             </div>
             <div>
                Least Amount Of Money Lost
                <input style={{width:'30px',height:'23px',marginLeft:'30px'}}/>
             </div>
             <div>
                Ledger Statement
                <input style={{width:'30px',height:'23px',marginLeft:'30px'}}/>
             </div>


           </div>

           <div className='input4section'>
              Other trade detail
              <input style={{width:'1000px',height:'80px',marginLeft:'30px'}}/>
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
    }
    .input2section{
        margin-top:30px;
        display:flex;
        justify-content:space-between;
        width:1200px;
    }
    .input3section{
        margin-top:30px;
        display:flex;
        justify-content:space-between;
        width:800px;
    }
    .input4section{
        margin-top:60px;
        
    }
 
`;