import { useEffect, useState } from "react"
import "../styles/jayashu.css"

const NAME = "JAYASHU"

const Jayashu = () => {
  const [visibleCount, setVisibleCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCount((prev) => {
        if (prev < NAME.length) return prev + 1
        clearInterval(interval)
        return prev
      })
    }, 350)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="jayashu-container">
      {NAME.split("").map((char, index) => (
        <span
          key={index}
          className={`jayashu-letter ${
            index < visibleCount ? "show" : ""
          }`}
        >
          {char}
        </span>
      ))}
    </div>
  )
}

export default Jayashu
