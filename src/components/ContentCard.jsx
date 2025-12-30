import "../styles/Contentcard.css";
const ContentCard = ({ title, children }) => {
  return (
    <div className="content-card">
      <h2>{title}</h2>
      <div className="card-body">
        {children}
      </div>
    </div>
  )
}

export default ContentCard
