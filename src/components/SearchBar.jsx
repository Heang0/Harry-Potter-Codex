function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <input
      className="field"
      value={value}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
    />
  )
}

export default SearchBar

