import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, BookOpen, Calendar, MapPin, Phone } from 'lucide-react';
import hogwartsLogo from '../assets/Hogwarts.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 pt-12 pb-8 border-t" style={{ background: "var(--panel)", borderColor: "var(--border)" }}>
      <div className="container-max">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={hogwartsLogo}
                alt="Hogwarts crest"
                className="h-10 w-10 rounded-full object-contain"
                loading="lazy"
              />
              <div>
                <h3 className="text-2xl font-bold text-ivory">Harry Potter</h3>
                <p className="text-sm text-[color:var(--muted-2)] mt-1">The Official Wizarding Archive</p>
              </div>
            </div>
            <p className="text-[color:var(--muted)] mb-4 max-w-md">
              The definitive archive of wizarding knowledge, preserving the legacy of Hogwarts School of Witchcraft and Wizardry for generations to come.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[color:var(--muted-2)] hover:text-gold transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-[color:var(--muted-2)] hover:text-gold transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-[color:var(--muted-2)] hover:text-gold transition-colors">
                <Mail className="w-6 h-6" />
              </a>
              <a href="#" className="text-[color:var(--muted-2)] hover:text-gold transition-colors">
                <Calendar className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-ivory mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-[color:var(--muted)] hover:text-gold transition-colors flex items-center gap-2"><BookOpen className="w-4 h-4" /> Home</Link></li>
              <li><Link to="/characters" className="text-[color:var(--muted)] hover:text-gold transition-colors flex items-center gap-2"><BookOpen className="w-4 h-4" /> Characters</Link></li>
              <li><Link to="/houses" className="text-[color:var(--muted)] hover:text-gold transition-colors flex items-center gap-2"><BookOpen className="w-4 h-4" /> Houses</Link></li>
              <li><Link to="/spells" className="text-[color:var(--muted)] hover:text-gold transition-colors flex items-center gap-2"><BookOpen className="w-4 h-4" /> Spells</Link></li>
              <li><Link to="/timeline" className="text-[color:var(--muted)] hover:text-gold transition-colors flex items-center gap-2"><BookOpen className="w-4 h-4" /> Timeline</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-ivory mb-4">Contact</h4>
            <ul className="space-y-3 text-[color:var(--muted)]">
              <li className="flex items-start gap-2">
                <Mail className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>owlpost@wizarding.world</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Hogwarts Castle, Cambodia</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>+885 96 392 5127</span>
              </li>
              <li className="flex items-start gap-2">
                <Calendar className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Mon-Fri: 9AM-5PM (GMT)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="mb-8 pt-8 border-t border-[var(--border)]">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <h4 className="text-lg font-semibold text-ivory mb-2">Stay Updated</h4>
              <p className="text-[color:var(--muted)] text-sm">Subscribe to our newsletter for magical updates and new content releases.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-lg outline-none bg-[var(--panel-strong)] border border-[var(--border)] text-[var(--text)] placeholder-[color:var(--muted-2)] focus:outline-none focus:border-gold focus:ring-2 focus:ring-gold/20 w-full sm:w-64"
              />
              <button className="btn-primary px-6 py-2 whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-[var(--border)] text-center text-[color:var(--muted-2)] text-sm">
          <p>&copy; {currentYear} Harry Potter. All magical rights reserved.</p>
          <p className="mt-2">This is an unofficial fan project. Not affiliated with Warner Bros. or J.K. Rowling.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
