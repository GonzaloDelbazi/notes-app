import InitialPage from './pages/initial/initial';
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <div className="App">\
    {/* 
      Router de la App
      Agregar nuevas rutas: Route
    */}
    <Routes>
      <Route path='/' element={<InitialPage />} />
    </Routes>
      
    </div>
  )
}

export default App
