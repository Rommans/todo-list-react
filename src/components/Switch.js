import React, { useState, useEffect } from "react";
import styled, { ThemeProvider } from "styled-components";
import {lightTheme, darkTheme, GlobalStyles} from '../themes.js'
// import styles from './Switch.module.css';
import "../switch.scss";

const StyledApp = styled.div``

function Switch() {
    const [ darkMode, setDarkMode ] = useState(false)
    const [theme, setTheme] = useState('light')

    const themeToggle = () => {
      theme === 'light' ? setTheme('dark') : setTheme('light')
    }

  useEffect(() => {
    const body = document.body
    const toggle = document.querySelector('.toggle-inner')
    if( darkMode === true ) {
      body.classList.add('dark-mode')
      toggle.classList.add('toggle-active')
    } else {
      body.classList.remove('dark-mode')
      toggle.classList.remove('toggle-active')
    }
  }, [darkMode])
  
  const handleScroll = () => {
    window.scroll({
      top: document.body.offsetHeight,
      left: 0, 
      behavior: 'smooth',
    });
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
     <GlobalStyles/>
       <StyledApp className="btn__switch">
        <button className="btn__scroll" onClick={handleScroll}><i className="fas fa-arrow-down"></i></button>
        <div id="toggle" onClick={() => {darkMode === false ? setDarkMode(true) : setDarkMode(false); themeToggle()}}>
            <div className="toggle-inner"/>
        </div>
       </StyledApp>
    </ThemeProvider>
  )
}
  
export default Switch;  
