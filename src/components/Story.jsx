import { useEffect } from "react";
import "../styles/heroSection.css";
import "../styles/celebrate.css";
import "../styles/story.css";
import Jayashu from "./Jayashu";
import confetti from "canvas-confetti";

const Story = () => {
  useEffect(() => {
    const duration = 2500;
    const end = Date.now() + duration;

    const interval = setInterval(() => {
      if (Date.now() > end) {
        clearInterval(interval);
        return;
      }

      const conf = document.createElement("span");
      conf.className = "confetti";
      conf.style.left = Math.random() * 150 + "vw";
      conf.style.backgroundColor = ["#ff9ecf", "#6aa9ff", "#ffd86a", "#a6ffcb"][
        Math.floor(Math.random() * 4)
      ];
      conf.style.animationDuration = 4 + Math.random() * 4 + "s";

      document.body.appendChild(conf);
      setTimeout(() => conf.remove(), 4000);
    }, 120);

    return () => clearInterval(interval);
  }, []);

  const celebrate = () => {
    confetti({
      particleCount: 180,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#ff9ecf", "#6aa9ff", "#ffd86a", "#a6ffcb"],
    });
  };
  return (
    <section className="hero-section">
      <h1>
        Together again,
        <br />
        no misunderstandings, only us
      </h1>

      <Jayashu />
      <button className="celebrate-btn" onClick={celebrate}>
        Celebrate Us 🎉
      </button>
    </section>
  );
};

export default Story;
