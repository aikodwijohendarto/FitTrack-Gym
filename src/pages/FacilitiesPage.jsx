import PageBanner from '../components/PageBanner'
import FaqList from '../components/FaqList'
import {
  strength, freeWeights, cardio, functional, lockers, showers, stretching, gymInterior,
} from '../assets/images'

const areas = [
  { label: 'Strength', title: 'Strength training equipment', text: 'Selectorized machines and power racks that support controlled, progressive strength work.', img: strength, alt: 'Strength training equipment (placeholder image)' },
  { label: 'Free weights', title: 'Free weights', text: 'Dumbbells, barbells, plates and benches for compound and isolation lifts.', img: freeWeights, alt: 'Free weights area (placeholder image)' },
  { label: 'Cardio', title: 'Cardio machines', text: 'Treadmills, bikes and rowers for warm-ups, intervals and steady endurance training.', img: cardio, alt: 'Cardio machines (placeholder image)' },
  { label: 'Functional', title: 'Functional training area', text: 'Open floor space for circuits, bodyweight movements, mobility drills and group classes.', img: functional, alt: 'Functional training area (placeholder image)' },
]

const amenities = [
  { title: 'Locker rooms', text: 'Secure space to store your belongings while you train.' },
  { title: 'Shower facilities', text: 'Clean showers to freshen up before heading out.' },
  { title: 'Stretching area', text: 'A dedicated spot for cooldowns and mobility work.' },
]

const gallery = [
  { img: strength, alt: 'Strength training machines (placeholder image)', caption: 'Strength machines' },
  { img: freeWeights, alt: 'Free weights area (placeholder image)', caption: 'Free weights' },
  { img: cardio, alt: 'Cardio machines (placeholder image)', caption: 'Cardio zone' },
  { img: functional, alt: 'Functional training area (placeholder image)', caption: 'Functional area' },
  { img: lockers, alt: 'Locker room (placeholder image)', caption: 'Locker room' },
  { img: showers, alt: 'Shower facilities (placeholder image)', caption: 'Showers' },
  { img: stretching, alt: 'Stretching area (placeholder image)', caption: 'Stretching area' },
  { img: gymInterior, alt: 'Main gym floor (placeholder image)', caption: 'Main floor' },
]

const faqs = [
  { q: 'Is the gym suitable for beginners?', a: 'Our training options are designed to accommodate people with different experience levels.' },
  { q: 'Are lockers and showers available?', a: 'Yes. Locker rooms and shower facilities are part of the club (sample information).' },
  { q: 'Can I bring a friend?', a: 'Guest policy is to be confirmed. Please contact the club for current details.' },
  { q: 'Do I need my own equipment?', a: 'No. Standard equipment is provided. Bring a towel and water bottle.' },
]

function FacilitiesPage() {
  return (
    <>
      <PageBanner label="Facilities" title="Space to train">
        Equipment and amenities designed for strength, endurance, mobility and recovery.
      </PageBanner>

      <section className="section" aria-label="Training areas">
        <div className="container">
          {areas.map((a, i) => {
            const flipped = i % 2 === 1
            return (
              <div className="row align-items-center g-5 facility-row" key={a.title}>
                <div className={flipped ? 'col-lg-6 order-lg-2' : 'col-lg-6'}>
                  <span className="section-label">{a.label}</span><h2>{a.title}</h2>
                  <hr className="section-rule" /><p>{a.text}</p>
                </div>
                <div className={flipped ? 'col-lg-6 order-lg-1' : 'col-lg-6'}>
                  <figure className="media-frame m-0"><img src={a.img} alt={a.alt} /></figure>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="amenities-title">
        <div className="container">
          <div className="section-head"><span className="section-label">Amenities</span><h2 id="amenities-title">Comfort and recovery</h2><hr className="section-rule" /></div>
          <div className="row g-4">
            {amenities.map((a) => (
              <div className="col-md-4" key={a.title}><article className="card-fit card-fit--plain"><h3>{a.title}</h3><p>{a.text}</p></article></div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="gallery-title">
        <div className="container">
          <div className="section-head">
            <span className="section-label">Gallery</span><h2 id="gallery-title">Take a look inside</h2><hr className="section-rule" />
            <p>Select an image to open the full-size file. Placeholder images; replace with real photos.</p>
          </div>
          <div className="gallery">
            {gallery.map((g) => (
              <figure key={g.caption}>
                <a href={g.img}><img src={g.img} alt={g.alt} /></a>
                <figcaption>{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-head"><span className="section-label">FAQ</span><h2 id="faq-title">Common questions</h2><hr className="section-rule" /></div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  )
}

export default FacilitiesPage
