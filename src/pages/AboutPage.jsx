import { Link } from 'react-router-dom'
import PageBanner from '../components/PageBanner'
import { gymEquipment, trainingPhilosophy } from '../assets/images'

const values = [
  { title: 'Discipline', text: 'Showing up and doing the work, even on slow days.' },
  { title: 'Respect', text: 'Every member belongs, at every level.' },
  { title: 'Safety', text: 'Good form and sensible progression come first.' },
  { title: 'Community', text: 'Training is easier when people support each other.' },
]

const reasons = [
  'Separate zones for strength, cardio and functional work',
  'Plans for different budgets and goals',
  'Beginner-friendly atmosphere',
  'Clean changing and shower facilities',
]

function AboutPage() {
  return (
    <>
      <PageBanner label="About Us" title="Built for progress">
        Who we are, what we believe in and how we approach training at FitTrack Fitness Club.
      </PageBanner>

      <section className="section" aria-labelledby="who-title">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <span className="section-label">Who we are</span>
              <h2 id="who-title">A modern, welcoming fitness club</h2>
              <hr className="section-rule" />
              <p>FitTrack Fitness Club is a gym concept for people who want a professional training space without intimidation. We combine strength, cardio and functional areas with clear guidance for every level.</p>
              <h3>History and background</h3>
              <p>FitTrack started as an idea to make structured training approachable. This background is sample text and should be replaced with the real story of the gym.</p>
            </div>
            <div className="col-lg-6"><figure className="media-frame m-0"><img src={gymEquipment} alt="Equipment on the FitTrack training floor (placeholder image)" /></figure></div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="mission-title">
        <div className="container">
          <div className="row g-4">
            <div className="col-md-6"><article className="card-fit card-fit--plain"><span className="section-label">Mission</span><h2 id="mission-title">Make training sustainable</h2><p>Give every member the space, equipment and guidance to build a lasting fitness habit.</p></article></div>
            <div className="col-md-6"><article className="card-fit card-fit--plain"><span className="section-label">Vision</span><h2>A healthier community</h2><p>Be the local club where people of all backgrounds feel confident training.</p></article></div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <div className="section-head"><span className="section-label">Core values</span><h2 id="values-title">What drives us</h2><hr className="section-rule" /></div>
          <div className="row g-4">
            {values.map((v) => (
              <div className="col-md-6 col-lg-3" key={v.title}><div className="highlight"><h3>{v.title}</h3><p>{v.text}</p></div></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="philosophy-title">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 order-lg-2">
              <span className="section-label">Training philosophy</span>
              <h2 id="philosophy-title">Progress over perfection</h2>
              <hr className="section-rule" />
              <p>We favor gradual overload, balanced programs and recovery. The goal is steady improvement you can maintain for years.</p>
              <h3>Who it is for</h3>
              <p>Beginners, returning lifters, casual exercisers and experienced gym-goers.</p>
            </div>
            <div className="col-lg-6 order-lg-1"><figure className="media-frame m-0"><img src={trainingPhilosophy} alt="A trainer coaching a member during a squat in a modern gym" /></figure></div>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head"><span className="section-label">Why choose us</span><h2 id="why-title">Reasons to join</h2><hr className="section-rule" /></div>
          <ul className="check-list">{reasons.map((r) => <li key={r}>{r}</li>)}</ul>
          <div className="contact-actions mt-4">
            <Link className="btn-fit btn-fit--primary" to="/membership">View Membership</Link>
            <Link className="btn-fit btn-fit--outline" to="/facilities">See Facilities</Link>
          </div>
          <p className="sample-note">All business information on this page is editable sample content, not verified fact.</p>
        </div>
      </section>
    </>
  )
}

export default AboutPage
