import { useState } from 'react';
import { ThemeContext } from './ThemeContext';
import Navigation from './components/navigation_tamplets/Navigation';
import Main from './components/Main/Main';
import './App.css';
import Login from './components/Login/Login';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from './Firebase';
import { useEffect } from 'react';

function App() {
  const [DarkTheme ,setDarkTheme] = useState(true);
  const [LoggedIn ,setLoggedIn] = useState(true);

   useEffect(
    onAuthStateChanged(auth ,(user)=>{
     if(user)
     {
      setLoggedIn(true);
     }
     else
     {
      setLoggedIn(false);
     }
    }),[])
  return (
     <ThemeContext.Provider value={{DarkTheme,setDarkTheme}}>
      <div className="App">
      {LoggedIn ? (<>
        <Navigation />
        <Main />
      </>)
      :
      (
        <Login />
      )}
      </div>
     </ThemeContext.Provider>

  )
}

export default App
