const SumaEjerciciosComponent = (props) =>{
    const total = props.curso.parts.reduce(
        (contenedor, EjerciosPropuestos) => 
          contenedor + EjerciosPropuestos.exercises, 0
    );

    return <div> Total de Ejercicios propuestos: {total} </div>
}

export default SumaEjerciciosComponent;