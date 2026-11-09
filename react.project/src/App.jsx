import './App.css'
import Card from './components/card'

const profileImage = 'https://cover.imglib.info/uploads/cover/namjuneun-jeongjunghi-sayanghagessseubnida/cover/58a4b130-a9ba-4111-8af3-d04f25005a9a.jpg'

const experience = [
  {
    title: 'Студент ',
    company: 'Программирование',
    period: '2023 — 2027',
    description: 'Учусь программировать, изучаю веб-разработку и создаю простые проекты на React.',
    tags: ['React', 'Git', 'HTML', 'CSS', 'JavaScript'],
  },
]

const skills = ['React', 'Git', 'HTML', 'CSS', 'JavaScript', 'Figma']

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <div className="hero__photo-wrap">
          <img src={profileImage} alt="Фото студента" className="hero__photo" />
        </div>

        <div className="hero__text">
          <p className="eyebrow">ОБО МНЕ</p>
          <h1>Я студент</h1>
          

          

          <ul className="profile__list">
            <li>Учусь: 4 курс</li>
            <li>Направление: программирование</li>
          </ul>
        </div>
      </header>

      <main className="content">
        <section className="section" id="experience">
          <h2>Опыт</h2>
          <div className="cards">
            {experience.map((item) => (
              <Card key={item.title} {...item} />
            ))}
          </div>
        </section>

        <section className="section section--grid">
          <div>
            <h2>Образование</h2>
            <div className="info-box">
              <p className="info-box__label">2023 — 2027</p>
              <h3>Программное обеспечение</h3>
            </div>
          </div>

          <div>
            <h2>Навыки</h2>
            <div className="tags">
              {skills.map((skill) => (
                <span key={skill} className="tag">{skill}</span>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}