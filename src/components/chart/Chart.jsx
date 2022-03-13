import "./chart.css";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function Chart({title,data,dataKey,grid}) {
  const data = [
    {
      name: "Jan",
      "Active User": 4000,
     
    },
    {
      name: "Feb",
      "Active User": 7000,
  
    },
    {
      name: "Mar",
      "Active User": 4600,
    
    },
    {
      name: "Apr",
      "Active User": 2780,
    
    },
    {
      name: "May",
      "Active User": 5890,
      
    },
    {
      name: "Jun",
      "Active User": 6390,
     
    },
    {
      name: "Jul",
      "Active User": 7632,
    },
    {
      name: "Aug",
      "Active User": 7550,
    },
    {
      name: "Sep",
      "Active User": 5430,
    },
    {
      name: "Oct",
      "Active User": 7990,
    },
    {
      name: "Nov",
      "Active User": 7530,
    },
    {
      name: "Dec",
      "Active User": 6290,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chartTitle">Sales Analytics</h3>
      <ResponsiveContainer width={"100%"} aspect={4/1}>
        <LineChart data={data}>
          <XAxis dataKey={"name"} stroke="#5550bd"/>
          <Line type={"monotone"} dataKey="Active User" stroke="#5550bd"/>
          <Tooltip/>
          { grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
