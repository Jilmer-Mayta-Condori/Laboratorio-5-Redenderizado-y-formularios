import React, { useState } from 'react'

const ContactComponent = ({ nombre: initialName }) => {
  
  const [nombre, setNombre ] = useState(initialName)
  
  return (
    <div>
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

export default ContactComponent;