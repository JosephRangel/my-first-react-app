import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="main-container">
      {/* Encabezado y Párrafo */}
      <h1>Bienvenido al Curso de Frontend</h1>
      <p>
        Esta es una página creada con React local (Vite), 
        incorporando elementos de lista y estilos personalizados.
      </p>

      {/* Contenedor de división y listas */}
      <div className="contenedor-listas">
        <h3>Temas a aprender (Listas):</h3>

        {/* Lista Ordenada */}
        <ol>
          <li>Instalación de <span className="resaltado">Node.js</span></li>
          <li>Uso de <span className="resaltado">NPM</span></li>
          <li>Componentes en <span className="resaltado">JSX</span></li>
        </ol>

        <hr /> {/* En React las etiquetas vacías deben cerrarse con / */}

        {/* Lista Desordenada */}
        <ul>
          <li>Visual Studio Code</li>
          <li>Terminal de comandos</li>
          <li>Navegador Web</li>
        </ul>
      </div>
    </div>
  )
}

export default App
