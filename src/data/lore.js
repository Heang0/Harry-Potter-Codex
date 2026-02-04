export const loreSections = [
  {
    id: 'chamber-of-secrets',
    title: 'Chamber of Secrets',
    summary: 'A hidden chamber built by Salazar Slytherin, housing a basilisk.',
    details:
      "The Chamber was opened twice in modern times, first by Tom Riddle and later by Ginny under the diary's influence. Its legacy is tied to purity ideology and the basilisk that petrified students.",
    relatedMovies: ['chamber-of-secrets'],
    relatedCharacters: ['harry-potter', 'tom-riddle', 'ginny-weasley'],
  },
  {
    id: 'horcruxes',
    title: 'Horcruxes',
    summary: 'Dark objects that store pieces of a soul to prevent death.',
    details:
      'Voldemort created multiple Horcruxes: the diary, ring, locket, cup, diadem, Nagini, and unintentionally Harry. Destroying each one was essential to ending his reign.',
    relatedMovies: ['half-blood-prince', 'deathly-hallows-part-1', 'deathly-hallows-part-2'],
    relatedCharacters: ['tom-riddle', 'harry-potter'],
  },
  {
    id: 'deathly-hallows',
    title: 'Deathly Hallows',
    summary: 'Three legendary objects tied to mastery over death.',
    details:
      'The Elder Wand symbolizes power, the Resurrection Stone represents longing, and the Invisibility Cloak stands for humility. Together they form the Hallows.',
    relatedMovies: ['deathly-hallows-part-1', 'deathly-hallows-part-2'],
    relatedCharacters: ['harry-potter', 'albus-dumbledore'],
  },
  {
    id: 'marauders-map',
    title: "Marauder's Map",
    summary: 'An enchanted map revealing everyone at Hogwarts.',
    details:
      "Created by the Marauders, the map displays the castle's secrets and secret passageways when activated by a specific phrase.",
    relatedMovies: ['prisoner-of-azkaban'],
    relatedCharacters: ['sirius-black', 'remus-lupin'],
  },
  {
    id: 'room-of-requirement',
    title: 'Room of Requirement',
    summary: 'A magical space that appears when someone needs it.',
    details:
      "The room transforms to match the seeker's needs and has been used as a training room, hideout, and storage for hidden artifacts.",
    relatedMovies: ['order-of-the-phoenix', 'deathly-hallows-part-2'],
    relatedCharacters: ['harry-potter', 'hermione-granger'],
  },
  {
    id: 'forbidden-forest',
    title: 'Forbidden Forest',
    summary: 'A vast forest filled with magical creatures and danger.',
    details:
      'Home to centaurs, unicorns, and other beings, the forest is both a sanctuary and a threat. Students are forbidden to enter without permission.',
    relatedMovies: ['sorcerers-stone'],
    relatedCharacters: ['harry-potter', 'rubeus-hagrid'],
  },
  {
    id: 'azkaban',
    title: 'Azkaban & Dementors',
    summary: 'The wizarding prison guarded by Dementors.',
    details:
      'Azkaban is infamous for its soul-sapping guards and harsh conditions. Dementors feed on happiness and can administer the Kiss.',
    relatedMovies: ['prisoner-of-azkaban'],
    relatedCharacters: ['sirius-black', 'harry-potter'],
  },
  {
    id: 'platform-934',
    title: 'Platform 9 3/4',
    summary: 'The hidden platform that leads to the Hogwarts Express.',
    details:
      "Located between Platforms 9 and 10 at King's Cross, it is accessed by walking through the barrier.",
    relatedMovies: ['sorcerers-stone'],
    relatedCharacters: ['harry-potter', 'ron-weasley'],
  },
]

export const glossary = [
  { term: 'Horcrux', definition: 'A dark object containing a fragment of a soul.' },
  { term: 'Patronus', definition: 'A protective charm that takes the form of an animal.' },
  { term: 'Animagus', definition: 'A witch or wizard who can transform into an animal.' },
  { term: 'Occlumency', definition: 'The art of shielding the mind from intrusion.' },
]

export const watchOrder = {
  books: [
    "Sorcerer's Stone",
    'Chamber of Secrets',
    'Prisoner of Azkaban',
    'Goblet of Fire',
    'Order of the Phoenix',
    'Half-Blood Prince',
    'Deathly Hallows',
  ],
  movies: [
    "Sorcerer's Stone",
    'Chamber of Secrets',
    'Prisoner of Azkaban',
    'Goblet of Fire',
    'Order of the Phoenix',
    'Half-Blood Prince',
    'Deathly Hallows Part 1',
    'Deathly Hallows Part 2',
  ],
}

export const iconicLocations = [
  { label: 'Great Hall', mapId: 'great-hall' },
  { label: 'Library', mapId: 'library' },
  { label: 'Astronomy Tower', mapId: 'astronomy-tower' },
  { label: "Hagrid's Hut", mapId: 'hagrids-hut' },
  { label: 'Forbidden Forest', mapId: 'forbidden-forest' },
]

export const bestSpells = [
  'Lumos',
  'Alohomora',
  'Accio',
  'Protego',
  'Reparo',
  'Stupefy',
  'Expecto Patronum',
]

export const didYouKnow = [
  'Hogwarts shifts its staircases at will, confusing late-night wanderers.',
  'The Room of Requirement becomes a sanctuary only when someone truly needs it.',
  "The Marauder's Map tracks every person in Hogwarts with their real name.",
  'A Patronus can carry messages to distant allies.',
  'The Sorting Hat once considered placing Harry in Slytherin.',
]
