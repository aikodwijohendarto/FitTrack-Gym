function PageBanner({ label, title, children }) {
  return (
    <section className="page-banner">
      <div className="container">
        <span className="section-label">{label}</span>
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </section>
  )
}

export default PageBanner
