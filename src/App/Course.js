

const Course = (props) => {
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
        )} </div>

      </div>
    </div>
    
  );
}

export default Course;
