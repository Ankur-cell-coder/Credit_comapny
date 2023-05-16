import React from "react";
import { Chart as ChartJs, Tooltip, Title, ArcElement, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import styled from "styled-components";
ChartJs.register(Tooltip, Title, ArcElement, Legend);

const options = {
  plugins: {
    legend: {
      display: true,
      position: "right",
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

const data = {
  datasets: [
    {
      data: [915, 359, 545, 637, 1, 670, 289, 496, 448, 799],
      backgroundColor: [
        "blue",
        "green",
        "purple",
        "violet",
        "blue",
        "red",
        "orange",
      ],
    },
  ],

  labels: [
    "Loreum ipsum",
    "Loreum ipsum",
    "Loreum ipsum",
    "Loreum ipsum",
    "Loreum ipsum",
    "Loreum ipsum",
  ],
};

function PieChart1() {
  return (
    <Pie1>
      <div className="graph">
        <Pie data={data} options={options} />
      </div>
    </Pie1>
  );
}

export default PieChart1;

const Pie1 = styled.div`
  margin-left: 519.5px;
  border: 2px solid black;
  margin-top: -340px;
  width: 445px;

  @media only screen and (min-width: 1800px) {
    width: 500px;
    height: 375px;
    margin-left: 10px;
    margin-top: 93px;
  }

  .graph {
    width: 75%;
    height: 336.5px;
    @media only screen and (min-width: 1800px) {
      width: 90%;
      height: 95%;
      margin-left: 10px;
    }
  }
`;
