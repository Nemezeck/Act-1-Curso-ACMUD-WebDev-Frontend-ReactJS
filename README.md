# Actividad 1 - Patrones de props

Curso ACMUD WebDev Frontend - ReactJS

Pequeña biblioteca de libros para practicar el paso de props entre componentes.

Lo que se usa:

- Props con desestructuración (`TarjetaLibro`, `Boton`)
- Valores por defecto (`disponible = true`, `tipo = 'normal'`)
- `children` para componentes contenedores (`Panel`)
- Funciones como props para que el hijo le avise al padre (`onFavorito`)
- Renderizado condicional según una prop (`Etiqueta`)
- Spread de props (`{...libro}`) y listas con `map` y `key`

## Cómo correrlo

```
npm install
npm run dev
```

Hecho con React 19 y Vite.
