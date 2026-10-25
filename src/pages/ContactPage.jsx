import PageBanner from '../components/PageBanner'
import FaqList from '../components/FaqList'

const faqs = [
  { q: 'Is the gym suitable for beginners?', a: 'Our training options are designed to accommodate people with different experience levels.' },
  { q: 'What should I bring?', a: 'Training clothes, indoor shoes, a towel and a water bottle.' },
]

function ContactPage() {
  return (
    <>
      <PageBanner label="Contact" title="Get in touch">
        Reach the club directly by phone, email or WhatsApp. All details below are sample placeholders.
      </PageBanner>

      <section className="section" aria-labelledby="details-title">
        <div className="container">
          <h2 id="details-title" className="visually-hidden">Contact details</h2>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6">
              <article className="contact-card">
                <h3>Visit us</h3>
                <dl>
                  <dt>Address</dt><dd>Jl. Contoh Raya No. 1, Kota Contoh (sample)</dd>
                  <dt>Phone</dt><dd><a href="tel:+6281234567890">+62 812-3456-7890</a> (sample)</dd>
                  <dt>Email</dt><dd><a href="mailto:info@example.com">info@example.com</a> (sample)</dd>
                  <dt>Social</dt>
                  <dd>
                    <a href="https://www.instagram.com/" rel="noopener">Instagram</a>,{' '}
                    <a href="https://www.facebook.com/" rel="noopener">Facebook</a>,{' '}
                    <a href="https://www.youtube.com/" rel="noopener">YouTube</a>
                  </dd>
                </dl>
              </article>
            </div>
            <div className="col-lg-4 col-md-6">
              <article className="contact-card">
                <h3>Opening hours</h3>
                <table className="hours">
                  <tbody>
                    <tr><th scope="row">Monday - Friday</th><td>05:00 - 22:00</td></tr>
                    <tr><th scope="row">Saturday</th><td>07:00 - 20:00</td></tr>
                    <tr><th scope="row">Sunday</th><td>08:00 - 18:00</td></tr>
                  </tbody>
                </table>
              </article>
            </div>
            <div className="col-lg-4">
              <article className="contact-card">
                <h3>Contact directly</h3>
                <p>Choose the option that suits you. No message is sent from this website.</p>
                <div className="contact-actions">
                  <a className="btn-fit btn-fit--primary" href="https://wa.me/6281234567890" rel="noopener">Contact via WhatsApp</a>
                  <a className="btn-fit btn-fit--outline" href="mailto:info@example.com">Email Us</a>
                  <a className="btn-fit btn-fit--outline" href="tel:+6281234567890">Call Us</a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" aria-labelledby="map-title">
        <div className="container">
          <div className="section-head"><span className="section-label">Location</span><h2 id="map-title">Find the club</h2><hr className="section-rule" /></div>
          <div className="map-placeholder">
            <p className="mb-0">Map placeholder. Add a map embed or a link to your map location once the real address is confirmed.</p>
          </div>
        </div>
      </section>

      <section className="section faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-head"><span className="section-label">FAQ</span><h2 id="faq-title">Before you visit</h2><hr className="section-rule" /></div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  )
}

export default ContactPage
