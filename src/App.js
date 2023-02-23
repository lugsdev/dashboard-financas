import DashboardInferior from "./components/DashboardInferior/DashboardInferior";
import Dashboard from "./components/DashboardSuperior/Dashboard";
import styles from "./App.css"



function App() {
  return (
    
    <div className={styles.App}>
      <Dashboard />
      <DashboardInferior />
    </div>

  );
   
}

export default App;
