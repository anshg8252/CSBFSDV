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
import Registration from './pages/Registration.jsx'
import Dashboard from './pages/Dashboard.jsx'
import MainLayout from './pages/MainLayout.jsx'

function App() {
  // const [count, setCount] = useState(0)
  const [data, setData] = useState();

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
          <Route path='/login' element={<Login logData={data}/>}></Route>
          <Route path='/register' element={<Registration regData={setData}/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
          <Route path='/' element={<MainLayout/>}></Route>
        </Routes> 
      </BrowserRouter>
      {/* <h2>
        {JSON.stringify(data)}
      </h2> */}
    </div>
  )
}

export default App
