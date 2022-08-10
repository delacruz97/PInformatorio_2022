import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Header.css";
import Cargando from "./Cargando";
// const { API_KEY } = process.env;

const Header = () => {
  const [noti, setnoti] = useState([]);
  const [cargando, setcargando] = useState(false);
  const [total, settotal] = useState(0);

  //estados locales para el paginado
  const [pagina, setpagina] = useState(1);
  const [porPagina, setPorPagina] = useState(10);

  /* const [busqueda, setBusqueda] = useState(""); */

  useEffect(() => {
    const cargarNoticias = async () => {
      try {
        const res = await axios(
          "https://newsapi.org/v2/everything?q=bitcoin&apiKey=81aa9fe01b424530b8d4da6c217b229c&language=es"
        );
        /* &page=1 */
        /* &pageSize=10 */
        console.log(res);
        setnoti(res.data.articles);
        settotal(res.data.totalResults);
      } catch (error) {
        console.log(error);
      }
      if (setnoti.length > 0) {
        setcargando(true);
      }
    };

    cargarNoticias();
  }, []);

  /*   console.log("noticias:" + noti.length); */

  //funcion para cambiar de pagina
  const anterior = () => {
    setpagina(pagina - 1);
    if (pagina <= 0) {
      setpagina(1);
      alert("disculpe no hay noticias anteriores");
    }
  };
  const siguiente = () => {
    setpagina(pagina + 1);

    if (pagina >= 11) {
      setpagina(1);
      alert("Disculpe, por el momento no hay disponible mas noticias");
    }
  };

  //la funcion slice, me permite cortar un array en partes
  return (
    <>
      {cargando === true ? (
        <div className="cont_principal">
          <h3 className="resultado">
            Esta viendo {porPagina} noticias de {total} resultados
          </h3>

          {noti
            .slice(
              (pagina - 1) * porPagina,
              (pagina - 1) * porPagina + porPagina
            )
            .map((user) => (
              <div key={user.title} className="container">
                <div>
                  <p className="name">{user.source.name}</p>
                  <a href={user.url} target="blank" className="sumbrayado">
                    <h1 className="titulo">{user.title}</h1>
                  </a>
                  <p className="description">{user.description}</p>
                  <p className="fecha">Publicado el: {user.publishedAt}</p>
                </div>

                <div>
                  <img className="img" src={user.urlToImage} alt={user.title} />
                </div>
              </div>
            ))}
          {/**paginado */}
          <div className="buton">
            <button className="btnn" onClick={anterior}>
              Anterior
            </button>
            <button className="btnn" onClick={siguiente}>
              siguiente
            </button>
          </div>
        </div>
      ) : (
        <div>
          <Cargando />
        </div>
      )}
    </>
  );
};

export default Header;
