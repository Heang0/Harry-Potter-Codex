import { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import DarkModeToggle from './DarkModeToggle';
import hogwartsLogo from '../assets/Hogwarts.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const searchRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsSearchOpen(false);
    setQuery('');
  }, [location.pathname]);

  // Close search when clicking outside
  useEffect(() => {
    const onClick = (e) => {
      if (!isSearchOpen) return;
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setIsSearchOpen(false);
      }
    };
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [isSearchOpen]);

  const navItems = useMemo(
    () => [
      { name: 'Home', path: '/' },
      { name: 'Characters', path: '/characters' },
      { name: 'Houses', path: '/houses' },
      { name: 'Spells', path: '/spells' },
      { name: 'Courses', path: '/courses' },
      { name: 'Timeline', path: '/timeline' },
      { name: 'About', path: '/about' },
    ],
    []
  );

  const isActive = (path) => location.pathname === path;

  const submitSearch = (e) => {
    e?.preventDefault?.();
    const term = query.trim();
    navigate(`/characters${term ? `?search=${encodeURIComponent(term)}` : ''}`);
    setIsSearchOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md border-b shadow-lg'
          : 'bg-transparent'
      }`}
      style={{
        background: isScrolled ? 'var(--panel-strong)' : 'transparent',
        borderColor: 'var(--border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <img
              src={hogwartsLogo}
              alt="Hogwarts crest"
              className="h-10 w-10 rounded-full object-contain"
              loading="lazy"
            />
            <div>
              <h1 className="text-xl font-bold group-hover:text-gold transition-colors duration-300">
                Harry Potter
              </h1>
              <p className="text-xs mt-1 hidden md:block" style={{ color: 'var(--muted-2)' }}>
                Wizarding World Guide
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative font-medium text-sm uppercase tracking-[0.1em] transition-colors duration-300 ${
                  isActive(item.path) ? 'text-gold' : ''
                }`}
                style={{ color: isActive(item.path) ? undefined : 'var(--muted)' }}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gold rounded-full"></span>
                )}
              </Link>
            ))}

            {/* Search (desktop) */}
            <div className="relative" ref={searchRef}>
              <button
                type="button"
                onClick={() => setIsSearchOpen((v) => !v)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.12em]
                           border transition-all duration-300"
                style={{
                  background: 'var(--panel-strong)',
                  borderColor: 'var(--border)',
                  color: 'var(--muted)',
                }}
                aria-label="Search characters"
              >
                <Search className="w-4 h-4" />
                <span className="hidden lg:inline">Search</span>
              </button>

              {isSearchOpen && (
                <form
                  onSubmit={submitSearch}
                  className="absolute right-0 mt-3 w-[min(420px,80vw)] rounded-2xl p-3 shadow-2xl"
                  style={{ background: 'var(--panel-strong)', border: '1px solid var(--border)' }}
                >
                  <div className="flex items-center gap-2">
                    <input
                      autoFocus
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="Search characters (e.g., Hermione)"
                      className="w-full px-4 py-3 rounded-xl outline-none"
                      style={{
                        background: 'rgba(0,0,0,0.15)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                    />
                    <button className="btn-primary px-5 py-3" type="submit">
                      Go
                    </button>
                  </div>
                  <p className="mt-2 text-xs" style={{ color: 'var(--muted-2)' }}>
                    Tip: press Enter to search.
                  </p>
                </form>
              )}
            </div>

            <DarkModeToggle />
          </nav>

          {/* Mobile controls */}
          <div className="flex items-center space-x-2 md:hidden">
            <button
              type="button"
              className="p-2 rounded-lg transition-colors"
              style={{ background: 'var(--panel-strong)', border: '1px solid var(--border)' }}
              onClick={() => setIsSearchOpen((v) => !v)}
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>

            <DarkModeToggle />

            <button
              className="p-2 rounded-lg transition-colors"
              style={{ background: 'var(--panel-strong)', border: '1px solid var(--border)' }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              type="button"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {isSearchOpen && (
          <div className="md:hidden pb-4">
            <form onSubmit={submitSearch} className="flex gap-2">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search characters..."
                className="w-full px-4 py-3 rounded-xl outline-none"
                style={{
                  background: 'var(--panel-strong)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              />
              <button className="btn-primary px-5 py-3" type="submit">
                Go
              </button>
            </form>
          </div>
        )}

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-slide-up" style={{ borderColor: 'var(--border)', background: 'var(--panel-strong)' }}>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="px-4 py-3 rounded-lg text-sm font-medium uppercase tracking-[0.1em] transition-colors"
                  style={{
                    color: isActive(item.path) ? '#c4a867' : 'var(--muted)',
                    background: isActive(item.path) ? 'rgba(196,168,103,0.10)' : 'transparent',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
