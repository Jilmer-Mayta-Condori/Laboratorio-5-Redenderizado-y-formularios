import React, { useState } from 'react'
import FiltroComponent from './components/FiltroComponent/FiltroComponent'
import ContactsComponent from './components/ContactComponent/ContactComponent'
import FormularioComponent from './components/FormularioComponent/FormularioComponent'

const App = ({ nombre: initialName }) => {

  const [nombre, setNombre ] = useState(initialName)  

  return (
    <div>
      <h2>Phonebook</h2>
      <FiltroComponent nombre={nombre}></FiltroComponent>

      <h2>Add a new contact</h2>
      <FormularioComponent nombre={nombre}></FormularioComponent>
      
      <h2>Numbers</h2>
      <ContactsComponent nombre={nombre}></ContactsComponent>

    </div>
  )
}

export default App;