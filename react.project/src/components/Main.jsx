import Card from './card'
import { about, services, portfolio } from '../data/siteContent'

export default function Main() {
  return (
    <main className="content">
      <section className="section" id="about">
        <h2>{about.title}</h2>
        <div className="about-box">
          <p>{about.text}</p>
        </div>
      </section>

      <section className="section" id="services">
        <h2>Услуги</h2>
        <div className="cards">
          {services.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>

      <section className="section" id="portfolio">
        <h2>Портфолио</h2>
        <div className="cards cards--compact">
          {portfolio.map((item) => (
            <Card key={item.title} {...item} />
          ))}
        </div>
      </section>
    </main>
  )
}
