import React from "react";

const Error500Page: React.FC = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Error 500: Error interno del servidor</h1>
      <p>Lo sentimos, ocurrió un error interno en el servidor.</p>
      {/* Puedes agregar un botón de regreso o un enlace a la página de inicio */}
      <a href="/">Volver a la página de inicio</a>
    </div>
  );
};

export default Error500Page;
