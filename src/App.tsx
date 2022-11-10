import InitialPage from './pages/initial/initial';
import HomePage from './pages/home/home';
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div className="App">
      {/* 
      Router de la App
      Agregar nuevas rutas: Route
    */
      }
      <Routes>
        <Route path="/" element={<InitialPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  )
}

export default App
