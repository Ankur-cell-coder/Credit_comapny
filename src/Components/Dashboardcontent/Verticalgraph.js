import React from "react";
import styled from "styled-components";

import Chart from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
Chart.register(CategoryScale);

const options = {
  indexAxis: "y",
  elements: {
    bar: {
      borderWidth: 0,
    },
  },

  plugins: {
    legend: {
      position: "bottom",
      align: "start",
      labels: {
        usePointStyle: true,
        pointStyle: "circle",
        color: "black",
      },
    },
    title: {
      display: true,
      text: "Volumetric",
    },
  },
};

const labels = [
  "Loreum ipsum ",
  "Loreum ",
  "Ipsum ",
  "Tortor",
  "malesuada",
  "Workload",
];
const data = {
  labels,
  datasets: [
    {
      data: [100, 75, 78, 95, 55, 85],
      backgroundColor: ["red", "orange", "green", "purple", "blue", "#F4C430"],
      barThickness: 20,
    },
  ],
};

function Verticalgraph() {
  return (
    <Dashboard1 >
      <div>
      <Bar data={data} options={options} />
      </div>
    </Dashboard1>
  );
}

export default Verticalgraph;

const Dashboard1 = styled.div`
 
    
    height: 336.8px;
    width: 567px;
    border: 2px solid black;
    
    margin-left:966px;
    margin-top:-339.6px;
  
`;
