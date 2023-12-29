import './App.css';
import './styles/Testimonio.css'
import {Testimonio }from './componentes/testimonio';
function App() {
  return (
    <div className="App">
      <div className='center-page'> 
        <h1 className='H1'>Miembros y Asociados de Big Tech:</h1>
          <Testimonio
            nombre ='Saul Figuereo'
            pais='(Dominicano)'
            puesto ='Dueno de Big Tech'
            cargo ='(Empresario)'
            texto =' Impulsado por el deseo de ser independiente, de no trabajar para otros, crea y desarrolla una idea que
             representa la posible solución a los deseos o necesidades del consumidor, y 
            que organiza, dirige y asume los riesgos medidos de la creación y operación de su propio negocio.'
            imagen ='saul'/>

          <Testimonio 
          nombre ='Gianmarco Cruz'
          pais='(Dominicano)'
          puesto ='Ingenierio Aeroespacial en Big Tech'
          cargo ='(Empleado)'
          texto ='Se ocupa de diseñar y construir las aeroestructuras de los aviones y helicópteros tomando en consideración las 
          leyes de la aerodinámica,  Además se encargan de
           la integración de los elementos motores  en las aeroestructuras 
           para construir la aeronave. '
           
          imagen ='converted_gian'/>

          <Testimonio 
          nombre ='Gamalier Sanchez'
          pais='(Dominicano)'
          puesto ='Ingeniero en sistemas de Big Tech'
          cargo ='(Empleado)'
          texto ='Campo interdisciplinario de la ingeniería que permite estudiar y comprender la realidad, con 
          el propósito de implementar u optimizar sistemas complejos. P a los esfuerzos de la ingeniería,
           adoptando en todo este trabajo el paradigma sistémico '
          
          imagen ='converted_cine'/>

      </div>
      
    </div>
  );
}

export default App;
