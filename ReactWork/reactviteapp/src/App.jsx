import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile.jsx'
import Gallery from './component/Gallery.jsx'
import StateHandling from './component/StateHandling.jsx'
import ImageManipulation from './component/imagemanipulation.jsx'
import Login from './pages/Login.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  // const [count, setCount] = useState(0)

  return (
    // <div className="container">
    //   <h2>Welcome to react vite</h2>
    //     {/* <Gallery /> */}
    //     {/* <StateHandling /> */}
    //     <ImageManipulation />
    // </div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login/>}></Route>
        </Routes> 
      </BrowserRouter>
    </div>
  )
}

export default App
