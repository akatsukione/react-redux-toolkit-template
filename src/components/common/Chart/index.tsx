import React from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";
import { MemberType } from "models";

interface BarChartProps {
    members: MemberType[]; // Replace 'any' with the appropriate type for your data
    x: string;
  }

export const BarChartComponent: React.FC<BarChartProps> = (props) => {
  return (
    <BarChart width={600} height={300} data={props.members}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Bar dataKey={props.x} fill="#8884d8" />
    </BarChart>
  );
};

