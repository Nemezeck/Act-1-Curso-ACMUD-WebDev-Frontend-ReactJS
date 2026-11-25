// Renderizado condicional segun la prop
function Etiqueta({ activo }) {
  if (activo) {
    return <span className="etiqueta verde">Disponible</span>
  }
  return <span className="etiqueta gris">Prestado</span>
}

export default Etiqueta
