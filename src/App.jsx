import React, { useEffect } from 'react';
import { FiSettings } from 'react-icons/fi';
import { BrowserRouter } from "react-router-dom";
import Navber from './components/Navber';
import Sideber from './components/Sideber';
import { useStateContext } from "./context/ContextProvider";


const App = () => {
  const { setCurrentColor, setCurrentMode, currentMode, activeMenu, currentColor,  setThemeSettings } = useStateContext();

  useEffect(() => {
    
    const currentThemeColor = localStorage.getItem('colorMode');
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, [setCurrentColor, setCurrentMode]);

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className="fixed right-4 bottom-4" style={{ zIndex: '1000' }}>
         
              <button
                type="button"
                onClick={() => setThemeSettings(true)}
                style={{ background: currentColor, borderRadius: '50%' }}
                className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
              >
                <FiSettings />
              </button>

         
          </div>
          {activeMenu ? (
            <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sideber />
            </div>
          ) : (
            <div className="w-0 dark:bg-secondary-dark-bg">
              <Sideber />
            </div>
          )}
          <div
            className={
              activeMenu
                ? 'dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  '
                : 'bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 '
            }
          >
            <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
              <Navber />
            </div>
            <div>
            

            
            </div>
         
          </div>
        </div>
      </BrowserRouter>
      
     



    </div>
  )
}

export default App