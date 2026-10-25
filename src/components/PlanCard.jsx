import { Link } from 'react-router-dom'

// variant "home" = compact card with "per month"; variant "full" = membership page card.
function PlanCard({ plan, variant = 'full' }) {
  const isHome = variant === 'home'
  const Heading = isHome ? 'h3' : 'h2'
  const buttonClass = plan.featured ? 'btn-fit btn-fit--primary' : 'btn-fit btn-fit--outline'

  return (
    <article className={plan.featured ? 'plan plan--featured' : 'plan'}>
      {plan.featured && <span className="plan__badge">Recommended</span>}
      <Heading style={isHome ? undefined : { fontSize: '1.6rem' }}>{plan.name}</Heading>
      <p className="plan__price">{plan.price}</p>
      <p className="plan__duration">{isHome ? plan.short : plan.duration}</p>
      <ul className="check-list">
        {plan.features.map((feature) => <li key={feature}>{feature}</li>)}
      </ul>
      <Link className={buttonClass} to="/contact">
        {isHome ? `Ask About ${plan.name}` : 'Contact Us'}
      </Link>
    </article>
  )
}

export default PlanCard
