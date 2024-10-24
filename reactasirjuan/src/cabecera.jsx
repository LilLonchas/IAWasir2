import React from 'react'

export  function Cabecera() {
  return (
    <h1>Clase de IAW del curso 2024-25</h1>
  )
}
export  function Cabecera1(props) {
  return (
    <>
        <li>{props.mensaje}</li>
        <li>{props.otro}</li>
    </>
  )
}
export  function Cabecera2(mensaje="defecto", otro) {
    return (
      <>
          <li>{mensaje}</li>
          <li>{otro}</li>
      </>
    )
  }