import React from "react";
import Card from "../components/Card"
import { useContext, useState } from "react";
import { ThemeContext } from "../components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const [med, setMed]=useState(JSON.parse(localStorage.getItem("fav")))
  const themes=useContext(ThemeContext)

  return (
    (med?.length>1)?(
      <div className={"list "+ themes.theme}>
        {med.map((m)=>(
          <Card name={m.name} usename={m.username} id={m.id} key={m.id}/>
        ))}
      </div>
    ):
    (<div className={"fav" + themes.theme}>
      No ha agregado profesionales a favoritos
    </div>
    )
  )
}

export default Favs;