import { Link } from 'react-router-dom';
import { BookOpen, Home, Search } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-ink">
      <div className="container-max text-center max-w-2xl">
        <div className="mb-8">
          <div className="w-32 h-32 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-6xl font-bold text-gold">404</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-ivory mb-4">
            Page Not Found
          </h1>
          <p className="text-xl text-[#f5f0e3]/70 mb-8">
            The magical portal you're seeking appears to be hidden behind an invisible door.
          </p>
        </div>

        <div className="card-glow p-8 mb-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-ink rounded-lg flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-ivory mb-2">Explore the Archive</h3>
              <p className="text-[#f5f0e3]/70 mb-4">
                Discover thousands of magical entries and characters.
              </p>
              <Link to="/characters" className="btn-primary">
                Browse Characters
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ink rounded-lg flex items-center justify-center mx-auto mb-4">
                <Home className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-ivory mb-2">Return Home</h3>
              <p className="text-[#f5f0e3]/70 mb-4">
                Go back to the main entrance of our magical archive.
              </p>
              <Link to="/" className="btn-secondary">
                Home Page
              </Link>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-ink rounded-lg flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gold" />
              </div>
              <h3 className="text-xl font-bold text-ivory mb-2">Search</h3>
              <p className="text-[#f5f0e3]/70 mb-4">
                Find what you're looking for in our comprehensive database.
              </p>
              <Link to="/characters" className="btn-outline">
                Search Archive
              </Link>
            </div>
          </div>
        </div>

        <div className="text-[#f5f0e3]/50 text-sm">
          <p>© {new Date().getFullYear()} Harry Potter. All magical rights reserved.</p>
          <p className="mt-2">This is an unofficial fan project. Not affiliated with Warner Bros. or J.K. Rowling.</p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;