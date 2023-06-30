import React from 'react'
import Card from "../components/Card"
import { useContext, useEffect, useState } from 'react'
import { ThemeContext } from '../components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

function Home() {
  const [odon, setOdon] = useState([]);
  const themes = useContext(ThemeContext);

  async function getOdon() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
    const o = await res.json();
    setOdon(o);
  }

  useEffect(() => {
    getOdon();
  }, []);

  return (
    <>
      <h1>Nuestros Profesionales a su Servicio</h1>
      <div className={"list "+themes.theme} >
        {odon.map((o) => (
          <Card name={o.name} username={o.username} id={o.id} key={o.id} />
        ))}
      </div>
    </>
  );
}

export default Home;