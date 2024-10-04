import { Route, Routes } from "react-router-dom"

// Pages
import Home from "./pages/Home"

// Components
import Footer from "./components/Footer"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
