import { Link, NavLink } from 'react-router-dom'
import { logo } from '../assets/images'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/facilities', label: 'Facilities' },
  { to: '/membership', label: 'Membership' },
  { to: '/members', label: 'Members' },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="nav-inner" aria-label="Main navigation">
          <Link className="brand" to="/" aria-label="FitTrack Fitness Club home">
            <img src={logo} alt="FitTrack" />
          </Link>
          <ul className="nav-links">
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end={link.end}>{link.label}</NavLink>
              </li>
            ))}
            <li>
              <NavLink className="nav-cta" to="/contact">Contact Us</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
