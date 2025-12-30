import "../styles/hero.css"
import { Link } from "react-router-dom"

const Hero = () => {
  return (
    <header className="hero">
      <div className="hero-inner">
        <h1>Hey Bestie..</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/surprise">Surprise</Link>
        </nav>
      </div>
    </header>
  )
}

export default Hero
