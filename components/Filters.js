export default function Filters({ setCategory }) {
  return (
    <aside className="filters">
      <h2>Filters</h2>

      <button onClick={() => setCategory('all')}>All</button>
      <button onClick={() => setCategory("men's clothing")}>Men</button>
      <button onClick={() => setCategory("women's clothing")}>Women</button>
      <button onClick={() => setCategory("electronics")}>Electronics</button>
    </aside>
  )
}