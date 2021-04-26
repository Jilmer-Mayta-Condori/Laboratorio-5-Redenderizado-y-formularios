import React, { useState } from 'react'

const ContactComponent = ({ nombre: initialName }) => {
  
  const [nombre, setNombre ] = useState(initialName)

  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')

  
  const handleChange = (event) => {
    const name = event.target.value
    setNewName(name)
  }
  const handleChangeNumber = (event) => {
    const num = event.target.value
    setNewNumber(num)
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
      name: newName,
      number: newNumber,
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

    setNewNumber('')
    setNewName('')

  }

  
  return (
    <div>
        
      <form onSubmit={handleClick}>
        <div>
          name: <input onChange= {handleChange}  value={newName}/><br/>
          number: <input onChange= {handleChangeNumber}  value={newNumber}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      
    </div>
  )
}

export default ContactComponent;