

const Course = (props) => {

  const total = props.course.parts.reduce(
    (contenedor, EjerciosPropuestos) => 
      contenedor + EjerciosPropuestos.exercises, 0
  );
  return (
    <div>
      <header style={{textAlign: 'center'}}>
        <h1 > CURSO: {props.course.name} </h1>
      </header>
      <div>
        <div>  Tareas: {props.course.parts.map((cour) => 
          <div key={cour.id} >
             <p> TEMA: {cour.name}</p>
             <p> EJERCICIOS: { cour.exercises}</p>
          </div>
        )} 
        </div>
        <div> Total de Ejercicios propuestos: {total} </div>

      </div>
    </div> 
    
  );
}

export default Course;
