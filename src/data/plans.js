// Membership plans shown on Home and Membership pages (content from the original site).
export const plans = [
  { name: 'Basic', price: 'Rp199K', duration: 'Monthly membership', short: 'per month',
    features: ['Standard gym access', 'Independent training'] },
  { name: 'Standard', price: 'Rp349K', duration: 'Monthly membership', short: 'per month', featured: true,
    features: ['Gym access', 'Group fitness access', 'General workout guidance'] },
  { name: 'Premium', price: 'Rp549K', duration: 'Monthly membership', short: 'per month',
    features: ['Gym access', 'Group fitness access', 'Additional training benefits'] },
  { name: 'Annual', price: 'Rp3.4M', duration: '12-month membership',
    features: ['Long-term membership', 'Standard gym access', 'Applicable package benefits'] },
]

export const planNames = plans.map((p) => p.name)
export const statusOptions = ['Aktif', 'Nonaktif']
