import React from "react";
import Navbar from "./Navbar";

const Error404 = () => {
  const titulo = {
    textAlign: "center",
    color: "red",
  };
  const imagen = {
    width: "100%",
    height: "100%",
  };

  return (
    <>
      <Navbar />
      <img
        style={imagen}
        src="https://web.ua.es/es/defc/imagenes/error-404-pagina-no-encontrada.png"
        alt=" Page not found 404"
        className="error404"
      />
      <div style={titulo}>Page not found</div>
    </>
  );
};

export default Error404;
