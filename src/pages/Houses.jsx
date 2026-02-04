import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';
import gryffindorCrest from '../assets/Gryffindor.png';
import slytherinCrest from '../assets/Slytherin.png';
import ravenclawCrest from '../assets/Ravenclaw.png';
import hufflepuffCrest from '../assets/Hufflepuff.png';

const Houses = () => {
  const houses = [
    {
      name: "Gryffindor",
      crest: gryffindorCrest,
      color: "text-red-300",
      bgColor: "bg-red-600/20",
      borderColor: "border-red-500/30",
      traits: ["Bravery", "Courage", "Chivalry", "Determination"],
      founder: "Godric Gryffindor",
      mascot: "Lion",
      commonRoom: "Tower with portrait of the Fat Lady",
      description: "Gryffindors are known for their bravery, courage, and chivalry. They value daring and determination above all else."
    },
    {
      name: "Slytherin",
      crest: slytherinCrest,
      color: "text-green-300",
      bgColor: "bg-green-600/20",
      borderColor: "border-green-500/30",
      traits: ["Ambition", "Cunning", "Resourcefulness", "Leadership"],
      founder: "Salazar Slytherin",
      mascot: "Serpent",
      commonRoom: "Dungeons beneath the Black Lake",
      description: "Slytherins are ambitious, cunning, and resourceful. They value leadership and are known for their determination to achieve their goals."
    },
    {
      name: "Ravenclaw",
      crest: ravenclawCrest,
      color: "text-blue-300",
      bgColor: "bg-blue-600/20",
      borderColor: "border-blue-500/30",
      traits: ["Intelligence", "Wisdom", "Creativity", "Curiosity"],
      founder: "Rowena Ravenclaw",
      mascot: "Eagle",
      commonRoom: "Tower with eagle door knocker",
      description: "Ravenclaws are intelligent, wise, and creative. They value knowledge and learning above all else, seeking wisdom in all things."
    },
    {
      name: "Hufflepuff",
      crest: hufflepuffCrest,
      color: "text-yellow-300",
      bgColor: "bg-yellow-600/20",
      borderColor: "border-yellow-500/30",
      traits: ["Loyalty", "Patience", "Hard Work", "Fairness"],
      founder: "Helga Hufflepuff",
      mascot: "Badger",
      commonRoom: "Basement near the kitchens",
      description: "Hufflepuffs are loyal, patient, and hardworking. They value fairness and are known for their dedication and reliability."
    }
  ];

  const Stars = ({ count = 0 }) => (
    <span className="inline-flex items-center justify-center gap-1" aria-label={`${count} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          style={{
            color: i < count ? 'var(--gold)' : 'rgba(127, 127, 127, 0.35)',
            fill: i < count ? 'var(--gold)' : 'transparent',
          }}
          aria-hidden="true"
        />
      ))}
    </span>
  );

  return (
    <div className="pt-20 pb-16">
      {/* Header */}
      <div className="container-max mb-12">
        <div className="text-center mb-8">
          <h1 className="headline">Hogwarts Houses</h1>
          <p className="lead max-w-2xl mx-auto">
            Discover the four noble houses of Hogwarts School of Witchcraft and Wizardry, each with its unique values and traditions.
          </p>
        </div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {houses.map((house, index) => (
            <motion.div
              key={house.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`card-glow p-6 ${house.borderColor} border`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-2xl font-bold ${house.color}`}>
                  {house.name}
                </h3>
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center ${house.bgColor}`}
                  style={{ border: '1px solid var(--border)' }}
                >
                  <img
                    src={house.crest}
                    alt={`${house.name} crest`}
                    className="h-11 w-11 object-contain"
                    loading="lazy"
                  />
                </div>
              </div>
              
              <p className="text-[#f5f0e3]/70 mb-4">
                {house.description}
              </p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-ivory mb-2">Founder</h4>
                <p className="text-[#f5f0e3]/70">{house.founder}</p>
              </div>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-ivory mb-2">Key Traits</h4>
                <div className="flex flex-wrap gap-2">
                  {house.traits.map((trait, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-black/30 rounded-full text-xs font-medium text-[#f5f0e3]/80"
                    >
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="space-y-2 text-sm">
                <div className="flex items-center">
                  <span className="text-[#f5f0e3]/60 w-20">Mascot:</span>
                  <span className="text-ivory">{house.mascot}</span>
                </div>
                <div className="flex items-center">
                  <span className="text-[#f5f0e3]/60 w-20">Common Room:</span>
                  <span className="text-ivory">{house.commonRoom}</span>
                </div>
              </div>
              
              <Link 
                to={`/characters?house=${house.name.toLowerCase()}`}
                className="btn-secondary mt-5 w-full"
              >
                View Members
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* House Comparison */}
      <section className="section bg-[var(--panel)]">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-ivory mb-8 text-center">
            House Comparison
          </h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-[#c4a867]/20">
                  <th className="py-4 px-6 text-left text-ivory font-semibold">Trait</th>
                  {houses.map((house) => (
                    <th key={house.name} className="py-4 px-6 text-center">
                      <div className={`inline-flex items-center space-x-2 ${house.color}`}>
                        <span className="font-bold">{house.name}</span>
                        <span className={`w-3 h-3 rounded-full ${house.bgColor}`}></span>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#c4a867]/10">
                  <td className="py-4 px-6 text-[#f5f0e3]/70">Bravery</td>
                  {houses.map((house) => (
                    <td key={`${house.name}-bravery`} className="py-4 px-6 text-center">
                      <Stars count={house.name === 'Gryffindor' ? 5 : house.name === 'Hufflepuff' ? 4 : 2} />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#c4a867]/10">
                  <td className="py-4 px-6 text-[#f5f0e3]/70">Intelligence</td>
                  {houses.map((house) => (
                    <td key={`${house.name}-intelligence`} className="py-4 px-6 text-center">
                      <Stars count={house.name === 'Ravenclaw' ? 5 : house.name === 'Slytherin' ? 4 : 3} />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#c4a867]/10">
                  <td className="py-4 px-6 text-[#f5f0e3]/70">Ambition</td>
                  {houses.map((house) => (
                    <td key={`${house.name}-ambition`} className="py-4 px-6 text-center">
                      <Stars count={house.name === 'Slytherin' ? 5 : house.name === 'Gryffindor' ? 3 : 2} />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-[#c4a867]/10">
                  <td className="py-4 px-6 text-[#f5f0e3]/70">Loyalty</td>
                  {houses.map((house) => (
                    <td key={`${house.name}-loyalty`} className="py-4 px-6 text-center">
                      <Stars count={house.name === 'Hufflepuff' ? 5 : house.name === 'Gryffindor' ? 4 : 3} />
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="container-max text-center mt-12">
        <h3 className="text-2xl font-bold text-ivory mb-4">
          Which House Do You Belong To?
        </h3>
        <p className="text-xl text-[#f5f0e3]/70 mb-8">
          Take our Sorting Hat quiz to discover your true Hogwarts house.
        </p>
        <Link to="/sorting-hat" className="btn-primary inline-flex items-center gap-2">
          <span>Take the Quiz</span>
        </Link>
      </div>
    </div>
  );
};

export default Houses;
