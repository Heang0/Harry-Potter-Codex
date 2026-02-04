function Badge({ children, tone = 'gold' }) {
  const toneClass = tone === 'dark' ? 'border-red-400/40 text-red-300' : 'border-[#c4a867]/40 text-gold'
  return (
    <span className={`badge inline-flex items-center rounded-full px-3 py-1 text-xs uppercase tracking-[0.2em] ${toneClass}`}>
      {children}
    </span>
  )
}

export default Badge

