import React from 'react'
import "./styles/Usuarios.css"

function Usuarios() {
  const users =[

   {id:1,nombre:"Sofia",correo:"sofia@gmail.com"},
   {id:2,nombre:"Juan",correo:"juan@gmail.com"},
   {id:3,nombre:"Pablo",correo:"pablo@gmail.com"}

  ]
  return (
    <div>
      <h2>Tabla de Usuarios</h2>
      <div className="fila titulo">
      <p>ID</p>
      <p>Nombre</p>
      <p>Correo</p>
    </div>

      {
        users.map((u)=>(
            
            <div className='fila' key={u.id}>
             <p>{u.id}</p>
             <p>{u.nombre}</p>
             <p>{u.correo}</p>
            </div>
        ))

      }
    </div>
  )
}

export default Usuarios
