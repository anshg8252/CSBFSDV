import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './component/Profile.jsx'
import Gallery from './component/Gallery.jsx'
import StateHandling from './component/StateHandling.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="container">
      <h2>Welcome to react vite</h2>
      <h3>
        {/* <Gallery /> */}
        <StateHandling />
      </h3>
    </div>
  )
}

export default App
