# Proyecto: Juego de Adivinar Pokémon (Ejercicio de `useCallback`)

Este repositorio contiene un pequeño juego de adivinar Pokémon, desarrollado como un ejercicio práctico para un curso de React y TypeScript. El objetivo principal es entender y aplicar el hook `useCallback` para optimizar el rendimiento de la aplicación.

## ¿De qué trata el juego?

La aplicación muestra la imagen de un Pokémon obtenido aleatoriamente de la [PokéAPI](https://pokeapi.co/). Tu misión es adivinar el nombre del Pokémon y escribirlo en el campo de texto. La aplicación te dirá si has acertado o no.

## Conceptos Clave de React Utilizados

Este proyecto es ideal para familiarizarse con algunos de los hooks más importantes de React.

### Componentes

- **¿Qué son?**: Son bloques de construcción reutilizables que dividen la interfaz de usuario en piezas independientes. En este proyecto, encontrarás los componentes en `src/components`.

### Hooks

- **`useState`**: Permite a los componentes tener su propio "estado" o memoria. Lo usamos para guardar el Pokémon actual, el estado de carga (`isLoading`), los errores y el estado del juego (jugando, ganado o perdido).
- **`useEffect`**: Se usa para ejecutar "efectos secundarios" en los componentes. Un efecto secundario común es la obtención de datos de una API. Aquí lo usamos para cargar el primer Pokémon cuando la aplicación se inicia.
- **`useCallback`**: Este es el hook central de este ejercicio. `useCallback` memoriza una función, lo que significa que evita que se vuelva a crear en cada renderizado del componente. ¿Por qué es útil?

  - **Optimización**: Si pasas una función como `prop` a un componente hijo que está optimizado (por ejemplo, con `React.memo`), `useCallback` evita que ese componente hijo se renderice innecesariamente.
  - **Estabilidad de dependencias**: Al usarlo en `useEffect`, te aseguras de que el efecto no se ejecute de nuevo solo porque la función fue recreada.
    En este proyecto, lo usamos en el custom hook `useGameManager` para las funciones `handlePokemonNameSubmit` y `loadNewPokemon`.

- **Custom Hooks (Hooks Personalizados)**: Son funciones que te permiten extraer y reutilizar lógica de estado entre diferentes componentes. Hemos creado `useGameManager` (`src/hooks/use-game-manager.ts`) para encapsular toda la lógica del juego en un solo lugar, haciendo que el componente `App.tsx` sea mucho más limpio y fácil de leer.

## Tecnologías

- **React**: Biblioteca para construir interfaces de usuario.
- **TypeScript**: Añade tipado estático a JavaScript para un desarrollo más robusto.
- **Vite**: Herramienta de desarrollo frontend moderna y ultrarrápida.
- **Bootstrap**: Framework de CSS para el diseño de la interfaz.

## Cómo Empezar

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### 1. Prerrequisitos

Asegúrate de tener [Node.js](https://nodejs.org/) (versión 18 o superior) instalado en tu sistema.

### 2. Clonar el Repositorio

Abre tu terminal y clona este repositorio en tu máquina.

```sh
git clone <URL_DEL_REPOSITORIO>
cd 02-useCallback
```

(Reemplaza `<URL_DEL_REPOSITORIO>` con la URL real del repositorio).

### 3. Instalar Dependencias

Una vez dentro del directorio del proyecto, instala todas las dependencias necesarias con npm.

```sh
npm install
```

### 4. Ejecutar la Aplicación

Ahora, puedes iniciar la aplicación en modo de desarrollo.

```sh
npm run dev
```

¡Y listo! Abre tu navegador y visita `http://localhost:5173` para ver el juego en acción.

## Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo.
- `npm run build`: Compila el proyecto para producción.
- `npm run lint`: Analiza el código en busca de errores y problemas de estilo.
- `npm run preview`: Previsualiza la versión de producción localmente.
