const MagicalLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-ink">
      <div className="text-center">
        {/* Animated Hogwarts crest */}
        <div className="relative w-32 h-32 mx-auto mb-8">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-24 h-24 bg-gold rounded-full flex items-center justify-center">
              <span className="text-4xl font-bold text-ink">HP</span>
            </div>
          </div>
          
          {/* Rotating magical elements */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-ping"></div>
          <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber rounded-full animate-bounce" style={{ animationDelay: '0.5s' }}></div>
          <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-deep-blue rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-crimson rounded-full animate-ping" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        <h2 className="text-3xl font-bold text-ivory mb-4">Harry Potter</h2>
        <p className="text-[#f5f0e3]/70 mb-6">Loading magical knowledge...</p>
        
        {/* Loading bar */}
        <div className="w-64 h-2 bg-[var(--panel)] rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gold rounded-full animate-pulse" style={{ width: '60%' }}></div>
        </div>
        
        {/* Magical particles */}
        <div className="mt-8 flex justify-center space-x-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gold rounded-full animate-bounce" style={{ animationDelay: `${i * 0.2}s` }}></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagicalLoading;