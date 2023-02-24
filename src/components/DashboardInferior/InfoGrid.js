import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import styles from "./InfoGrid.module.css"

const columns = [
  { field: 'id',
    headerName: "Descritivo",
    width: 240, 
    sortable: false
  },
  {
    field: 'valor',
    headerName: "Valor",
    width: 120,
    editable: true,
    sortable: false,
  },
  {
    field: 'porcentagem',
    headerName: "%",
    width: 70,
    editable: false,
  }
];

const rows = [
  { id: "Total Receita", valor: "4.190,00", porcentagem: '100%'},
  { id: "Custo de bens vendidos", valor: '1.417,00', porcentagem: '34%'},
  { id: "Lucro bruto", valor: '2.773,00', porcentagem: '66%'},
  { id: "Total Despesas Operacionais", valor: '1.961,00', porcentagem: '47%'},
  { id: "Lucro operacional", valor: '812,00', porcentagem: '19%'},
  { id: "Imposto", valor: '520,00', porcentagem: "12%"},
  { id: "Lucro Líquido", valor: '292,00', porcentagem: '7%'},
];

function InfoGrid() {
  return (

    
      <div className={styles.InfoGrid}>
        <h2>Demonstração de resultados</h2>
      
      <Box sx={{ height: 290, width: 450 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={7}
          rowHeight={27}
          disableSelectionOnClick
        />
      </Box>
      </div>
    );
}

export default InfoGrid