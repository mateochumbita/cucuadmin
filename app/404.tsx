import React from "react";

const Error404Page: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Error 404: Página no encontrada</h1>
      <p>Lo sentimos, la página que estás buscando no existe.</p>
      {/* Puedes agregar un botón de regreso o un enlace a la página de inicio */}
      <a href="/">Volver a la página de inicio</a>
    </div>
  );
};

export default Error404Page;
