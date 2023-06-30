import React from "react";
import { useContext, useState } from "react";
import style from "./styles/Form.module.css"
import {ThemeContext} from "./utils/global.context"


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const themes = useContext(ThemeContext);
  const[error, setError]=useState(false)
  const[nombre, setNombre]=useState("")
  const[msj, setMsj]=useState("")
  
  function handleSubmit(e){
    e.preventDefault()
    const name=e.target.nombre.value.trim();
    const mail=e.target.email.value.trim();

    const dominio=mail.split("@")[1];
    
    if (name.length<3){
      setMsj("El nombre debe contener al menos 3 letras")
      setError(true);
      return
    }
    setNombre(name)
    setError(false)
  }
  function handleChange(){
    setNombre("")
    setError(false)
  }
  return (
    <div className={style.container+""+themes.theme}>
      <form className={style.form} onSubmit={handleSubmit}>
        <label htmlFor="nombre">Nombre: </label>
        <input type="text" required id="nombre" placeholder="Ingrese su Nombre" onChange={handleChange} />
        <label htmlFor="email">Email: </label>
        <input type="email" required id="email" placeholder="Ingrese su dirección de Email" onChange={handleChange} />
        <button type="submit">Enviar</button>
      </form>

      {error && <div className={style.error}>ERROR: {msj}</div>}
      {nombre && (<div> Gracias <i>{nombre}</i> nos contactaremos con Ud. próximamente!  </div>)}
    </div>
  )
}

export default Form;