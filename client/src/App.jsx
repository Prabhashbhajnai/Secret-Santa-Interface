import { Route, Routes } from "react-router-dom"

// Components
import Footer from "./components/Footer"

// Pages
import Home from "./pages/Home"
import Room from "./pages/Room"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:roomID" element={<Room />} />
      </Routes>

      {/* <Footer /> */}
    </>
  )
}

export default App
