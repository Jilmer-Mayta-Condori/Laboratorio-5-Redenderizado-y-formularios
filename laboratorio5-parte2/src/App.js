import React, { useState } from 'react'

const App = ({ nombre: initialName }) => {
  
  const [nombre, setNombre ] = useState(initialName)

  const [ newName, setNewName ] = useState('')


  const handleChange = (event) => {
    const name = event.target.value
    setNewName(name)
  }

  const ValidarNombre = (nombreRecibido) => {
    let contador = 0
    for (var x = 0; x < nombre.length ; x++){
      if (nombre[x].name.toUpperCase() === nombreRecibido.toUpperCase()){
        contador++
      }
    }
    if (contador === 1){
      return false
    }else{
      return true
    }
  }

  const handleClick = (event) => {
    event.preventDefault()
    
    const nuevoNombre = {
      id: nombre.length + 1,
      name: newName
    }

    if (ValidarNombre(newName) === true){
      setNombre([
        ... nombre,
        nuevoNombre
      ])
      console.log("No se Repite")
    }else{
      window.alert(`${newName} is already added to phonebook`);
    }



    

    setNewName('')

  }


  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={handleClick}>
        <div>
          name: <input onChange= {handleChange}  value={newName}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {nombre.map((nom) =>
        <li key={nom.id}>
          <p>{nom.name}</p>
        </li>
        )}
      </ol>
    </div>
  )
}

export default App;