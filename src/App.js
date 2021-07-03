import './App.css';
import Home from './pages/home/Home';

function App() {
  
  const  Data = [
    {
 name:'diana',
 brand:'lv',
 color:'blue'
},
{
   name:'ndinda',
   brand:'lv',
   color:'blue'
 },
 {
   name:'nyamai',
   brand:'lv',
   color:'blue'
 }
]
  return (
    <div className="App">
     
   <Home Data={Data}/>
    </div>
  );
}

export default App;
