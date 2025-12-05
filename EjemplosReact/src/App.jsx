 import LabelText from './componentes/LabelText/LabelText'
 import "./styles/app.css"
 import EjemploTailWind from './componentes/EjemploTailWind'
 import EjemploBoostrap from './componentes/EjemploBoostrap'
 import EjemploMui from './componentes/EjemploMui'
import ContadorHooks from './componentes/Estados/ContadorHooks' 
import { incrementar }  from './componentes/Estados/contadorSlide' 
import { useSelector } from 'react-redux'
import ContadorRedux from './componentes/Estados/ContadorRedux'
function App() {
  
   const contador = useSelector((state) => state.contador.contador)
   

 
  const clickAqui = () => {
    alert('Click en el elemento')
  }

  const listaNumeros = [1,2,3,4,5,6,7,8,9,10];

  const usuarioObj={
    nombre:"Jhon",
    email:"jhon@gmail.com",    
  }


  return (
    <>
 

    { /*
       <button className="miBoton">Click aqui</button>
       <LabelText texto="Nombre" color="red" clickAqui={clickAqui}/>
       <LabelText texto="Apellido" color="blue" objetoUsuario={usuarioObj}/>
       <LabelText texto="Edad" color="green" clickAqui={clickAqui}/>
       <LabelText texto="Lista de numeros" color="yellow" clickAqui={clickAqui}/>
       <EjemploTailWind/>
        <EjemploBoostrap/>
        <EjemploMui/>
        */}

       <ContadorHooks /> <br/>
       
       <ContadorRedux/>
       <h1>Llamado a contador desde el padre (APP) {contador}</h1>
    
    </>
  )
}

export default App
 