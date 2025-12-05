 

function LabelText(props) {
  

  const estilosInput = {
    fontSize: '16px',
    color: props.color
   }

   const estilosParrafo = {
    fontSize: '16px',
    color: 'blue'
   }

  return (
    <>
      <label htmlFor="">{props.texto} </label>
      <input type="text" style={estilosInput} />      
      <hr />

      { props.objetoUsuario ? <p style={estilosParrafo}> hay usuario y se llama {props.objetoUsuario.nombre} </p> : <p>No hay usuario</p> }
    </>
  ) 
}


export default LabelText
