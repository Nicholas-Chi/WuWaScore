// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './style/style.css'
// import Stats from "./components/Stats.tsx"
// import CharacterCard from './components/CharacterCard.tsx'
import Dashboard from './components/cards/ShowcaseDashboard'
import Characters from './pages/Characters'
// import Weapon from "./components/Weapon.tsx"
// import './style/style.css'
import EchoForm from './pages/Echoes'
import Navbar from './layout/Navbar'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" />
        <Route path="characters" element={<Characters/>} />
        <Route path="echoes" element={<EchoForm/>} />
      </Routes>
    </>
  )
}

export default App
