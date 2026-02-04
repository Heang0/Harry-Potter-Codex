import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Shield, Star } from 'lucide-react';
import StatsDashboard from '../components/StatsDashboard';
import HeroBanner from '../components/HeroBanner';

const Home = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Comprehensive Archive",
      description: "Over 1,000+ entries covering characters, spells, houses, and magical history.",
      color: "text-gold"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Character Database",
      description: "Detailed profiles with biographies, relationships, and magical abilities.",
      color: "text-deep-blue"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "House Information",
      description: "Complete house histories, traits, notable members, and magical traditions.",
      color: "text-crimson"
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Interactive Features",
      description: "Sorting Hat quiz, timeline explorer, and magical map navigation.",
      color: "text-emerald"
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container-max">
          <HeroBanner
            title={
              <>
                The Definitive <span className="text-gold">Hogwarts</span> Codex
              </>
            }
            subtitle="Explore the rich tapestry of wizarding history, from ancient magical artifacts to modern-day Hogwarts traditions. Our meticulously curated archive brings the magical world to life with unprecedented detail and authenticity."
            imageUrl="https://contentful.harrypotter.com/usf1vwtuqyxm/3QQaEkThAnIAiXveGhJYD9/f79a571dbe9fd456d65e783040601fdc/hogwarts-castle-.jpg?q=75&fm=jpg&w=2560"
            cta1={{
              text: "Explore Characters",
              className: "btn-primary",
              href: "/characters"
            }}
            cta2={{
              text: "Discover Houses",
              className: "btn-outline",
              href: "/houses"
            }}
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <StatsDashboard
                stats={[
                  { value: "1,247", label: "Characters", color: "text-gold", description: "Detailed profiles" },
                  { value: "4", label: "Houses", color: "text-amber", description: "Noble houses" },
                  { value: "892", label: "Spells", color: "text-deep-blue", description: "Magical incantations" },
                  { value: "7", label: "Years", color: "text-crimson", description: "Academic years" }
                ]}
              />

              <div className="mt-6 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gold rounded-full"></div>
                  <span className="text-[#f5f0e3]/80">Authentic magical lore</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber rounded-full"></div>
                  <span className="text-[#f5f0e3]/80">Historical accuracy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-deep-blue rounded-full"></div>
                  <span className="text-[#f5f0e3]/80">Interactive exploration</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="glass-panel rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-ink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-gold">HC</span>
                  </div>
                  <h3 className="text-2xl font-bold text-ivory mb-2">Official Wizarding Archive</h3>
                  <p className="text-[#f5f0e3]/70">Since 2023</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between py-3 border-b border-[#c4a867]/20">
                    <span className="text-[#f5f0e3]/70">Total Entries</span>
                    <span className="font-bold text-ivory">2,147+</span>
                  </div>
                  <div className="flex items-center justify-between py-3 border-b border-[#c4a867]/20">
                    <span className="text-[#f5f0e3]/70">Active Contributors</span>
                    <span className="font-bold text-ivory">24</span>
                  </div>
                  <div className="flex items-center justify-between py-3">
                    <span className="text-[#f5f0e3]/70">Monthly Visitors</span>
                    <span className="font-bold text-ivory">15,000+</span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#c4a867]/20">
                  <h4 className="font-bold text-ivory mb-3">Our Values</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-black/30 rounded-full text-xs font-medium text-gold">Accuracy</span>
                    <span className="px-3 py-1 bg-black/30 rounded-full text-xs font-medium text-amber">Integrity</span>
                    <span className="px-3 py-1 bg-black/30 rounded-full text-xs font-medium text-deep-blue">Scholarship</span>
                    <span className="px-3 py-1 bg-black/30 rounded-full text-xs font-medium text-emerald">Innovation</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">
              Comprehensive Magical Knowledge
            </h2>
            <p className="text-xl text-[#f5f0e3]/70 max-w-3xl mx-auto">
              Our archive is meticulously organized to provide the most complete and accurate representation of the wizarding world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.color} bg-black/30`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-ivory mb-3">{feature.title}</h3>
                <p className="text-[#f5f0e3]/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="section bg-[var(--panel)]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="card-glow p-8">
              <h3 className="text-2xl font-bold text-ivory mb-4">Magical Timeline</h3>
              <p className="text-[#f5f0e3]/70 mb-6">
                Journey through centuries of wizarding history with our interactive timeline, featuring major events, births, deaths, and magical discoveries.
              </p>
              <Link to="/timeline" className="btn-secondary">
                Explore Timeline
              </Link>
            </div>
            
            <div className="card-glow p-8">
              <h3 className="text-2xl font-bold text-ivory mb-4">Sorting Hat Quiz</h3>
              <p className="text-[#f5f0e3]/70 mb-6">
                Discover which Hogwarts house you belong to with our authentic Sorting Hat experience, based on canonical personality traits and values.
              </p>
              <Link to="/sorting-hat" className="btn-secondary">
                Take the Quiz
              </Link>
            </div>
            
            <div className="card-glow p-8">
              <h3 className="text-2xl font-bold text-ivory mb-4">Magical Map</h3>
              <p className="text-[#f5f0e3]/70 mb-6">
                Navigate the grounds of Hogwarts and explore magical locations with our detailed interactive map, complete with hidden passages and secret rooms.
              </p>
              <Link to="/map" className="btn-secondary">
                View Map
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-6">
              Begin Your Magical Journey
            </h2>
            <p className="text-xl text-[#f5f0e3]/70 mb-8">
              Join thousands of witches and wizards who have explored our comprehensive archive of magical knowledge.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/characters" className="btn-primary">
                Start Exploring
              </Link>
              <Link to="/about" className="btn-outline">
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
