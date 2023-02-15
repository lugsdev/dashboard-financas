import OrcamentoReceita from "./OrcamentoReceita";
import BarChartReceitas from "./ReceitasDespesas";
import SaldoMes from "./SaldoMes";
import InfoBlock from "./InfoBlock";
import styles from "./Dashboard.module.css"
import Grid from '@mui/material/Grid'; 

function Dashboard(){
    return(
        <div className={styles.Dashboard}>

            <div className={styles.DashSuperior}>

             <Grid container spacing={0.1}>
                
                <Grid item xs="auto">
                   <InfoBlock tittle={"Total Receita"} valor={"4.190,00"} info={"-15,8%"} tip={"vs mês anterior"}/>
                   <InfoBlock tittle={"Total Despesas"} valor={"3.378,00"} info={"-6,7%"} tip={"vs mês anterior"}/>
                   
                </Grid>

                <Grid item xs="auto">
                    <InfoBlock tittle={"Lucro Líquido"} valor={"292,00"} info={"-41,7%"} tip={"vs mês anterior"}/>
                    <InfoBlock tittle={"Saldo no final do mês"} valor={"5.712,00"} info={"-4,8%"} tip={"vs mês anterior"}/>
                </Grid>
                
                <div className={styles.SupMeio}>
                    <OrcamentoReceita tittle={"% Margem Lucro Líquido"} cor={"#CCCCCC"} descricao1={"Objetivo: 12,0%"}/>
                </div>

               <Grid item xs="auto"> 
                    <InfoBlock tittle={"Contas a receber"} valor={"745,00"} info={"45,2%"} tip={"vs mês anterior"}/>
                    <InfoBlock tittle={"Contas a pagar"} valor={"541,00"} info={"4%"} tip={"vs mês anterior"}/>
               </Grid>

               <Grid item xs="auto"> 
                <InfoBlock tittle={"Índice Liquidez Reduzida"} valor={"1,0"} info={"-1 ou mais"} tip={"Objetivo índice liquidez reduzida"}/>
                <InfoBlock tittle={"Índice de liquidez"} valor={"3,05"} info={"3 ou mais"} tip={"Objetivo índice de liquidez"}/>
               </Grid>
            </Grid>
            </div> 

            <BarChartReceitas tittle={"Receitas e Despesas"}/>
            <SaldoMes tittle={"Saldo no final do mês"}/>
            <OrcamentoReceita tittle={"% do orçamento de receita"} cor={"#55A38B"} descricao1={"Orçamento: 60.000,00"} descricao2={"Balanço: -55.810,00"}/>
            <OrcamentoReceita tittle={"% do orçamento de despesas"} cor={"#FF4500"} descricao1={"Orçamento: 42.000,00"} descricao2={"Balanço: -38.622,00"}/>
        
        </div>
    )
}

export default Dashboard