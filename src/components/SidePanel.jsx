function SidePanel({ isOpen, onClose, title, children }) {
  return (
    <div
      className={`fixed right-0 top-0 z-40 h-full w-full max-w-md transform overflow-y-auto border-l border-[#c4a867]/30 bg-[#0f121b] p-6 text-ivory shadow-2xl transition duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button className="text-xs uppercase tracking-widest text-gold" onClick={onClose}>
        Close
      </button>
      {title && <h3 className="mt-4 text-2xl text-gold">{title}</h3>}
      <div className="mt-4 space-y-3 text-sm text-[#f5f0e3]/80">{children}</div>
    </div>
  )
}

export default SidePanel

