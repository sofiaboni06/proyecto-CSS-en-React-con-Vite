import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./App.css"
import Navbar from "./Navbar"

import Login from "./Login"
import Register from "./Register"
import Usuarios from "./Usuarios"


function App() {
  

  return (
    <div className="contenedor">
      
      <BrowserRouter>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  )
}

export default App
