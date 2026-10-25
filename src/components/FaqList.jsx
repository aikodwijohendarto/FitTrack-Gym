function FaqList({ items }) {
  return (
    <>
      {items.map((item) => (
        <details key={item.q}>
          <summary>{item.q}</summary>
          <p>{item.a}</p>
        </details>
      ))}
    </>
  )
}

export default FaqList
