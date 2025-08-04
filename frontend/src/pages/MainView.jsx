import React from 'react'
import Navbar from '../components/Navbar'
import Home from './Home'

const MainView = () => {
  return (
    <div className="MainView">
        <nav>
            <Navbar/>
        </nav>
        <main>
            <Home/>
        </main>
    </div>
  )
}

export default MainView