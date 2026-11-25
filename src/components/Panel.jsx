// Patron children: el panel no sabe que va adentro, solo lo envuelve
function Panel({ titulo, children }) {
  return (
    <section className="caja">
      <h2>{titulo}</h2>
      {children}
    </section>
  )
}

export default Panel
