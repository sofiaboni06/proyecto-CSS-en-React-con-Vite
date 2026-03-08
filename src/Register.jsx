import { useState } from "react"
import { useNavigate } from "react-router-dom"
import "./styles/Register.css"

function Register() {
 
 const [nombre,setNombre] = useState('')
 const [correo,setCorreo] = useState('')
 const [password,setPassword] = useState('')
 const navigate = useNavigate()

 const registrar = () => {
    alert("usuario registrado")
    navigate("/login")
 }

 return (

  <div className="register">

   <h2>Register</h2>

   <input 
    placeholder="Nombre"
    onChange={(e)=>setNombre(e.target.value)}
   />

   <input 
    placeholder="Correo"
    onChange={(e)=>setCorreo(e.target.value)}
   />

   <input 
    type="password"
    placeholder="Contraseña"
    onChange={(e)=>setPassword(e.target.value)}
   />

   <button onClick={registrar}>Registrarse</button>

  </div>

 )

}

export default Register