
import BarChartReceitas from './ReceitasDespesas';
import LineChartMes from './SaldoMes';



function App() {
  return (
    <div>
      <BarChartReceitas tittle={"Despesas e Receitas"}/>
      <LineChartMes tittle={"Saldo no final do mês"}/>
     
      </div>
  );
}

export default App;
