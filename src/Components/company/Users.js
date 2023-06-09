import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';


const data = [
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    },
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    },
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    },
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    },
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    },
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    },
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    },
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    },
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    },
    {
        name:'ABC123454',uid:'Acme Corporation',email:'Loreum ipsum',phone:'Loreum ipsum',password:'Loreum ipsum'
    }
]

function Users() {

    
    const Navigate = useNavigate();

    return (
        <Users1>
            <div className='button'>
                <Link to={'/company'} style={{ textDecoration: 'none', marginTop: '5px', color: 'black' }}>&#8592; Company Name</Link>
            </div>
            <div className='description'>
                The following section contains the detailed information about the Comapny.
            </div>

            <div className='orderlink'>
                <Link to={'/company/autoacceptrule'} style={{ textDecoration: 'none', color: 'black' }}>Auto Accept Rule</Link>
                <Link to={'/company/organizationdata'} style={{ textDecoration: 'none', color: 'black' }}>Organization Data</Link>
                <Link to={'/company/revieworganizationdata'} style={{ textDecoration: 'none', color: 'black' }}>Review Organization Data</Link>
                <Link to={'/company/users'} style={{ textDecoration: 'none', background: 'orange',color:'white',display:'flex',width:'100px',height:'30px',justifyContent:'center',marginTop:'8px'}}>Users</Link>
            </div>
            
            <div className='searchsection'>
                 <div className='headingsection'>
                     <div>User name</div>
                     <div>UserID</div>
                 </div>
                 <div>
                    <input placeholder='                 Search' style={{width:'330px',height:'30px',marginLeft:'20px',marginTop:'5px'}}></input>
                    <input placeholder='    Enter user name' style={{width:'130px',height:'30px',marginLeft:'530px',marginTop:'5px'}}></input>
                    <input placeholder='    Enter user ID' style={{width:'130px',height:'30px',marginLeft:'220px',marginTop:'5px'}}></input>
                 </div>
            </div>
            
            <table>
                <tr>
                    
                    <th>Users Name</th>
                    <th>User ID</th>
                    <th>Email ID</th>
                    <th>Phone Number</th>
                    <th>Password</th>
                </tr>

                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            
                            <td>{val.name}</td>
                            <td>{val.uid}</td>
                            <td>{val.email}</td>
                            <td>{val.phone}</td>
                            <td>{val.password}</td>
                        </tr>
                    )
                })}

            </table>

            <div className='lowersection'>
                <div style={{marginLeft:'20px'}}>Prev</div>
                <div style={{marginLeft:'1380px'}}>Next</div>
            </div>

            
        </Users1>
    )
}

export default Users

const Users1 = styled.div`
width:98.7%;
height:600px;
    display:flex;
    flex-direction:column;
    margin-left:20px;

    .description{
        margin-left:40px;
        margin-top:10px;
    }
    .headingsection{
        display:flex;
        margin-left:900px;
        margin-top:10px;
        width:400px;
        justify-content:space-between;
        
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
    table{
        margin-top:35px;
        border:2px solid black;
        margin-right:20px;
    }
    th {
        border-bottom: 1px solid gray;
        text-align: left;
      }
      td {
        text-align: left;
        width:150px;
        height:45px;
        border-bottom: 1px solid gray;
      }
      @media only screen and (min-width: 1800px){
        width:98.9%;
        height:810px;
      }

    .lowersection{
        display:flex;
        width:750px;
        @media only screen and (min-width: 1800px){
            margin-top:20px;
        }
        
    }
    
`;