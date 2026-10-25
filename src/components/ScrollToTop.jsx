import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Mimics full page loads of the original multi-page site: new route starts at the top.
function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

export default ScrollToTop
