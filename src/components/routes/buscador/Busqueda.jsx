import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Busqueda.css";
import "../../Header.css";
import LogoLink from "../../LogoLink";

/* import axios from "axios"; */

const Busqueda = () => {
  const [noticias, setNoticias] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState(false);
  /*   const [cargando, setCargando] = useState(false); */

  /* useEffect(() => {
    const consultarAPI = async () => {
      const url = `https://newsapi.org/v2/everything?q=${busqueda}&apiKey=d4af2b7365e74b1f9f4af4d354f79038&language=es`;
      const resultado = await axios.get(url);
      setNoticias(resultado.data.articles);
    };
    consultarAPI();
  }, [busqueda]); */

  const datos = (e) => {
    e.preventDefault();

    fetch(
      `https://newsapi.org/v2/everything?q=${busqueda}&apiKey=d4af2b7365e74b1f9f4af4d354f79038&page=1&pageSize=10&language=es`
    )
      .then((response) => response.json())
      .then((data) => {
        const { articles } = data;
        const dataN = articles || [];
        console.log(data);
        setNoticias(articles);

        if (dataN.length === 0) {
          setError(true);
        } else {
          setError(false);
        }
      });
  };

  console.log(noticias);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    if (busqueda.length >= 3) {
      setCargando(true);
      console.log(cargando);
    } else {
      setCargando(false);
      console.log(cargando);
    }
  };

  return (
    <>
      <LogoLink />
      <form onSubmit={datos}>
        <div className="contenedor">
          {error === true ? (
            <p className="error">No hay resultados</p>
          ) : (
            console.log("exitoso")
          )}
          <Link to="/buscador">
            <input
              className="input"
              type="search"
              placeholder="Buscar"
              onChange={handleChange}
            />
          </Link>

          <br></br>

          {cargando === true ? (
            <button className="btn" type="submit">
              Buscar
            </button>
          ) : null}
        </div>
      </form>
      <div className="cont_principal">
        {noticias.map((user) => (
          <div key={user.title} className="container">
            <div>
              <p className="name">{user.source.name}</p>
              <a href={user.url} target="blank" className="sumbrayado">
                <h1 className="titulo">{user.title}</h1>
              </a>
              <p className="description">{user.description}</p>
              <p className="fecha">{user.publishedAt}</p>
            </div>

            <div>
              <img className="img" src={user.urlToImage} alt={user.title} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Busqueda;

//
