import styles from "./InfoBlock.module.css"

function InfoBlock({tittle, valor, info, tip}){
    return(
        <div className={styles.bloco}>
            <h3 className={styles.titulo}>{tittle}</h3>
            <h2 className={styles.valor}>{valor}</h2>
            <p className={styles.info}>{info}</p>
            <p className={styles.tip}>{tip}</p>
        </div>
    )
} 

export default InfoBlock