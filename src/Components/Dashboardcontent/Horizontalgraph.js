import React from 'react'
import Chart from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';
import styled from "styled-components";
import { CategoryScale } from 'chart.js';
Chart.register(CategoryScale);




const options = {
    indexAxis: 'x',
    elements: {
        bar: {
            borderWidth: 0
        },
    },
    plugins: {
        legend: {
            display:'true',
        },
        title: {
            display: true,
            text: 'Volumetric',
        },
    },
};

const labels = ['loreum', 'loreum', 'loreum', 'loreum']

const data = {
    labels,
    datasets: [
        {
          
            data: [40, 88, 60, 65],
            backgroundColor:  [
                'blue',
                '#F4C430',
                'purple',
                '#90EE90'

            ],
            barThickness:20,
        }

    ],
};



function Horizontal1() {
    return (
        <Horizonta1>

            <div className='class1' >
                <Bar data={data} options={options} />
            </div>

          

        </Horizonta1>
    )
}

export default Horizontal1

const Horizonta1 = styled.div`

  .class1{
     width:517.3px;
     height:337px;
     margin-top:-30px;
     border:2px solid black;
     
     @media only screen and (min-width: 1800px){
       
        width:455px;
     height:310px;
     
     }
  }




 


`;