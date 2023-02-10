import OrcamentoReceita from "./OrcamentoReceita";
import BarChartReceitas from "./ReceitasDespesas";
import SaldoMes from "./SaldoMes";
import InfoBlock from "./InfoBlock";
import styles from "./Dashboard.module.css"

function Dashboard(){
    return(
        <div className={styles.Dashboard}>
     
            <InfoBlock tittle={"Total Receita"} valor={"4.190,00"} info={"-15,8%"} tip={"vs mês anterior"}/>
            <InfoBlock tittle={"Total Despesas"} valor={"3.378,00"} info={"-6,7%"} tip={"vs mês anterior"}/>
            <InfoBlock tittle={"Lucro Líquido"} valor={"292,00"} info={"-41,7%"} tip={"vs mês anterior"}/>
            <InfoBlock tittle={"Saldo no final do mês"} valor={"5.712,00"} info={"-4,8%"} tip={"vs mês anterior"}/>

            <BarChartReceitas tittle={"Receitas e Despesas"}/>
            <SaldoMes tittle={"Saldo no final do mês"}/>
            <OrcamentoReceita tittle={"% do orçamento de receita"} cor={"#55A38B"}/>
            <OrcamentoReceita tittle={"% do orçamento de despesas"} cor={"#FF4500"}/>
        
        </div>
    )
}

export default Dashboard