import { motion } from 'framer-motion';

const HeroSection = ({ children, className = "" }) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating magical particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 bg-amber rounded-full animate-bounce opacity-50" style={{ animationDelay: '0.5s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-3 h-3 bg-deep-blue rounded-full animate-ping opacity-40" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 right-1/4 w-2.5 h-2.5 bg-crimson rounded-full animate-pulse opacity-50" style={{ animationDelay: '1.5s' }}></div>
        
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-ink/30 to-transparent"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default HeroSection;