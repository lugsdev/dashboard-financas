import { LineChart, Line, XAxis, YAxis, Tooltip, Legend} from 'recharts';

const data = [
  {
    name: 'JAN',
    Saldo: 198,
    amt: 0,
  },
  {
    name: 'FEV',
    Saldo: 477,
    amt: 0,
  },
  {
    name: 'MAR',
    Saldo: 322,
    amt: 0,
  },
  {
    name: 'MAI',
    Saldo: 419,
    amt: 0,
  },
  {
    name: 'JUN',
    Saldo: 632,
    amt: 2181,
  },
  {
    name: 'JUL',
    Saldo: 246,
    amt: 2500,
  },
  {
    name: 'AGO',
    Saldo: 300,
    amt: 2100,
  },
  {
    name: 'SET',
    Saldo: 430,
    amt: 2100,
  },
  {
    name: 'OUT',
    Saldo: 210,
    amt: 2100,
  },
  {
    name: 'NOV',
    Saldo: 115,
    amt: 2100,
  },
  {
    name: 'DEZ',
    Saldo: 22,
    amt: 2100,
  },
];

export default function SaldoMes({tittle}) {
    return (
        <div>
            <h2>{tittle}</h2>
        
     
        <LineChart
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
          <Line type="monotone" 
                dataKey="Saldo"
                stroke="#FFBF00" 
                activeDot={{ r: 8 }} />
        </LineChart>
          
        </div>
    );
  }
