import { BrowserRouter, Routes, Route } from "react-router-dom"
import Hero from "./components/Hero"
import Story from "./components/Story"
import Surprise from "./components/Surprise"
import "./app.css"

function App() {
  return (
    <BrowserRouter>
      <div className="layout-root">
        <Hero />

        <main className="layout-main">
          <Routes>
            <Route path="/" element={<Story />} />
            <Route path="/surprise" element={<Surprise />} />
          </Routes>
        </main>

        <footer className="footer">
          Made with Ashrita 🤍
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App
