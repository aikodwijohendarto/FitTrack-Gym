import PageBanner from '../components/PageBanner'
import PlanCard from '../components/PlanCard'
import FaqList from '../components/FaqList'
import { plans } from '../data/plans'

const faqs = [
  { q: 'How do I sign up?', a: 'Contact the club by phone, email or WhatsApp. This website does not process sign-ups or payments.' },
  { q: 'Can I upgrade my plan later?', a: 'Upgrade options are to be confirmed by the club.' },
  { q: 'Is there a trial visit?', a: 'Trial policy is to be confirmed. Ask the club for current offers.' },
]

function MembershipPage() {
  return (
    <>
      <PageBanner label="Membership" title="Choose your plan">
        Four sample packages to compare. Prices and benefits are editable placeholders.
      </PageBanner>

      <section className="section" aria-labelledby="plans-title">
        <div className="container">
          <h2 id="plans-title" className="visually-hidden">Membership packages</h2>
          <div className="row g-4 pt-3">
            {plans.map((plan) => (
              <div className="col-md-6 col-lg-3" key={plan.name}><PlanCard plan={plan} /></div>
            ))}
          </div>
          <p className="sample-note mt-4">Informational only. Memberships cannot be purchased on this website; use the Contact page to enquire.</p>
        </div>
      </section>

      <section className="section section--alt faq" aria-labelledby="faq-title">
        <div className="container">
          <div className="section-head"><span className="section-label">FAQ</span><h2 id="faq-title">Membership questions</h2><hr className="section-rule" /></div>
          <FaqList items={faqs} />
        </div>
      </section>
    </>
  )
}

export default MembershipPage
