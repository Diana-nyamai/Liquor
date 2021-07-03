import './App.css';
import { Login } from './pages/auth';

const Numbers = [1,2,3,4]

function App(props) {
  
  return (
    <div className="App">
     
    <Login Numbers= {Numbers}/>
    </div>
  );
}

export default App;
