import React, { useState } from 'react'

const App = ({ nombre: initialName }) => {
  
  const [nombre, setNombre ] = useState(initialName)

  const [ newName, setNewName ] = useState('')


  const handleChange = (event) => {
    const name = event.target.value
    setNewName(name)
  }

  const handleClick = (event) => {
    event.preventDefault()
    
    const nuevoNombre = {
      id: nombre.length + 1,
      name: newName
    }

    setNombre([
      ... nombre,
      nuevoNombre
    ])

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