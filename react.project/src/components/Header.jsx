import { site } from '../data/siteContent'

export default function Header() {
  return (
    <header className="hero">
      <div className="hero__brand-block">
        <div className="brand-box">{site.brand}</div>
      </div>

      <nav className="top-nav" aria-label="Основная навигация">
        {site.nav.map((item) => (
          <a key={item} href="#" className="top-nav__link">
            {item}
          </a>
        ))}
      </nav>

      <div className="hero__content">
        <p className="eyebrow">{site.hero.eyebrow}</p>
        <h1>{site.hero.title}</h1>
        <p className="hero__text">{site.hero.text}</p>
        <div className="hero__actions">
          <button type="button" className="primary-btn">Подробнее</button>
          <button type="button" className="secondary-btn">Связаться</button>
        </div>
      </div>
    </header>
  )
}
