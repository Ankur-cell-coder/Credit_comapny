import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom';


const data=[
    {docid:'123456789123456',type:'Loreum ipsum',url:'Document'},
    {docid:'123456789123456',type:'Loreum ipsum',url:'Document'},
    {docid:'123456789123456',type:'Loreum ipsum',url:'Document'},
    {docid:'123456789123456',type:'Loreum ipsum',url:'Document'}

]

function Revieworganizationdata() {
  return (
    <Review1>
         <div className='button'>
                <Link to={'/company'} style={{ textDecoration: 'none', marginTop: '5px', color: 'black' }}>&#8592; Company Name</Link>
            </div>
            <div className='description'>
                The following section contains the detailed information about the Comapny.
            </div>

            <div className='orderlink'>
                <Link to={'/company/autoacceptrule'} style={{ textDecoration: 'none', color: 'black' }}>Auto Accept Rule</Link>
                <Link to={'/company/organizationdata'} style={{ textDecoration: 'none',background: 'white',color:'black',display:'flex',width:'150px',height:'30px',justifyContent:'center',marginTop:'8px' }}>Organization Data</Link>
                <Link to={'/company/revieworganizationdata'} style={{ textDecoration: 'none',background: 'orange',color:'white',display:'flex',width:'250px',height:'30px',justifyContent:'center',marginTop:'8px' }}>Review Organization Data</Link>
                <Link to={'/company/users'} style={{ textDecoration: 'none',background: 'white',color:'black',display:'flex',width:'100px',height:'30px',justifyContent:'center',marginTop:'8px'}}>Users</Link>
            </div>

            <table>
                <tr>
                    
                    <th>Document ID</th>
                    <th>Document type</th>
                    <th>Document S3 URL</th>
                </tr>

                {data.map((val, key) => {
                    return (
                        <tr key={key}>
                            
                            <td>{val.docid}</td>
                            <td>{val.type}</td>
                            <td>{val.url}</td>
                            
                        </tr>
                    )
                })}

            </table>

    </Review1>
  )
}

export default Revieworganizationdata

const Review1=styled.div`
width:98.7%;
height:600px;
    display:flex;
    flex-direction:column;
    margin-left:20px;
    .description{
        margin-left:40px;
        margin-top:10px;
        @media only screen and (min-width: 1800px){
            margin-top:20px;
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
        margin-top:15px;
        border:2px solid black;
        margin-right:20px;
        height:100px;
        @media only screen and (min-width: 1800px){
            margin-top:30px;
        }
    }
    th {
        border-bottom: 1px solid gray;
        text-align: left;
        @media only screen and (min-width: 1800px){
            height:40px;
        }
      }
      td {
        text-align: left;
        width:150px;
        height:30px;
        border-bottom: 1px solid gray;
        @media only screen and (min-width: 1800px){
            height:40px;
        }
      }
      @media only screen and (min-width: 1800px){
        width:98.9%;
        height:810px;
      }

`;