import { useEffect, useState } from 'react';
import React from 'react'
import './App.css';
import { ScreenSizeProvider, useScreenSize } from './contexts';


function TitlePart() {
  const {isMobile} = useScreenSize()
  return (
    <>
    {isMobile ? <div>
      <img className="profile-pic fadein" src="https://s6.uupload.ir/files/msg23372500-17253_e56h.jpg" />
      <h1>Hi, I'm Mehdi</h1>
      <button>plus</button>
    </div> : <div>
        <img className="profile-pic fadein" src="https://s6.uupload.ir/files/msg23372500-17253_e56h.jpg"/>
        <h1>Hi, I'm mehdi</h1>
      </div>}
    </>
  )
}
function NavBar() {
  return (
    <div></div>
  )
}
function DashBoard() {
  const {isMobile} = useScreenSize()
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (typeof isMobile !== 'undefined') {
      setIsLoading(false)
    }
  }, [isMobile])
  return (
    <>
    {isLoading ? <div className="loader"></div> :
      <>
      <TitlePart />
      <NavBar />
      </>
    }
    </>
  )
}
function App() {
  return (
    <>
      <ScreenSizeProvider>
        <DashBoard />
      </ScreenSizeProvider>
    </>
  )
}
export default App