import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useMemo, useState } from 'react';

const HeroBanner = ({ title, subtitle, cta1, cta2, imageUrl }) => {
  const fallbackUrl = useMemo(
    () => 'https://placehold.co/1600x900?text=Hogwarts+Codex+Hero',
    []
  );
  const [bgSrc, setBgSrc] = useState(imageUrl || fallbackUrl);
  return (
    <div
      className="hero-on-image relative overflow-hidden rounded-3xl border border-gold/20 bg-[var(--panel-strong)] shadow-2xl"
      style={{
        backgroundImage: `url('${bgSrc}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background image */}
      {bgSrc && (
        <img
          src={bgSrc}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-[center_30%] opacity-75"
          loading="lazy"
          onError={() => setBgSrc(fallbackUrl)}
        />
      )}

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/75" />

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
        <div className="px-4 py-12 sm:px-8 sm:py-18 md:px-12 md:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="headline mb-4">{title}</h1>
            <p className="lead max-w-3xl mx-auto">{subtitle}</p>
            
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 mt-10">
              {cta1 && (
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  {cta1.href ? (
                    <Link className={cta1.className} to={cta1.href}>
                      {cta1.text}
                    </Link>
                  ) : (
                    <button className={cta1.className} type="button">
                      {cta1.text}
                    </button>
                  )}
                </motion.div>
              )}
              {cta2 && (
                <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
                  {cta2.href ? (
                    <Link className={cta2.className} to={cta2.href}>
                      {cta2.text}
                    </Link>
                  ) : (
                    <button className={cta2.className} type="button">
                      {cta2.text}
                    </button>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
