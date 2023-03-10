import Grid from '@mui/material/Grid'; 
import BarChartReceitas from "./ReceitasDespesas";
import SaldoMes from "./SaldoMes";
import PieChartCustom from "../PieChartCustom";
import styles from "./GenericChart.module.css"
import InfoGrid from './InfoGrid.js';

const dataReceita = [
    { name: "Orçamento de Receita%", value: 6000, percent: 92},
    { name: "Outros", value: 500, percent: 8},
  ];
const dataDespesa = [
    { name: "Orçamento de Despesa%", value: 6000, percent: 93 },
    { name: "Outros", value: 500, percent: 7 },
  ];

function DashboardInferior(){

    return(
    <div className={styles.DashboardInferior}>

        <Grid container spacing={0} >

            <Grid Item className={styles.GenericChart}>
                <BarChartReceitas tittle={"Receitas e Despesas"}/>
            </Grid>

            <Grid item className={styles.PieChartCustom}>
                <PieChartCustom tittle={"% do orçamento de receita"} cor={"#55A38B"} descricao1={"Orçamento: 60.000,00"} descricao2={"Balanço: -55.810,00"} largura={200} altura={190} data={dataReceita}/>
            </Grid>

            <Grid item className={styles.PieChartCustom}>
                <PieChartCustom tittle={"% do orçamento de despesa"} cor={"#FF4500"} descricao1={"Orçamento: 42.000,00"} descricao2={"Balanço: -38.622,00"} largura={200} altura={190} data={dataDespesa}/>
            </Grid>
        </Grid>

        <Grid container spacing={0} >    
            <Grid Item className={styles.GenericChart}>    
                <SaldoMes tittle={"Saldo no final do mês"}/>    
            </Grid>

            <Grid item className={styles.InfoGrid}>
                <InfoGrid tittle={"Saldo no final do mês"}/>
            </Grid>

        </Grid>
    
    </div>
    )

}

export default DashboardInferior