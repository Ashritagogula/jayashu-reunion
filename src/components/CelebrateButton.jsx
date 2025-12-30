import confetti from "canvas-confetti"
import "../styles/celebrate.css"

const CelebrateButton = () => {
  const celebrate = () => {
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#ff9ecf", "#6aa9ff", "#ffd86a", "#a6ffcb"]
    })
  }

  return (
    <div>
    <h1>Click down to see magic</h1>
    <button className="celebrate-btn" onClick={celebrate}>
      Celebrate Us 🎉
    </button>
    </div>
  )
}

export default CelebrateButton
