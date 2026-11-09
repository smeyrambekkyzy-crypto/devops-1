export default function Card({ title, company, period, description, tags = [] }) {
  return (
    <article className="card">
      <div className="card__header">
        <div>
          <h3>{title}</h3>
          <p className="card__company">{company}</p>
        </div>
        <span className="card__period">{period}</span>
      </div>

      <p className="card__description">{description}</p>

      <ul className="card__tags">
        {tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    </article>
  )
}
