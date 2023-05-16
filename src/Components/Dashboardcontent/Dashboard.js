import React from "react";
import Horizontal1 from "./Horizontalgraph";
import PieChart1 from "./Piechart";
import Verticalgraph from "./Verticalgraph";
import Data from "./Data";
import Insights from "./Insights";

function Dashboard() {
  return (
    <div>
      <Horizontal1 />
      <PieChart1 />
      <Verticalgraph />
      <Data/>
      <Insights/>
    </div>
  );
}

export default Dashboard;
