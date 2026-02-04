import { motion } from 'framer-motion';
import { BookOpen, Users, Shield, Star } from 'lucide-react';
import TestimonialCard from '../components/TestimonialCard';

const About = () => {
  const missionPoints = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Preservation",
      description: "We are dedicated to preserving the rich history and lore of the wizarding world for future generations."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Accessibility",
      description: "Making magical knowledge accessible to all witches and wizards, regardless of background or experience."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Accuracy",
      description: "Maintaining the highest standards of historical accuracy and canonical fidelity in all our content."
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Innovation",
      description: "Using modern technology to create immersive and interactive experiences with magical content."
    }
  ];

  return (
    <div className="pt-20 pb-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="container-max">
          <div className="text-center mb-12">
            <h1 className="headline">About Harry Potter</h1>
            <p className="lead max-w-3xl mx-auto mt-4">
              The definitive archive of wizarding knowledge, created by passionate fans dedicated to preserving the legacy of Hogwarts School of Witchcraft and Wizardry.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="section">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-[#f5f0e3]/70 max-w-3xl mx-auto">
              To create the most comprehensive, accurate, and accessible archive of wizarding knowledge in existence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {missionPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow p-6"
              >
                <div className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 bg-gold/10 text-gold">
                  {point.icon}
                </div>
                <h3 className="text-xl font-bold text-ivory mb-3">{point.title}</h3>
                <p className="text-[#f5f0e3]/70">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="section bg-[var(--panel)]">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-ivory mb-6">
                A Legacy of Magical Scholarship
              </h2>
              <p className="text-lg text-[#f5f0e3]/70 mb-6">
                Founded in 2023 by a group of dedicated wizarding scholars, Harry Potter began as a humble collection of notes and references. 
                What started as a passion project has grown into the most comprehensive digital archive of magical knowledge available today.
              </p>
              
              <p className="text-lg text-[#f5f0e3]/70 mb-6">
                Our team of researchers, historians, and magical experts work tirelessly to ensure that every entry in our database meets the highest standards of accuracy and completeness.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ink text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-ivory">1,247+ Characters</h3>
                    <p className="text-[#f5f0e3]/70 text-sm">Detailed profiles with biographies, relationships, and magical abilities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-amber rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ink text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-ivory">892 Spells</h3>
                    <p className="text-[#f5f0e3]/70 text-sm">Complete spell descriptions, incantations, and historical context</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-deep-blue rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-ink text-xs font-bold">✓</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-ivory">4 Houses</h3>
                    <p className="text-[#f5f0e3]/70 text-sm">Comprehensive house histories, traditions, and notable members</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-parchment rounded-3xl p-8 shadow-xl border border-[#c4a867]/30">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 bg-ink rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-4xl font-bold text-gold">HP</span>
                  </div>
                  <h3 className="text-2xl font-bold text-ivory mb-2">Harry Potter</h3>
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
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-[#f5f0e3]/70 max-w-3xl mx-auto">
              The dedicated scholars and developers who bring the Harry Potter to life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: "Professor Alaric Finch", role: "Chief Archivist", expertise: "Magical History" },
              { name: "Dr. Elara Moonstone", role: "Head Researcher", expertise: "Spell Theory" },
              { name: "Master Orion Blackwood", role: "Technical Director", expertise: "Magical Computing" },
              { name: "Lady Seraphina Ravenclaw", role: "Curator", expertise: "Ancient Runes" }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-glow p-6 text-center"
              >
                <div className="w-20 h-20 bg-ink rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl font-bold text-gold">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-ivory mb-1">{member.name}</h3>
                <p className="text-gold font-medium mb-2">{member.role}</p>
                <p className="text-[#f5f0e3]/70 text-sm">{member.expertise}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section bg-[var(--panel)]">
        <div className="container-max">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-ivory mb-4">
              What Scholars Say
            </h2>
            <p className="text-xl text-[#f5f0e3]/70 max-w-3xl mx-auto">
              Trusted by magical historians and researchers worldwide for its accuracy and comprehensiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                author: "Professor Minerva McGonagall",
                role: "Former Headmistress, Hogwarts",
                content: "The Harry Potter represents the most comprehensive and accurate archive of wizarding knowledge I have encountered in my decades of service."
              },
              {
                author: "Sirius Black",
                role: "Order of the Phoenix Member",
                content: "This archive has become an invaluable resource for understanding our magical heritage and preserving it for future generations."
              },
              {
                author: "Hermione Granger",
                role: "Minister for Magic",
                content: "The attention to detail and scholarly approach make this the definitive reference for magical studies in the modern era."
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-[var(--panel)]">
        <div className="container-max text-center">
          <h2 className="text-3xl font-bold text-ivory mb-6">
            Join Our Magical Community
          </h2>
          <p className="text-xl text-[#f5f0e3]/70 mb-8 max-w-3xl mx-auto">
            Become part of our growing community of magical scholars, researchers, and enthusiasts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary">
              Contribute to the Archive
            </button>
            <button className="btn-outline">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;