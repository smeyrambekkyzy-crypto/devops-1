import { footer } from '../data/siteContent'

export default function Footer() {
  return (
    <footer className="site-footer">
      <p>{footer.text}</p>
      <nav className="footer__nav" aria-label="Соцсети">
        {footer.links.map((link) => (
          <a key={link} href="#" className="footer__link">
            {link}
          </a>
        ))}
      </nav>
    </footer>
  )
}
