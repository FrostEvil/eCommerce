import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Sale } from "../types";

const data: Sale[] = [
  {
    month: "January",
    value: 123,
  },
  {
    month: "February",
    value: 382,
  },
  {
    month: "March",
    value: 67,
  },
];

function SalesPage() {
  return (
    <div className="content-area ">
      <h2>Sales:</h2>
      <ResponsiveContainer width="80%" height="60%">
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesPage;
