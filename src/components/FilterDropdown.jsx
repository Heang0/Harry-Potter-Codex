function FilterDropdown({ value, onChange, options, label }) {
  return (
    <label className="flex flex-col text-xs uppercase tracking-[0.2em]" style={{ color: 'var(--muted-2)' }}>
      {label}
      <select
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className="field mt-2"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

export default FilterDropdown

