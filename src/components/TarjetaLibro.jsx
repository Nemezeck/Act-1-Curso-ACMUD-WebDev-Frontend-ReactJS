import Boton from './Boton'
import Etiqueta from './Etiqueta'

// disponible tiene valor por defecto por si el libro no lo trae
function TarjetaLibro({ titulo, autor, anio, disponible = true, onFavorito }) {
  return (
    <div className="tarjeta">
      <h3>{titulo}</h3>
      <p>
        {autor} - {anio}
      </p>
      <Etiqueta activo={disponible} />
      <Boton texto="Agregar a favoritos" onClick={() => onFavorito(titulo)} />
    </div>
  )
}

export default TarjetaLibro
