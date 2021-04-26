import React, { useState } from 'react'

const App = ({ nombre: initialName }) => {
  
  const [nombre, setNombre ] = useState(initialName)

  const [ newName, setNewName ] = useState('')

  const [ newNumber, setNewNumber ] = useState('')

  const [ filtro, setNewFilter ] = useState('')

  const [ coincidencias, setNewCoincident ] = useState([])

  
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

  const BusquedaFiltro = (filtroEnviado) =>{
    const ArrayCoincidencias = [];
    for (var x = 0; x < nombre.length ; x++){
      if (nombre[x].name.includes(filtroEnviado) === true){
        const NuevaCoincidencia = {
          id: x + 1,
          name: nombre[x].name,
          number: nombre[x].number,
        }
        ArrayCoincidencias.push(NuevaCoincidencia)
      }
    }
    console.log(filtroEnviado)
    if(!filtroEnviado){
      setNewCoincident([])
    }else{
      setNewCoincident(ArrayCoincidencias)
    }
    
  }

  // Filtros

  const handleChangeFilter = (event) =>{
    const filt = event.target.value
    setNewFilter(filt)
    BusquedaFiltro(filt)
  }


  return (
    <div>
      <h2>Phonebook</h2>

      <div>
        <div>
          filtrar coincidencias con: <input type="text" onChange= {handleChangeFilter}  value={filtro}/> 
        </div>
        <ol>
          {coincidencias.map((con) =>
          <li key={con.id}>
            <p>{con.name} {con.number}</p>
          </li>
          )}
        </ol>
      </div>
      
      <h2>Add a new contact</h2>

      <form onSubmit={handleClick}>
        <div>
          name: <input onChange= {handleChange}  value={newName}/><br/>
          number: <input onChange= {handleChangeNumber}  value={newNumber}/>
        </div>
        <div>
          <button>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ol>
        {nombre.map((nom) =>
        <li key={nom.id}>
          <p>{nom.name} {nom.number}</p>
        </li>
        )}
      </ol>
    </div>
  )
}

export default App;