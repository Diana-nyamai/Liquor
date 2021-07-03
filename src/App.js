import './App.css';
import Home from './pages/home/Home';
import Data from './pages/home/Data';
function App() {
  
  const Datas = Data
  return (
    <div className="App">
     
   <Home datas={Datas}/>
    </div>
  );
}

export default App;
