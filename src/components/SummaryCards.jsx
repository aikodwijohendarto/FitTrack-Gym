// Statistics derived from the members array received through props.
function SummaryCards({ members }) {
  const total = members.length
  const active = members.filter((m) => m.status === 'Aktif').length
  const inactive = total - active

  const counts = members.reduce((acc, m) => {
    acc[m.membershipPlan] = (acc[m.membershipPlan] || 0) + 1
    return acc
  }, {})
  const popular = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]

  const cards = [
    { label: 'Total Member', value: total },
    { label: 'Member Aktif', value: active },
    { label: 'Member Nonaktif', value: inactive },
    { label: 'Paket Terpopuler', value: popular ? popular[0] : '-' },
  ]

  return (
    <div className="summary-grid" aria-label="Ringkasan member">
      {cards.map((card) => (
        <div className="summary-card" key={card.label}>
          <strong>{card.value}</strong>
          <span>{card.label}</span>
        </div>
      ))}
    </div>
  )
}

export default SummaryCards
