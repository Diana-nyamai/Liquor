import './App.css';
import { Login } from './pages/auth';



function App() {
  const Numbers = [1,2,3,4]
  return (
    <div className="App">
     
    <Login Numbers= {Numbers}/>
    </div>
  );
}

export default App;
