import {
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ReferenceLine,
  Line,
  ComposedChart
} from "recharts";


const data = [
  {
    name: "JAN",
    Receita: 4000,
    Despesa: -2800,
    Lucro: 1200,
  },
  {
    name: "FEV",
    Receita: 3982,
    Despesa: -2398,
    Lucro: 1584,
  },
  {
    name: "MAR",
    Receita: 4037,
    Despesa: -4800,
    Lucro: -763,
  },
  {
    name: "MAI",
    Receita: 3896,
    Despesa: -3908,
    Lucro: -12,
  },
  {
    name: "JUN",
    Receita: 4102,
    Despesa: -4800,
    Lucro: -698,
  },
  {
    name: "JUL",
    Receita: 4021,
    Despesa: -3800,
    Lucro: 221,
  },
  {
    name: "AGO",
    Receita: 6351,
    Despesa: -4300,
    Lucro: 2051,
  },
  {
    name: "SET",
    Receita: 4006,
    Despesa: -3800,
    Lucro: 2500,
  },
  {
    name: "OUT",
    Receita: 3790,
    Despesa: -3800,
    Lucro: -10,
  },
  {
    name: "NOV",
    Receita: 4040,
    Despesa: -3651,
    Lucro: 389,
  },
  {
    name: "DEZ",
    Receita: 5620,
    Despesa: -4300,
    Lucro: 1320,
  },
];


export default function BarChartReceitas({ tittle }) {
  return (
    <div>
      <h2>{tittle}</h2>
      <ComposedChart
        width={600}
        height={300}
        data={data}
        margin={{
          top: 0,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <ReferenceLine y={0} stroke="#000" />
        <Bar dataKey="Receita" stackId="a" fill="#55A38B" />
        <Bar dataKey="Despesa" stackId="b" fill="#FF4500" />
        <Line type="monotone" dataKey="Lucro" stroke="#000" />
      </ComposedChart>
    </div>
  );
}
