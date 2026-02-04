import { Link, useLocation } from 'react-router-dom';

const NavigationBar = () => {
  const location = useLocation();
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Characters', path: '/characters' },
    { name: 'Houses', path: '/houses' },
    { name: 'Spells', path: '/spells' },
    { name: 'Courses', path: '/courses' },
    { name: 'Timeline', path: '/timeline' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="mb-8">
      <div className="flex flex-wrap justify-center gap-2">
        {navItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              isActive(item.path)
                ? 'bg-gold text-ink shadow-lg'
                : 'bg-[var(--panel)] text-[#f5f0e3]/70 hover:text-ivory hover:bg-[#1a1f2e]/50'
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default NavigationBar;