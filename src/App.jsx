import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Movies from './pages/Movies.jsx';
import Characters from './pages/Characters.jsx';
import CharacterDetail from './pages/CharacterDetail.jsx';
import Houses from './pages/Houses.jsx';
import Spells from './pages/Spells.jsx';
import Courses from './pages/Courses.jsx';
import MapPage from './pages/Map.jsx';
import Timeline from './pages/Timeline.jsx';
import SortingHat from './pages/SortingHat.jsx';
import Quiz from './pages/Quiz.jsx';
import Secrets from './pages/Secrets.jsx';
import About from './pages/About.jsx';
import NotFound from './pages/NotFound.jsx';
import PageLayout from './components/PageLayout.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <ScrollToTop />
      <Header />
      <main className="relative overflow-hidden page-top">
        {/* Enhanced background with subtle animation */}
        <div className="pointer-events-none absolute inset-0 opacity-30">
          <div className="h-full w-full bg-aurora animate-pulse-gold" />
          <div className="grain absolute inset-0" />
        </div>

        {/* Main content container with professional padding */}
        <div className="relative z-10 page-content">
          <Routes>
            <Route element={<PageLayout />}>
              <Route path="/" element={<Home />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/characters" element={<Characters />} />
              <Route path="/characters/:id" element={<CharacterDetail />} />
              <Route path="/houses" element={<Houses />} />
              <Route path="/spells" element={<Spells />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/map" element={<MapPage />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/sorting-hat" element={<SortingHat />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/secrets" element={<Secrets />} />
              <Route path="/about" element={<About />} />
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
