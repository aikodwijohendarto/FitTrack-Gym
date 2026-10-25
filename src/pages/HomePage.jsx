import { Link } from 'react-router-dom'
import PlanCard from '../components/PlanCard'
import { plans } from '../data/plans'
import {
  gymInterior, strength, freeWeights, cardio, functional, trainer1, trainer2, trainer3,
} from '../assets/images'

const facilities = [
  { img: strength, alt: 'Strength training machines (placeholder image)', title: 'Strength Training', text: 'Selectorized machines and racks for building base strength.' },
  { img: freeWeights, alt: 'Free weights area (placeholder image)', title: 'Free Weights', text: 'Dumbbells, barbells and benches for compound lifts.' },
  { img: cardio, alt: 'Cardio zone with treadmills (placeholder image)', title: 'Cardio Zone', text: 'Treadmills, bikes and rowers for endurance work.' },
  { img: functional, alt: 'Functional training area (placeholder image)', title: 'Functional Training', text: 'Open turf space for circuits, mobility and bodyweight training.' },
]

const services = [
  { title: 'Strength Training', text: 'Progressive resistance training to build muscle and power.', col: 'col-md-6 col-lg-4' },
  { title: 'Cardio Training', text: 'Endurance and conditioning sessions on a range of machines.', col: 'col-md-6 col-lg-4' },
  { title: 'Functional Fitness', text: 'Movement-focused workouts for everyday strength and mobility.', col: 'col-md-6 col-lg-4' },
  { title: 'Group Fitness', text: 'Scheduled group classes led by trainers. Timetable to be confirmed.', col: 'col-md-6 col-lg-6' },
  { title: 'Personal Training', text: 'One-on-one coaching tailored to your goals and experience.', col: 'col-md-12 col-lg-6' },
]

const trainers = [
  { img: trainer1, name: 'Trainer One', role: 'Strength & Conditioning', text: 'Focuses on safe lifting technique and structured progression for new lifters.' },
  { img: trainer2, name: 'Trainer Two', role: 'Functional Fitness', text: 'Leads circuit and mobility sessions built around everyday movement.' },
  { img: trainer3, name: 'Trainer Three', role: 'Group Fitness', text: 'Runs group classes with an emphasis on energy and consistency.' },
]

const highlights = [
  { title: 'Quality equipment', text: 'Machines and free weights chosen for durability and range of use.' },
  { title: 'Varied training options', text: 'Strength, cardio, functional and group training in one place.' },
  { title: 'Supportive environment', text: 'A welcoming atmosphere for first-timers and regulars alike.' },
]

const homePlans = plans.filter((p) => p.name !== 'Annual')
const planCols = ['col-md-6 col-lg-4', 'col-md-6 col-lg-4', 'col-md-12 col-lg-4']

function SectionHead({ label, title, id, children }) {
  return (
    <div className="section-head">
      <span className="section-label">{label}</span>
      <h2 id={id}>{title}</h2>
      <hr className="section-rule" />
      {children}
    </div>
  )
}

function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <span className="section-label">FitTrack Fitness Club</span>
          <h1 id="hero-title">Stronger every day.<br /><span>Better every rep.</span></h1>
          <p className="hero-text">Train with purpose, build consistency, and achieve your fitness goals in a motivating environment designed for every fitness level.</p>
          <div className="hero-actions">
            <Link className="btn-fit btn-fit--primary" to="/facilities">Explore Our Facilities</Link>
            <Link className="btn-fit btn-fit--outline" to="/membership">View Membership Plans</Link>
          </div>
          <div className="hero-stats">
            <div className="stat"><strong>7</strong><span>Training areas</span></div>
            <div className="stat"><strong>5</strong><span>Training services</span></div>
            <div className="stat"><strong>7 days</strong><span>Open weekly</span></div>
          </div>
          <p className="sample-note">Figures above are editable sample content.</p>
        </div>
      </section>

      <section className="section" aria-labelledby="intro-title">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-label">Welcome</span>
              <h2 id="intro-title">A gym built around consistency</h2>
              <hr className="section-rule" />
              <p>FitTrack Fitness Club offers a focused training space with strength, cardio and functional areas under one roof. Whether you are stepping into a gym for the first time or following a structured program, the layout and equipment support steady progress.</p>
              <p><strong>Training philosophy:</strong> small, repeatable efforts beat occasional extremes. We encourage proper form, gradual progression and regular rest.</p>
              <ul className="check-list">
                <li>Well-maintained equipment for all levels</li>
                <li>Clear training zones and open floor space</li>
                <li>Beginner-friendly guidance</li>
              </ul>
              <Link className="btn-fit btn-fit--outline" to="/about">About FitTrack</Link>
            </div>
            <div className="col-lg-6">
              <figure className="media-frame m-0"><img src={gymInterior} alt="Main training floor of FitTrack Fitness Club (placeholder image)" /></figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="facilities-title">
        <div className="container">
          <SectionHead label="Facilities" title="Train in the right space" id="facilities-title" />
          <div className="row g-4">
            {facilities.map((f) => (
              <div className="col-md-6 col-lg-3" key={f.title}>
                <article className="card-fit">
                  <img src={f.img} alt={f.alt} />
                  <div className="card-fit__body"><h3>{f.title}</h3><p>{f.text}</p></div>
                </article>
              </div>
            ))}
          </div>
          <p className="mt-4 mb-0"><Link className="text-link" to="/facilities">See all facilities</Link></p>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="container">
          <SectionHead label="Services" title="Training services" id="services-title" />
          <div className="row g-4">
            {services.map((s, i) => (
              <div className={s.col} key={s.title}>
                <article className="card-fit card-fit--plain">
                  <span className="index">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3><p>{s.text}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="trainers-title">
        <div className="container">
          <SectionHead label="Trainers" title="Meet the team" id="trainers-title">
            <p>Sample trainer profiles. Replace with real team information.</p>
          </SectionHead>
          <div className="row g-4">
            {trainers.map((t) => (
              <div className="col-md-6 col-lg-4" key={t.name}>
                <article className="card-fit trainer">
                  <img src={t.img} alt="Trainer profile photo placeholder" />
                  <div className="card-fit__body">
                    <h3>{t.name}</h3><p className="role">{t.role}</p><p>{t.text}</p>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="plans-title">
        <div className="container">
          <SectionHead label="Membership" title="Plans at a glance" id="plans-title">
            <p>Sample prices. Final pricing to be confirmed.</p>
          </SectionHead>
          <div className="row g-4">
            {homePlans.map((plan, i) => (
              <div className={planCols[i]} key={plan.name}><PlanCard plan={plan} variant="home" /></div>
            ))}
          </div>
          <p className="mt-4 mb-0"><Link className="text-link" to="/membership">Compare all plans</Link></p>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="highlights-title">
        <div className="container">
          <SectionHead label="Why FitTrack" title="Gym highlights" id="highlights-title" />
          <div className="row g-4">
            {highlights.map((h) => (
              <div className="col-md-4" key={h.title}>
                <div className="highlight"><h3>{h.title}</h3><p>{h.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
