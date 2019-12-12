import React, { useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//importar muestro cliente axios
import clienteAxios from './config/axios';

//componentes
import Pacientes from './components/Pacientes';
import NuevaCita from './components/NuevaCita';
import Cita from './components/Cita';

function App() {

  //console.log(process.env.REACT_APP_BACKEND_URL);

  //state de la app
  const [ citas, guardarCitas ] = useState([]);
  const [ consultar, guardarConsultar ] = useState(true);

  //conumir la api externa
  useEffect( () => {

    if(consultar) {
      const consultarApi = () => {
        //localhost:4000
        clienteAxios.get('/pacientes') 
          .then(res => {
            //colocar en el state el resultado
            guardarCitas(res.data);

            //desabilitar la consulta
            guardarConsultar(false);
          })
          .catch(error => {
            console.log(error)
          })
      }
      consultarApi();
    }


  }, [consultar] );  //si existen unos cambios que ejecute consultar 

  
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={() => <Pacientes citas={citas}/>}/>
        <Route exact path="/nueva" component={() => <NuevaCita  guardarConsultar={guardarConsultar} />}/>
        <Route exact path="/cita/:id" 
        render={props => {
          const cita = citas.filter( cita => cita._id === props.match.params.id)

          return (
            <Cita cita={cita[0] }guardarConsultar={guardarConsultar} />
          )
        }}/>

      </Switch>
    </Router>
  );
}

export default App;
