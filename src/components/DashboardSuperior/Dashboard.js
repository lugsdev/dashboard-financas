import PieChartCustom from "../PieChartCustom";
import InfoBlock from "./InfoBlock";
import styles from "./Dashboard.module.css";
import Grid from '@mui/material/Grid'; 


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
                
                <Grid item className={styles.SupMeio}>
                    <PieChartCustom tittle={"% Margem Lucro Líquido"} cor={"#FF4500"} descricao2={"Objetivo: 12,0%"} largura={190} altura={170} data={dataLucro}/>
                </Grid>

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

           
        
        </div>
    )
}

export default Dashboard