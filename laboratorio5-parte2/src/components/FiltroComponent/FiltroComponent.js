import React, { useState } from 'react'

const FiltroComponent = ({ nombre: initialName }) => {

  const [nombre, setNombre ] = useState(initialName)

  const [ filtro, setNewFilter ] = useState('')

  const [ coincidencias, setNewCoincident ] = useState([])

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


  const handleChangeFilter = (event) =>{
    const filt = event.target.value
    setNewFilter(filt)
    BusquedaFiltro(filt)
  }


  return (
    <div>
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
    </div>
  )
}

export default FiltroComponent;