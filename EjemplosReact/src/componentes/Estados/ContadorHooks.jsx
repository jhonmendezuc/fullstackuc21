import React from 'react'
import { useState } from 'react'

export default function ContadorHooks(props) {

  const [contador, setContador] = useState(0) 
  

  const incrementar = () => {
     setContador(contador+1)
  }
  return (
    <>
    <h1>ContadorHooks {contador}</h1>
    <button onClick={incrementar}>Incrementar</button> <br/>
    sesion desde el componente hijo: {props.sesion}
    </>
  )
}
