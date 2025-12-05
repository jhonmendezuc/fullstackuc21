import React from 'react'
import { useDispatch } from 'react-redux'
import { incrementar } from './contadorSlide'
export default function ContadorRedux() {
  const dispatch = useDispatch()
  return (
    <>
    <div>ContadorRedux</div>
    <button onClick={() => dispatch(incrementar())}>Incrementar con redux desde el hijo</button>
    </>
  )
}
