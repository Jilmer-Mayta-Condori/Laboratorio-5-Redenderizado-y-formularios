import CabeceraComponent from './Components/CabeceraComponent';
import TemaComponent from './Components/TemaComponent';
import EjerciciosComponent from './Components/EjerciciosComponent';
import SumaEjerciciosComponent from './Components/SumaEjerciciosComponent';

const Course = (props) => {

  
  return (
    <div>
      <header style={{textAlign: 'center'}}>
        <CabeceraComponent nombreCurso={props.course}></CabeceraComponent>
      </header>
      <div>
        <div>  Tareas: {props.course.parts.map((cour) => 
          <div key={cour.id} >
            <TemaComponent tema={cour.name}></TemaComponent>
            <EjerciciosComponent ejercicios={cour.exercises}></EjerciciosComponent>
          </div>
        )} 
        </div>
        <SumaEjerciciosComponent curso={props.course}></SumaEjerciciosComponent>

      </div>
    </div> 
    
  );
}

export default Course;
