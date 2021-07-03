import './App.css';
import { Login } from './pages/auth';



function App() {
  const Names = ['diana','ndinda','nyamai']
  return (
    <div className="App">
     
    <Login Names= {Names}/>
    </div>
  );
}

export default App;
