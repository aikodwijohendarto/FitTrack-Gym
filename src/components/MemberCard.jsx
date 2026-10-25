function formatDate(isoDate) {
  const date = new Date(`${isoDate}T00:00:00`)
  if (Number.isNaN(date.getTime())) return isoDate
  return date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })
}

function MemberCard({ member, onDelete }) {
  const isActive = member.status === 'Aktif'

  return (
    <li className="member-card">
      <div className="member-card__avatar" aria-hidden="true">
        {member.name.charAt(0).toUpperCase()}
      </div>
      <div className="member-card__info">
        <h3>{member.name}</h3>
        <p className="member-card__meta">
          Paket <strong>{member.membershipPlan}</strong> &middot; Mulai {formatDate(member.startDate)}
        </p>
      </div>
      <span className={isActive ? 'badge-status badge-status--active' : 'badge-status'}>
        {member.status}
      </span>
      <button
        type="button"
        className="member-card__delete"
        onClick={() => onDelete(member.id)}
        aria-label={`Hapus member ${member.name}`}
      >
        Hapus
      </button>
    </li>
  )
}

export default MemberCard
