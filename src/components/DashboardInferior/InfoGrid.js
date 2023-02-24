
import styles from "./InfoGrid.module.css"

const data = [
  {nome: "Total receita", valor: "4.190,00", porcento: "100"},
  {nome: "Custo de bens vendidos", valor: "1.417,00", porcento: "34"},
  {nome: "Lucro bruto", valor: "2.773,00", porcento: "66"},
  {nome: "Total Despesas Operacionais", valor: "1.961,00", porcento: "47"},
  {nome: "Lucro Operacional", valor: "812,00", porcento: "19"},
  {nome: "Imposto", valor: "520,00", porcento: "12"},
  {nome: "Lucro Líquido", valor: "292,00", porcento: "7"}
]

function InfoGrid(){
  return(
    <div className={styles.InfoGrid}>
      <h2>Demonstração de Resultados</h2>

      <table>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.nome}</td>
              <td>{val.valor}</td>
              <td>{val.porcento + "%"}</td>
            </tr>
          )
        })}
      </table>
    </div>
  )
};

export default InfoGrid