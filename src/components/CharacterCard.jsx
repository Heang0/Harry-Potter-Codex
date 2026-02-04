import { Link } from 'react-router-dom';

const CharacterCard = ({ character }) => {
  const getHouseColor = (house) => {
    switch ((house || '').toLowerCase()) {
      case 'gryffindor':
        return 'bg-red-600/15 text-red-300 border-red-500/30';
      case 'slytherin':
        return 'bg-green-600/15 text-green-300 border-green-500/30';
      case 'ravenclaw':
        return 'bg-blue-600/15 text-blue-300 border-blue-500/30';
      case 'hufflepuff':
        return 'bg-yellow-600/15 text-yellow-300 border-yellow-500/30';
      default:
        return 'bg-gray-600/15 text-gray-300 border-gray-500/30';
    }
  };

  return (
    <Link
      to={`/characters/${character.id}`}
      className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
      style={{
        background: 'var(--panel)',
        border: '1px solid var(--border)',
        boxShadow: '0 20px 60px var(--shadow)',
      }}
    >
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: '1 / 1' }}>
        {character.image ? (
          <img
            src={character.image}
            alt={character.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = 'https://placehold.co/320x360?text=Character';
            }}
          />
        ) : (
          <div
            className="h-full w-full flex items-center justify-center"
            style={{ background: 'rgba(196,168,103,0.08)' }}
          >
            <span className="text-3xl font-bold text-gold">{character.name?.charAt(0) || '?'}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute left-4 bottom-4 right-4">
          <h3 className="text-lg font-bold text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.65)] truncate">
            {character.name}
          </h3>
          <div className="mt-2">
            <span className={`badge px-2 py-1 text-[10px] font-medium ${getHouseColor(character.house)}`}>
              {character.house}
            </span>
          </div>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm line-clamp-2" style={{ color: 'var(--muted)' }}>
          {character.bio?.[0] || character.description || 'Magical expert and accomplished wizard.'}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2 text-xs" style={{ color: 'var(--muted-2)' }}>
          <span className="inline-flex items-center gap-1 rounded-full px-3 py-1" style={{ border: '1px solid var(--border)' }}>
            Wand: {character.wand ? 'Yes' : 'Unknown'}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full px-3 py-1" style={{ border: '1px solid var(--border)' }}>
            Role: {character.role || 'Wizard'}
          </span>
          {character.patronus && (
            <span className="inline-flex items-center gap-1 rounded-full px-3 py-1" style={{ border: '1px solid var(--border)' }}>
              Patronus
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
