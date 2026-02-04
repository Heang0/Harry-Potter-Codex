const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="relative">
        {/* Outer circle */}
        <div className="w-24 h-24 border-4 border-gold/30 rounded-full animate-spin"></div>
        
        {/* Inner circle */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 border-4 border-gold rounded-full animate-spin-slow"></div>
        
        {/* Center text */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
          <div className="text-gold font-bold text-xl mb-2">Harry Potter</div>
          <div className="text-[#f5f0e3]/70 text-sm">Loading magical knowledge...</div>
        </div>
      </div>
    </div>
  );
};

export default LoadingSpinner;