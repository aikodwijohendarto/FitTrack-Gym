import PageBanner from '../components/PageBanner'
import SummaryCards from '../components/SummaryCards'
import MemberForm from '../components/MemberForm'
import MemberList from '../components/MemberList'

function MembersPage({ members, onAddMember, onDeleteMember }) {
  return (
    <>
      <PageBanner label="Members" title="Member management">
        Daftarkan member baru dan pantau status keanggotaan FitTrack Fitness Club.
      </PageBanner>

      <section className="section">
        <div className="container">
          <SummaryCards members={members} />
          <div className="row g-5 members-layout">
            <div className="col-lg-4">
              <MemberForm onAddMember={onAddMember} />
            </div>
            <div className="col-lg-8">
              <MemberList members={members} onDeleteMember={onDeleteMember} />
            </div>
          </div>
          <p className="sample-note mt-4">
            Data member disimpan di state React saja (belum ada backend), sehingga kembali ke data contoh saat halaman dimuat ulang.
          </p>
        </div>
      </section>
    </>
  )
}

export default MembersPage
