import React from 'react'
import Form from '../components/Form'
import Navbar from '../components/Navbar'

import styles from "../components/styles/Form.module.css"
import { useContext } from 'react'
import { ThemeContext } from '../components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  const themes = useContext(ThemeContext)
  return (
    <div className={styles.container +" "+ themes.theme}>
      
      <h2>Le gustaría saber más?</h2>
      <p>Envíenos sus consultas y nos contactaremos con Ud.</p>
      <Form/>

     
    </div>
  )
}

export default Contact