import React from 'react'
import { Tarjeta } from './Tarjeta'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros que mas me gistas</div>
        <Tarjeta nombre= "Mario" colorfavorito= "rojo"/>
        <Tarjeta nombre= "Luigi" colorfavorito= "Verde"/>
        <Tarjeta nombre= "Peach" colorfavorito= "Rosa"/>
    </div>
  )
}
