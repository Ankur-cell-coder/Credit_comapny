import React from 'react'
import styled from 'styled-components'

function Data() {
let data=[{}];
for(let i=0;i<9;i++)
{
    data.push({first:'Loreum ipsum',second:'Loreum ipsum',third:'Loreum ipsum',fourth:'Loreum ipsum',fifth:'Loreum ipsum'});
}

  return (
   <Data1>
     <table>
          <tr>
            <th>Loreum ipsum</th>
            <th>Loreum ipsum</th>
            <th>Loreum ipsum</th>
            <th>Loreum ipsum</th>
            <th>Loreum ipsum</th>
          </tr>

         { data.map((val,key) => {
            return(
               <tr key={key}>
               <td>{val.first}</td>
               <td>{val.first}</td>
               <td>{val.first}</td>
               <td>{val.first}</td>
               <td>{val.first}</td>
               </tr>
            )

          })
           }
          
         

        </table>
   </Data1>
  )
}

export default Data

const Data1=styled.div`
   border:2px solid black;
   width:930px;
   height:308.8px;
   margin-top:-1.4px;

   table {
    // border: 2px solid forestgreen;
    width: 99.8%;
       height:100%;
   
   
   }
   td {
    border-bottom: 1px solid gray;
   }
   
`;