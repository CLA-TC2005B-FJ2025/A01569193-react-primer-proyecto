import React from 'react'
import { Tarjeta } from './Tarjeta'
// importamos las imagenes 
import MarioImage from'./Imagenes/Mario.png'
import PeachImage from'./Imagenes/Peaches.png'
import LuigiImage from'./Imagenes/Luigi.png'

export function App() {
  return (
    <div>
        <div>Personajes de Mario Bros que mas me gistas</div>
        <Tarjeta nombre= "Mario" colorfavorito= "rojo" image = {MarioImage}/>
        <Tarjeta nombre= "Luigi" colorfavorito= "Verde" image = {PeachImage}/>
        <Tarjeta nombre= "Peach" colorfavorito= "Rosa" image = {LuigiImage}/>
    </div>
  )
}
