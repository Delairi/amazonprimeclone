import './App.css'
import Portada from './Structure/Portada'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Inicio from './Structure/Inicio';
function App() {
  

  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}></Route>
    </Routes>
    </BrowserRouter>
   
    </div>
  )
}


export default App
