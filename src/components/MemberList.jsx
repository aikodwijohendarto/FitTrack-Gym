import MemberCard from './MemberCard'

function MemberList({ members, onDeleteMember }) {
  return (
    <section aria-labelledby="member-list-title">
      <div className="member-list__head">
        <h2 id="member-list-title">Daftar Member</h2>
        <span className="member-list__count">{members.length} member</span>
      </div>

      {members.length === 0 ? (
        <div className="member-empty" role="status">
          <p>Belum ada data member</p>
        </div>
      ) : (
        <ul className="member-list">
          {members.map((member) => (
            <MemberCard key={member.id} member={member} onDelete={onDeleteMember} />
          ))}
        </ul>
      )}
    </section>
  )
}

export default MemberList
