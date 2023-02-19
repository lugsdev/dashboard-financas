import PieChartCustom from "./PieChartCustom";
import BarChartReceitas from "./ReceitasDespesas";
import SaldoMes from "./SaldoMes";
import InfoBlock from "./InfoBlock";
import styles from "./Dashboard.module.css"
import Grid from '@mui/material/Grid'; 

const dataReceita = [
    { name: "Orçamento de Receita%", value: 6000, percent: 92},
    { name: "Outros", value: 500, percent: 8},
  ];
const dataDespesa = [
    { name: "Orçamento de Despesa%", value: 6000, percent: 93 },
    { name: "Outros", value: 500, percent: 7 },
  ];
const dataLucro = [
    { name: "Margem de Lucro%", value: 500, percent: 7 },
    { name: "Outros", value: 6000, percent: 93 },
  ];

function Dashboard(){

    return(
        <div className={styles.Dashboard}>

            <div className={styles.DashSuperior}>

             <Grid container spacing={0} >
                
                <Grid item>
                   <InfoBlock tittle={"Total Receita"} valor={"4.190,00"} info={"-15,8%"} tip={"vs mês anterior"}/>
                   <InfoBlock tittle={"Total Despesas"} valor={"3.378,00"} info={"-6,7%"} tip={"vs mês anterior"}/>
                   
                </Grid>

                <Grid item>
                    <InfoBlock tittle={"Lucro Líquido"} valor={"292,00"} info={"-41,7%"} tip={"vs mês anterior"}/>
                    <InfoBlock tittle={"Saldo no final do mês"} valor={"5.712,00"} info={"-4,8%"} tip={"vs mês anterior"}/>
                </Grid>
                
                <div className={styles.SupMeio}>
                    <PieChartCustom tittle={"% Margem Lucro Líquido"} cor={"#FF4500"} descricao1={"Objetivo: 12,0%"} largura={190} altura={170} data={dataLucro}/>
                </div>

               <Grid item> 
                    <InfoBlock tittle={"Contas a receber"} valor={"745,00"} info={"45,2%"} tip={"vs mês anterior"}/>
                    <InfoBlock tittle={"Contas a pagar"} valor={"541,00"} info={"4%"} tip={"vs mês anterior"}/>
               </Grid>

               <Grid item> 
                    <InfoBlock tittle={"Índice Liquidez Reduzida"} valor={"1,0"} info={"-1 ou mais"} tip={"Objetivo índice liquidez reduzida"}/>
                    <InfoBlock tittle={"Índice de liquidez"} valor={"3,05"} info={"3 ou mais"} tip={"Objetivo índice de liquidez"}/>
               </Grid>
            </Grid>
            </div> 

            <BarChartReceitas tittle={"Receitas e Despesas"}/>
            <SaldoMes tittle={"Saldo no final do mês"}/>
            <PieChartCustom tittle={"% do orçamento de receita"} cor={"#55A38B"} descricao1={"Orçamento: 60.000,00"} descricao2={"Balanço: -55.810,00"} largura={200} altura={190} data={dataReceita}/>
            <PieChartCustom tittle={"% do orçamento de despesa"} cor={"#FF4500"} descricao1={"Orçamento: 42.000,00"} descricao2={"Balanço: -38.622,00"} largura={200} altura={190} data={dataDespesa}/>
        
        </div>
    )
}

export default Dashboard