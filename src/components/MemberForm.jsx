import { useState } from 'react'
import { planNames, statusOptions } from '../data/plans'

function todayIso() {
  const now = new Date()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const day = String(now.getDate()).padStart(2, '0')
  return `${now.getFullYear()}-${month}-${day}`
}

const emptyForm = () => ({ name: '', membershipPlan: '', startDate: todayIso(), status: 'Aktif' })

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Nama member wajib diisi.'
  else if (values.name.trim().length < 3) errors.name = 'Nama minimal 3 karakter.'
  if (!values.membershipPlan) errors.membershipPlan = 'Pilih paket membership.'
  if (!values.startDate) errors.startDate = 'Tanggal mulai wajib diisi.'
  if (!values.status) errors.status = 'Pilih status member.'
  return errors
}

function MemberForm({ onAddMember }) {
  const [values, setValues] = useState(emptyForm)
  const [errors, setErrors] = useState({})
  const [message, setMessage] = useState('')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    setMessage('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const found = validate(values)
    if (Object.keys(found).length > 0) {
      setErrors(found)
      setMessage('')
      return
    }
    onAddMember({ ...values, name: values.name.trim() })
    setMessage(`Member ${values.name.trim()} berhasil ditambahkan.`)
    setValues(emptyForm())
    setErrors({})
  }

  return (
    <form className="member-form" onSubmit={handleSubmit} noValidate>
      <h2>Tambah Member</h2>
      <hr className="section-rule" />

      <div className="fit-field">
        <label htmlFor="name">Nama Member</label>
        <input
          id="name" name="name" type="text" className="fit-input"
          placeholder="Contoh: Rina Kartika"
          value={values.name} onChange={handleChange}
          aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'name-error' : undefined}
        />
        {errors.name && <p className="fit-error" id="name-error">{errors.name}</p>}
      </div>

      <div className="fit-field">
        <label htmlFor="membershipPlan">Paket Membership</label>
        <select
          id="membershipPlan" name="membershipPlan" className="fit-input"
          value={values.membershipPlan} onChange={handleChange}
          aria-invalid={Boolean(errors.membershipPlan)}
          aria-describedby={errors.membershipPlan ? 'plan-error' : undefined}
        >
          <option value="">Pilih paket</option>
          {planNames.map((plan) => <option key={plan} value={plan}>{plan}</option>)}
        </select>
        {errors.membershipPlan && <p className="fit-error" id="plan-error">{errors.membershipPlan}</p>}
      </div>

      <div className="fit-field">
        <label htmlFor="startDate">Tanggal Mulai</label>
        <input
          id="startDate" name="startDate" type="date" className="fit-input"
          value={values.startDate} onChange={handleChange}
          aria-invalid={Boolean(errors.startDate)}
          aria-describedby={errors.startDate ? 'date-error' : undefined}
        />
        {errors.startDate && <p className="fit-error" id="date-error">{errors.startDate}</p>}
      </div>

      <div className="fit-field">
        <label htmlFor="status">Status</label>
        <select
          id="status" name="status" className="fit-input"
          value={values.status} onChange={handleChange}
          aria-invalid={Boolean(errors.status)}
          aria-describedby={errors.status ? 'status-error' : undefined}
        >
          {statusOptions.map((status) => <option key={status} value={status}>{status}</option>)}
        </select>
        {errors.status && <p className="fit-error" id="status-error">{errors.status}</p>}
      </div>

      <button type="submit" className="btn-fit btn-fit--primary member-form__submit">
        Tambah Member
      </button>
      {message && <p className="fit-success" role="status">{message}</p>}
    </form>
  )
}

export default MemberForm
