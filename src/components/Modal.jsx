function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-10">
      <div className="relative w-full max-w-2xl max-h-[80vh] overflow-y-auto rounded-2xl border border-[#c4a867]/30 bg-[#0f121b] p-6 text-ivory shadow-2xl">
        <button
          className="absolute right-4 top-4 text-sm uppercase tracking-widest text-gold"
          onClick={onClose}
        >
          Close
        </button>
        {title && <h3 className="mb-4 text-2xl text-gold">{title}</h3>}
        <div className="space-y-3 text-sm text-[#f5f0e3]/80">{children}</div>
      </div>
    </div>
  )
}

export default Modal

