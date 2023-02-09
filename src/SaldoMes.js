import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';

const data = [
  {
    name: 'JAN',
    saldo: 198,
    amt: 0,
  },
  {
    name: 'FEV',
    saldo: 477,
    amt: 0,
  },
  {
    name: 'MAR',
    saldo: 322,
    amt: 0,
  },
  {
    name: 'MAI',
    saldo: 419,
    amt: 0,
  },
  {
    name: 'JUN',
    saldo: 632,
    amt: 2181,
  },
  {
    name: 'JUL',
    saldo: 246,
    amt: 2500,
  },
  {
    name: 'AGO',
    saldo: 300,
    amt: 2100,
  },
  {
    name: 'SET',
    saldo: 430,
    amt: 2100,
  },
  {
    name: 'OUT',
    saldo: 210,
    amt: 2100,
  },
  {
    name: 'NOV',
    saldo: 115,
    amt: 2100,
  },
  {
    name: 'DEZ',
    saldo: 22,
    amt: 2100,
  },
];

export default function LineChartMes({tittle}) {
    return (
        <div>
            <h2>{tittle}</h2>
        
     
        <LineChart
          width={700}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" 
                dataKey="saldo" 
                stroke="#8884d8" 
                activeDot={{ r: 8 }} />
        </LineChart>
          
        </div>
    );
  }
