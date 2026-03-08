import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./styles/Login.css"
import Register from "./Register"

function Login(){

 const [correo,setCorreo] = useState('')
 const [password,setPassword] = useState('')
 const navigate = useNavigate()
 
 const ingresar = () => {
    if(correo === "sofia@gmail.com" && password === "1234"){
        navigate("./src/Usuarios.jsx")
    }else{
        alert("Correo o contraseña incorrectos")
    }
  }

 return(
  <div className="login">

   <h2>Login</h2>

   <input
    type="text"
    placeholder="Correo"
    onChange={(e)=>setCorreo(e.target.value)}
   />

   <input
    type="password"
    placeholder="Contraseña"
    onChange={(e)=>setPassword(e.target.value)}
   />

   <button onClick={ingresar}>Ingresar</button>

  </div>
 )

}

export default Login