function Boton({ texto, onClick, tipo = 'normal' }) {
  return (
    <button className={`boton-${tipo}`} onClick={onClick}>
      {texto}
    </button>
  )
}

export default Boton
