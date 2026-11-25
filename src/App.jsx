import { useState } from 'react'
import Panel from './components/Panel'
import TarjetaLibro from './components/TarjetaLibro'
import Boton from './components/Boton'
import './App.css'

const libros = [
  { id: 1, titulo: 'Cien años de soledad', autor: 'Gabriel García Márquez', anio: 1967, disponible: true },
  { id: 2, titulo: 'La vorágine', autor: 'José Eustasio Rivera', anio: 1924, disponible: false },
  { id: 3, titulo: 'Rayuela', autor: 'Julio Cortázar', anio: 1963, disponible: true },
  { id: 4, titulo: 'El túnel', autor: 'Ernesto Sabato', anio: 1948 },
]

function App() {
  const [favoritos, setFavoritos] = useState([])

  // esta funcion se pasa como prop a cada tarjeta (el hijo avisa al padre)
  function agregarFavorito(titulo) {
    if (!favoritos.includes(titulo)) {
      setFavoritos([...favoritos, titulo])
    }
  }

  return (
    <main>
      <h1>Biblioteca</h1>

      <Panel titulo="Libros">
        <div className="lista">
          {libros.map((libro) => (
            <TarjetaLibro key={libro.id} {...libro} onFavorito={agregarFavorito} />
          ))}
        </div>
      </Panel>

      <Panel titulo={`Favoritos (${favoritos.length})`}>
        {favoritos.length === 0 ? (
          <p>Todavía no hay favoritos.</p>
        ) : (
          <ul>
            {favoritos.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        )}
        <Boton texto="Limpiar" tipo="peligro" onClick={() => setFavoritos([])} />
      </Panel>
    </main>
  )
}

export default App
