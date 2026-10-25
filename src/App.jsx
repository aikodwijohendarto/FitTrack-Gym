import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import FacilitiesPage from './pages/FacilitiesPage'
import MembershipPage from './pages/MembershipPage'
import ContactPage from './pages/ContactPage'
import MembersPage from './pages/MembersPage'
import { initialMembers } from './data/members'

function createId() {
  return globalThis.crypto?.randomUUID?.() ?? `m-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

function App() {
  // Member list lives here and is passed down through props.
  const [members, setMembers] = useState(initialMembers)

  const handleAddMember = (data) => {
    setMembers((prev) => [{ id: createId(), ...data }, ...prev])
  }

  const handleDeleteMember = (id) => {
    setMembers((prev) => prev.filter((member) => member.id !== id))
  }

  return (
    <>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/facilities" element={<FacilitiesPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route
            path="/members"
            element={
              <MembersPage
                members={members}
                onAddMember={handleAddMember}
                onDeleteMember={handleDeleteMember}
              />
            }
          />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App
