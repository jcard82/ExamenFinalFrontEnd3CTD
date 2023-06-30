import { useState } from "react";
import { useContext } from "react";
import {Link} from "react-router-dom"
import styles from "./styles/Card.module.css"
import {ThemeContext} from "./utils/global.context"

const Card=({name, username, id})=>{
  const themes = useContext(ThemeContext);
  const [isFav, setIsFav]=useState(
    JSON.parse(localStorage.getItem("fav"))
    ?.filter(f=>f.id==id).length>0)
  
  function addFav(){
    if(!isFav){
      const old=JSON.parse(localStorage.getItem("fav")) || []
      const new_value=[...old,{id:id, name:name, username:username}]
      localStorage.setItem("fav",JSON.stringify(new_value))
      setIsFav(true)
    }else{
      const new_value=JSON.parse(localStorage.getItem("fav")).filter(f=>f.id !=id)
      localStorage.setItem("fav", JSON.stringify(new_value))
      setIsFav(false)
    }
  }
  return(
    <>
      <div className={styles.card+" "+themes.theme } key={id}>
        <Link to={`/detail/${id}`} style={{display:"contents"}}>
          <div>
            <img className={styles.img} src="/images/doctor.jpg" alt="Doctor_Image" />
            <h3>{name}</h3>
            <h4>{username}</h4>
          </div>
        </Link>
        <button onClick={addFav} className={styles.button+ " "+themes.theme}>
          {isFav?"Sacar de Favorito":"Agregar a Favorito"}</button>
      </div>
    </>
  )

}

export default Card;
