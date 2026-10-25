import { Link } from 'react-router-dom'
import { logo } from '../assets/images'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4 col-md-6 footer-brand">
            <img src={logo} alt="FitTrack" />
            <p>FitTrack Fitness Club is a sample gym profile for beginners and experienced lifters. All details shown are editable placeholders.</p>
          </div>
          <div className="col-lg-2 col-md-6">
            <h2>Navigate</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/facilities">Facilities</Link></li>
              <li><Link to="/membership">Membership</Link></li>
              <li><Link to="/members">Members</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h2>Contact</h2>
            <ul>
              <li>Jl. Contoh Raya No. 1, Kota Contoh (sample)</li>
              <li><a href="tel:+6281234567890">+62 812-3456-7890</a> (sample)</li>
              <li><a href="mailto:info@example.com">info@example.com</a> (sample)</li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-6">
            <h2>Opening Hours</h2>
            <ul>
              <li>Mon - Fri: 05:00 - 22:00</li>
              <li>Saturday: 07:00 - 20:00</li>
              <li>Sunday: 08:00 - 18:00</li>
            </ul>
            <h2 style={{ marginTop: '1rem' }}>Follow</h2>
            <ul>
              <li>
                <a href="https://www.instagram.com/" rel="noopener">Instagram</a> &middot;{' '}
                <a href="https://www.facebook.com/" rel="noopener">Facebook</a> &middot;{' '}
                <a href="https://www.youtube.com/" rel="noopener">YouTube</a>
              </li>
            </ul>
          </div>
        </div>
        <p className="copyright">&copy; 2026 FitTrack Fitness Club. Sample website for a university assignment.</p>
      </div>
    </footer>
  )
}

export default Footer
