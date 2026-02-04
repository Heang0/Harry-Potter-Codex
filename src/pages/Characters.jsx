import { useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';
import { characters as allCharacters } from '../data/characters.js';

const Characters = () => {
  const [searchParams] = useSearchParams();
  const initialSearch = searchParams.get('search') || '';

  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedHouse, setSelectedHouse] = useState('All');

  useEffect(() => {
    setSearchTerm(initialSearch);
  }, [initialSearch]);

  const houses = useMemo(
    () => ['All', 'Gryffindor', 'Slytherin', 'Ravenclaw', 'Hufflepuff', 'Other'],
    []
  );

  const filteredCharacters = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return allCharacters.filter((c) => {
      const haystack =
        `${c.name} ${c.house} ${c.role} ${(c.bio || []).join(' ')}`.toLowerCase();
      const matchesSearch = !term || haystack.includes(term);
      const matchesHouse =
        selectedHouse === 'All'
          ? true
          : selectedHouse === 'Other'
            ? !['gryffindor', 'slytherin', 'ravenclaw', 'hufflepuff'].includes((c.house || '').toLowerCase())
            : (c.house || '') === selectedHouse;

      return matchesSearch && matchesHouse;
    });
  }, [searchTerm, selectedHouse]);

  return (
    <div className="pt-20 pb-16">
      <div className="container-max mb-10">
        <div className="text-center mb-8">
          <h1 className="headline">Characters</h1>
          <p className="lead max-w-2xl mx-auto">
            Search the wizarding world by name, house, or keywords.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="rounded-2xl p-5 md:p-6"
             style={{ background: 'var(--panel)', border: '1px solid var(--border)', boxShadow: '0 20px 60px var(--shadow)' }}>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search characters... (try: Snape, Luna, Auror)"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-5 py-3 rounded-xl outline-none"
                style={{
                  background: 'rgba(0,0,0,0.12)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
              />
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm" style={{ color: 'var(--muted-2)' }}>
                Search
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {houses.map((house) => (
                <button
                  key={house}
                  onClick={() => setSelectedHouse(house)}
                  className="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                  style={{
                    background:
                      selectedHouse === house ? '#c4a867' : 'var(--panel-strong)',
                    color: selectedHouse === house ? '#0b0d12' : 'var(--muted)',
                    border: '1px solid var(--border)',
                  }}
                  type="button"
                >
                  {house}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results count */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-sm" style={{ color: 'var(--muted)' }}>
            Showing <span className="text-gold font-semibold">{filteredCharacters.length}</span> of{' '}
            <span className="font-semibold">{allCharacters.length}</span> characters
          </p>

          {searchTerm.trim() && (
            <button
              type="button"
              onClick={() => setSearchTerm('')}
              className="text-sm underline underline-offset-4"
              style={{ color: 'var(--muted)' }}
            >
              Clear search
            </button>
          )}
        </div>

        {/* Characters Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mt-6">
          {filteredCharacters.length > 0 ? (
            filteredCharacters.map((character) => (
              <CharacterCard key={character.id} character={character} />
            ))
          ) : (
            <div className="col-span-full text-center py-16">
              <div className="text-6xl mb-4">Search</div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--text)' }}>
                No characters found
              </h3>
              <p style={{ color: 'var(--muted)' }}>
                Try different keywords or choose another house.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Characters;
