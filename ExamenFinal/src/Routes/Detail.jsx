import React from 'react'
import { useContext, useEffect, useState } from 'react'
import { useParams} from "react-router-dom"
import styles from "../components/styles/Detail.module.css"
import { ThemeContext} from "../components/utils/global.context"

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {
  const themes=useContext(ThemeContext)
  const params=useParams()
  const [med, setMed]=useState([])

  async function getMed(){
    const responce=await fetch(
      `https://jsonplaceholder.typicode.com/users/${params.id}`
    );
    const m =await responce.json()
    setMed(m)
  }
  useEffect(() =>{
    getMed()
  }, [params])

 
  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <div className={styles.cont + " "+ themes.theme}>
      <h3>Detalles del Odontologo</h3>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={styles.th}>Nombre</th>
            <th className={styles.th}>email</th>
            <th className={styles.th}>telefono</th>
            <th className={styles.th}>WebSite</th>
          </tr>
        </thead>
        <tbody>
          <tr className={styles.tr}>
            <td className={styles.td}>{med.name}</td>
            <td className={styles.td}>{med.email}</td>
            <td className={styles.td}>{med.phone}</td>
            <td className={styles.td}>{med.website}</td>
          </tr>
        </tbody>
      </table>
    </div>
    
  )
}

export default Detail