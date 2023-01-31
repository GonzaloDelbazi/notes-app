import { useState } from 'react';

import HomePage from './pages/home/home';
import Initial from './pages/initial/initial';

import { Route, Routes } from 'react-router-dom'
import { auth } from './firebase-config'
import { store } from './store';
import { getAuth } from 'firebase/auth';


const App = () => {
  
  const [isAuth, setIsAuth] = useState<boolean>(false);

  auth.onAuthStateChanged( (user) => {
    if(user) {
      setIsAuth(true);
    } else {
      setIsAuth(false);
    }  
  })

  return (
    <div className="App">
      {
      isAuth ? 
        /* Routes with user Logged */
      <Routes>
        <Route path="" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes> 
      : 
        /* Routes without user Logged */
      <Routes>
        <Route index element={<Initial />} />
      </Routes>
      }
    </div>
  )
}

export default App
