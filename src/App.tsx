import { useState, useEffect } from 'react';

import HomePage from './pages/home/home';
import Initial from './pages/initial/initial';

import { Route, Routes, redirect, BrowserRouter } from 'react-router-dom'
import { auth } from './firebase-config'

const App = () => {
  
  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(()=> {
    auth.onAuthStateChanged((user) => {
      if(user) {
        setIsAuth(true);
        return redirect("/home");
      } else {
        setIsAuth(false);
        return redirect("/");
      }  
    })
  },[])

  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Initial />} />
      <Route path='*' element={<>NOT FOUND</>} />
      <Route path='/home' element={<HomePage/>} />
    </Routes>
  </BrowserRouter>
    </div>
  )
}

export default App
